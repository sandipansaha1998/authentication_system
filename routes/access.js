const express = require('express');
const router = express.Router();
const passportLocal = require('../config/passport-local');
const passport = require('passport');

const userController = require('../controllers/userController');
const accessController = require('../controllers/accessController');
// Creating session for user after successful login 
// on failure gets redirected to login page
router.post('/create-session',
passport.authenticate(
    'local',
    {failureRedirect:'/login'}
),accessController.createSession);


// Destroys session and signs out the user
router.get('/destroy-session',accessController.destroySession);

module.exports = router;