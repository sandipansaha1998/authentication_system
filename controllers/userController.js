const User = require('../models/user');
const passport = require('passport')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const queue = require('../config/kue');
const resetPasswordMailer = require('../worker/reset_password_email_worker');
const ejs = require('ejs');
const path = require('path');



// New User Registration
module.exports.create = async function(req,res)
{ 
    
    try{
        let hashedPassword = await bcrypt.hash(req.body.password, saltRounds); // hashing the password   
        // new user details
        let newUser = {
            email:req.body.email,
            password:hashedPassword,
            name:req.body.name,
            resetPasswordLinkTime:Date.now()
        }
        // if user email id already exsists ,redirect to login-page
        const createUser = await User.create(newUser).then(
            newUser => 
            {
                console.log("Successfully created")
                req.flash('success','User Registered');
                return res.redirect('/login');
            })
    }catch(e){
            console.log(e)
            return;
    }
    
}

// Checking if User exsists before user registration
module.exports.checkIfUserExsists = async function(req,res){
    let searchedEmail = req.query.email;
    console.log(searchedEmail)
    if(req.xhr)
    {
        // Finds the user with the email id submitted
        // returns boolean result based on value of user
        let user = await User.findOne({email:searchedEmail});
        if(user)
        {
            return res.status(200).json({
                message:"User Exsists",
                ifUserExsists:true
            })
        }
        else
        {
            return res.status(200).json({
                message:"No User Exsists",
                ifUserExsists:false
            })
        }
    }
}

// Sends Reset Password Link
module.exports.sendResetPasswordLink = async function(req,res){
    try{
        let user = await User.findOne({email:req.body.email});
        if(!user){
            
           console.log('No emails Found');
           req.flash('error','No emails found , Sign up to start!');

            res.redirect('back');
        }
        else{
            // Setting Validity of link
            user.resetPasswordLinkTime = Date.now();
            user.save();
            // Send Password Reset Link
            // mailer.resetPasswordLink(user);
            queue.create('emails',user).save(function (err) {
                if(err){
                    console.log("Error in sending job to queue",err);
                }
              })
            console.log('Reset Link Sent to Registered Email')
            req.flash('success','Link sent to Registered Email');
            res.redirect('/login')
        }
    }catch(e){
        console.log(e);
    }
   
}
// Reset Password
module.exports.resetPassword = async function(req,res){
    try{
    
        if(req.body.password != req.body.confirm_password)
        {
            console.log("Does not match")
            req.flash('error','Passwords dont Match');
            res.redirect('back')
        }    
        else
        {
        let user = await User.findById(req.body.user_id);
        let hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        user.password = hashedPassword;
        user.save();
            console.log('Reset Password Succesful')
            
            if(req.isAuthenticated){
                req.flash('success','Your password is reset successfully');
                return res.redirect('/');
            }
                
            req.flash('success','Your password is reset successfully.Login to start');
            return res.redirect('/login')
        }

    }catch(e){
        console.log(e);
    }  
    } 

// Render User Information Page
module.exports.getInfo= async function(req,res){
    try{
      
        return res.render('userProfile',{
            title:'User Info',
            layout:'layout'
        })
    }catch(e){
        console.log(e);
        return;
    }
   
} 