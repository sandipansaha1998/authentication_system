const nodemailer = require('../config/nodemailer');

module.exports.resetPasswordLink = function(user){
    // Collecting the template to be rendered with email
    let htmlString = nodemailer.renderTemplate({
        user:user
    },'reset_password.ejs')

    nodemailer.transporter.sendMail({
        from:'socialise.india.web@gmail.com',
        to:user.email,
        subject:"Reset Password Link",
        html: htmlString,
    },(err,info) => {
        if(err){
            console.log(`Error in sending mail`,err);
            return;
        }
        console.log('message sent',info)
    })
}