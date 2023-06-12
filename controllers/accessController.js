const bcrypt = require("bcrypt");

const User = require("../models/user");
const getTodayDate = require("./getDateToday");
// After Passport and express session creates USER session , it is redirected to HOME
module.exports.createSession = function (req, res) {
  try {
    console.log("session created");
    req.flash("success", "Welcome!");
    return res.redirect("/");
  } catch (e) {
    console.log(e);
    return;
  }
};
// Logs Out the User
module.exports.destroySession = function (req, res) {
  try {
    console.log("log out");
    req.logout(function (err) {
      if (err) {
        console.log(err);
        return;
      }
      req.flash("success", "Logged out");
      return res.redirect("/login");
    });
  } catch (e) {
    console.log(e);
    return;
  }
};
// Renders the Login Page
module.exports.renderLogin = function (req, res) {
  try {
    if (req.isAuthenticated()) {
      return res.redirect("/");
    }

    return res.render("login", {
      title: "Login",
      layout: "access_layout",
    });
  } catch (e) {
    console.log(e);
    return;
  }
};
// Renders the Sign Up Page
module.exports.renderSignUp = function (req, res) {
  try {
    if (req.isAuthenticated()) {
      return res.redirect("/");
    }
    return res.render("signup", {
      title: "Sign Up",
      layout: "access_layout",
    });
  } catch (e) {
    console.log(e);
  }
};

// Renders confirm email page for password reset link
module.exports.renderConfirmEmail = function (req, res) {
  return res.render("./reset_password/confirm_email", {
    title: "Confirm Your Email",
    layout: "access_layout",
  });
};
//  Renders Password Reset Form for that particular User
module.exports.renderResetPasswordForm = async function (req, res) {
  try {
    if (req.isAuthenticated()) {
      console.log("User Signed in");
      return res.render("./reset_password/reset_pass_form", {
        title: "Reset",
        // User id is fetched from the url
        user_id: req.params.id,
        layout: "layout",
      });
    }
    let user = await User.findById(req.params.id);
    if (user) {
      console.log(getTodayDate() - user.resetPasswordLinkTime);
      // Checking Expiry
      if (getTodayDate() - user.resetPasswordLinkTime < 600000) {
        return res.render("./reset_password/reset_pass_form", {
          title: "Reset",
          // User id is fetched from the url
          user_id: req.params.id,
          layout: "access_layout",
        });
      } else {
        return res.status(404).send("<h1>Link has expired</h1>");
      }
    }
  } catch (e) {
    console.log(e);
    return;
  }
};
