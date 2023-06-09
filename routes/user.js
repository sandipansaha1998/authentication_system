const express = require('express');
const router = express.Router();
const passportLocal = require('../config/passport-local');
const passport = require('passport');

const userController = require('../controllers/userController');
const accessController = require('../controllers/accessController');

// New User Registration
router.post('/create',userController.create);
// check if email exsists
router.get('/isExsist',userController.checkIfUserExsists);
// Sign in Route via google
router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));
// Response Route from Google with user details if authenticated
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/login'}),accessController.createSession);
// Reset Password
router.post('/reset',userController.resetPassword);
// Renders reset Password Form
router.get('/reset/:id',accessController.renderResetPasswordForm);
// Confirm Mail to send Password Reset Link
router.post('/send-link',userController.sendResetPasswordLink)
// Get Info
router.get('/info/:id',passportLocal.checkAuthentication,userController.getInfo)

module.exports = router;