const path = require("path");
// Development Mode Properties

const development = {
  name: "development",
  root_url: "localhost:8000",
  asset_path: "/static",
  session_cookie_key: "crunchy",
  db: "authentication_development",
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.AUTH_SYS_EMAIL,
      pass: process.env.AUTH_SYS_PASS,
    },
  },
};
// production Mode Properties

const production = {
  name: "production",
  root_url: "authentication-system.socialise-india.in",
  asset_path: process.env.AUTH_SYS_ASSET_PATH,
  session_cookie_key: process.env.AUTH_SYS_SESSION_COOKIE_KEY,
  db: process.env.AUTH_SYS_DB,
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.AUTH_SYS_EMAIL,
      pass: process.env.AUTH_SYS_PASS,
    },
  },
};

module.exports =
  eval(process.env.AUTH_SYS_ENVIROMENT) == undefined ? development : production;
