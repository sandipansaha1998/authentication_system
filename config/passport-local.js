const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcrypt')

// Authentication Using Local Startegy
passport.use(new LocalStrategy({
    usernameField:'email', 
    passReqToCallback:true //passes the request body to the callback
},
async function(req,email,password,done){ // Callback function 
    await User.findOne({email:email})
    .then(async (user)=>{
        if(!user) //No user Exsists
            {
            req.flash('error','No user found.Sign up to Start')
            console.log("No user Found");
            return done(null,false);
            }
        let isCorrect = await bcrypt.compare(password, user.password); //Comparing typed password and actual password using bcrypt
        if(!isCorrect)
        {
            console.log("Incorrect Email/Password");
            req.flash('error','Incorrect Email/Password');
            return done(null,false); // not authenticated
        }
        console.log("User login success. Logging in ...");
   
        return done(null,user); // authenticated --> user is serialised and saved in the cookies
    }
    ).catch(err => {console.log(err);return})
}
));

// serialization
passport.serializeUser(function(user,done){
    done(null,user._id);
})
// deserialization
passport.deserializeUser(async function(userID,done){
    const userInfo = await User.findById(userID).then(users => {return users}).catch(err=>{console.log("Error in finding the user");return done(err)});
    return done(null,userInfo);
});

// Middleware to check Authentication
passport.checkAuthentication = function(req,res,next){
    // if the user is signed in,then  next middleware is called
    if(req.isAuthenticated())
        return next();
    
    // if not signedIn,then rediredted to login page
    return res.redirect('/login');
}
passport.setAuthenticatedUser = function (req,res,next) {
    // user is extracted and set to the locals for access

    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
  }


module.exports = passport;