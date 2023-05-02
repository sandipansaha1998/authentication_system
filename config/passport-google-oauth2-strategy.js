const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');
const bcrypt = require('bcrypt');

passport.use(new googleStrategy({
    clientID:'674660657407-iuuqn5iaop23agtkllkg85d0gjoupv8t.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL:'http://13.51.255.230.nip.io/user/auth/google/callback'
},
    function(accessToken,refreshToken,profile,done){
        console.log('Inside callback')
        // Find the user 
        User.findOne({email:profile.emails[0].value}).then(async (user) =>{
            if(user)
            // if found,set this user as req.user
                return done(null,user);
            else
            {
                // Hashed the password
                let hashedPassword = await bcrypt.hash(crypto.randomBytes(20).toString('hex'), 10);
                console.log(hashedPassword)
            // Create the user and then set this as req.user 
                User.create({
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    password:hashedPassword,
                    resetPasswordLinkTime:Date.now()
                }
                ).catch(err=>{
                    console.log('Error in creating a new user',err);
                    return
                }).then(user=>{
                    console.log("Succes in google auth")
                    return done(null,user);
                })
                
            }
        }).catch(err => {
            console.log('Error in google strategy',err);
        })
    }
))

module.exports = passport;