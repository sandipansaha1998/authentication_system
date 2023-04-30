const path = require('path');





const development = {
    name:'development',
    asset_path:'/static' ,
    session_cookie_key:'crunchy',
    db:'taskgrid_development',
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:'socialise.india.web@gmail.com',
            pass:'bzvukndojhtxacyh'
        }
    }
}

const production = {
    name:'production',
    asset_path:process.env.AUTH_SYS_ASSET_PATH ,
    session_cookie_key:process.env.AUTH_SYS_SESSION_COOKIE_KEY,
    db:process.env.AUTH_SYS_DB,
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:process.env.AUTH_SYS_EMAIL,
            pass:process.env.AUTH_SYS_PASS
        }
    }
}

module.exports = eval(process.env.AUTH_SYS_ENVIROMENT) == undefined ? development:production;

