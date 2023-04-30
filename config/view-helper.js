// Helpers in production mode to fetch the lastest minified assets.

const env = require('./enviroment');
const fs = require('fs');
const path = require('path');
// Instance of express app
module.exports = (app) =>{
    app.locals.assetPath = function(filePath)
    {
        if(env == 'development')
            return filePath;
    
return JSON.parse(
    fs.readFileSync(path.join(__dirname,'../public/assets/rev-manifest.json')) // reads rev-manifest.json , converts it to JSON and uses the filepath mentioned in views as keys.
    )[filePath];
}}