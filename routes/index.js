const express = require('express');
const router = express.Router();
const passportLocal = require('../config/passport-local');
const passport = require('passport');
const homeController = require('../controllers/homeController');
const accessController = require('../controllers/accessController');



// Renders Home Page if authenticated else redirects to login page
router.get('/',passportLocal.checkAuthentication,homeController.home);
// Login Page
router.get('/login',accessController.renderLogin);
// Signup Page
router.get('/sign-up',accessController.renderSignUp);
// Reset Password
router.get('/reset-password',accessController.renderConfirmEmail);


router.use('/access',require('./access'));
router.use('/user',require('./user'));

module.exports  = router;