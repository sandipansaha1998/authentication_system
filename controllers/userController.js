const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;





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

