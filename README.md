# Authentication system
>
A robust and scalable starter code for implementing user authentication and authorization in web applications. It provides a secure foundation with essential features such as user sign up, sign in, sign out, and password reset. The system supports email-based authentication as well as social authentication through Google login/signup.

The web app is built on NodeJS with Express JS as the framework.The Model-View-Controller architecture was implemented.EJS served as templating engine .

### Features
- [x] Signup users with unique emailID.
- [x] Client side verification of emailID.
- [x] Client side verification of password pattern (minimum length : 6 chars).
- [x] Log In using verified emailID.
- [x] Client can reset the password after login.
- [x] Client can reset the password through link if forgotton,which would be sent to their registered email address.
- [x] The password reset email expires after 10 minutes 

### Added Feature
- [x] Use of flash notifications.
- [x] Error notification if their is password mismatch while singing up, loging in and reseting password.
- [x] Successful notification for signing in/signing out , updating and reseting the password.
- [x] Use of Social Login - Google Login/Sigup 
- [x] Use of Nodemailer to send reset password email 


### Optimization
- [x] Used Gulp to compress static files in production
- [x] Used Redis to manage priority and completion order among tasks

### Upcoming Feature
- [x] Facebook - Login/Signup.
- [x] Use of reCAPTCHA - For blocking bots to signup.


### Technology Stack Used

Particulars | Version
----------- | ---------
bcrypt: 5.1.0
brcypt: 1.0.1
connect-flash: 0.1.1
connect-mongo: 5.0.0
crypto: 1.0.1
del: 7.0.0
ejs: 3.1.9
express: 4.18.2
express-ejs-layouts: 2.5.1
express-session: 1.17.3
gulp: 4.0.2
gulp-cssnano: 2.1.3
gulp-rev: 10.0.0
gulp-uglify-es: 3.0.0
kue: 0.11.6
mongoose: 7.0.5
nodemailer: 6.9.1
nodemon: 2.0.22
noty: 3.2.0-beta-deprecated
npm: 9.6.5
passport: 0.6.0
passport-google-oauth: 2.0.0
passport-local: 1.0.0
sessions: 0.0.2-7

### Directory Structure
```
authentication_system
├── config
│   ├── enviroment.js
│   ├── flashMiddleware.js
│   ├── kue.js
│   ├── mongoose.js
│   ├── nodemailer.js
│   ├── passport-google-oauth2-strategy.js
│   ├── passport-local.js
│   └── view-helper.js
├── controllers
│   ├── accessController.js
│   ├── homeController.js
│   └── userController.js
├── dump.rdb
├── gulpfile.mjs
├── index.js
├── mailers
│   └── resetPassword.js
├── models
│   └── user.js
├── package-lock.json
├── package.json
├── public
│   ├── rev-manifest.json
│   └── static
│       ├── css
│       │   ├── access_layout-9d210f9b18.css
│       │   ├── header-bd7433fe01.css
│       │   └── layout-12ffa3a099.css
│       ├── js
│       │   ├── checkEmailExsists-b03b03ec1a.js
│       │   └── validate_input-c37d66accc.js
│       └── rev-manifest.json
├── routes
│   ├── access.js
│   ├── index.js
│   └── user.js
├── static
│   ├── css
│   │   ├── access_layout.css
│   │   ├── header.css
│   │   └── layout.css
│   └── js
│       ├── checkEmailExsists.js
│       └── validate_input.js
├── views
│   ├── _header.ejs
│   ├── access_layout.ejs
│   ├── home.ejs
│   ├── layout.ejs
│   ├── login.ejs
│   ├── mailers
│   │   └── reset_password.ejs
│   ├── reset_password
│   │   ├── confirm_email.ejs
│   │   └── reset_pass_form.ejs
│   ├── signup.ejs
│   └── userProfile.ejs
└── worker
    └── reset_password_email_worker.js

