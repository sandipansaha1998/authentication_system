# Authentication system
>A starter code for any authentication application



![](https://img.shields.io/badge/version-1.0.1-orange?style=for-the-badge&logo=appveyor) ![](https://img.shields.io/badge/dependencies-up%20to%20date-success?style=for-the-badge&logo=appveyor) 
![](https://img.shields.io/badge/website-offline-lightgrey?style=for-the-badge&logo=appveyor) 

![](https://img.shields.io/badge/node--lts%40latest-10.15.0-brightgreen)
![](https://img.shields.io/badge/bcrypt-5.0.0-red)
![](https://img.shields.io/badge/connect--flash-0.1.1-brightgreen)
![](https://img.shields.io/badge/crypto-1.0.1-red)
![](https://img.shields.io/badge/multer-1.4.2-brightgreen)
![](https://img.shields.io/badge/nodemailer-6.4.11-red)
![](https://img.shields.io/badge/passport-0.4.1-brightgreen)
![](https://img.shields.io/badge/passport--google--oauth-2.0.0-red)



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


## Optimization
- [x] Used Gulp to compress static files in production
- [x] Used Redis to manage priority and completion order among tasks

## Upcoming Feature
- [x] Facebook - Login/Signup.
- [x] Use of reCAPTCHA - For blocking bots to signup.


### Technology Stack Used

Particulars | Version
----------- | ---------
bcrypt: ^5.1.0
brcypt: ^1.0.1
connect-flash: ^0.1.1
connect-mongo: ^5.0.0
crypto: ^1.0.1
del: ^7.0.0
ejs: ^3.1.9
express: ^4.18.2
express-ejs-layouts: ^2.5.1
express-session: ^1.17.3
gulp: ^4.0.2
gulp-cssnano: ^2.1.3
gulp-rev: ^10.0.0
gulp-uglify-es: ^3.0.0
kue: ^0.11.6
mongoose: ^7.0.5
nodemailer: ^6.9.1
nodemon: ^2.0.22
noty: ^3.2.0-beta-deprecated
npm: ^9.6.5
passport: ^0.6.0
passport-google-oauth: ^2.0.0
passport-local: ^1.0.0
sessions: ^0.0.2-7


```
# :eyes: End of my ReadME.. Follow me if you like it!!
