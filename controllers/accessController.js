const User = require('../models/user');
const bcrypt = require('bcrypt');
// After Passport and express session creates USER session , it is redirected to HOME
module.exports.createSession =  function(req,res)
{
   console.log('session created')
   return res.redirect('/');
}
// Logs Out the User
module.exports.destroySession = function(req,res)
{
    console.log("Logged out")
    req.logout(function(err){
        if (err) { console.log(err); return; } 
        return res.redirect('/login');
      });
    
    
};
// Renders the Login Page
module.exports.renderLogin = function (req,res) {
    if(req.isAuthenticated())
    {   
        return res.redirect('/');
    }

    return res.render('login',{
        title:'Login',
        layout:'access_layout'
    })
}
// Renders the Sign Up Page
module.exports.renderSignUp = function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/');
    }
    return res.render('signup',{
        title:'Sign Up',
        layout:'access_layout'
    })
}



        