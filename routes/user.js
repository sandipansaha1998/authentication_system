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



module.exports = router;