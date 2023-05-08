const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
const env = require('../config/enviroment')
//Creating the transporter
let transporter = nodemailer.createTransport(env.smtp);

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
