const User = require('../models/user');

module.exports.home = async function(req,res){
    try{
        // let user = await User.findbyID()
        return res.render('home',{
            layout:'layout',
            title:'Authentication System'
        });
    }catch(e){

    }
}