const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

//Creating the transporter
let transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'socialise.india.web@gmail.com',
        pass:'bzvukndojhtxacyh'
    }});

// Filepath for the HTML Email in the dir
let renderTemplate = (data,relativePath) =>
{
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template){
            console.log(relativePath)
            if(err){console.log('Error in rendering template',err);return}
            mailHTML = template;
        }
    )
    return mailHTML;
}
module.exports = {
    transporter:transporter,
    renderTemplate:renderTemplate 
}
