require("dotenv").config();
const db = require("./db.js") ;
const router = require("./router");
 const newsModel = require("./model/newsModel");
 const cookieParser = require("cookie-parser") ;


const express = require("express");

const PORT = process.env.PORT ;

const app =  express() ;
var flash = require('connect-flash');
const session = require("express-session");
app.use(express.urlencoded({extended:true}));


app.use('/static',express.static(__dirname + '/public'));
// displays flash  message

    // session & cookies
    app.use(cookieParser("secretStringForCookies")) ;
    app.use(session({
      
        secret: "secretStringForCookies" ,
        cookie: {maxAge:6000} ,
        resave:true  ,
        saveUninitialized: true


    })) ;

    app.use(flash()) ;

    
    
  

// ;
app.set("view engine", "ejs") ;






app.use("/",router)




app.listen(PORT,()=>{

    console.log(`listening on port ${PORT}`)
})