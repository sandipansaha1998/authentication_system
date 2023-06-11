const passport = require("passport");
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
const crypto = require("crypto");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const env = require("../config/enviroment");

passport.use(
  new googleStrategy(
    {
      clientID: process.env.AUTH_SYS_GOOGLE_ID,
      clientSecret: process.env.AUTH_SYS_GOOGLE_CLIENT_SECRET,
      callbackURL: `http://${env.root_url}/user/auth/google/callback`,
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("Inside callback");
      // Find the user
      User.findOne({ email: profile.emails[0].value })
        .then(async (user) => {
          if (user)
            // if found,set this user as req.user
            return done(null, user);
          else {
            // Hashed the password
            let hashedPassword = await bcrypt.hash(
              crypto.randomBytes(20).toString("hex"),
              10
            );
            console.log(hashedPassword);
            // Create the user and then set this as req.user
            User.create({
              name: profile.displayName,
              email: profile.emails[0].value,
              password: hashedPassword,
              resetPasswordLinkTime: Date.now(),
            })
              .catch((err) => {
                console.log("Error in creating a new user", err);
                return;
              })
              .then((user) => {
                console.log("Succes in google auth");
                return done(null, user);
              });
          }
        })
        .catch((err) => {
          console.log("Error in google strategy", err);
        });
    }
  )
);

module.exports = passport;
