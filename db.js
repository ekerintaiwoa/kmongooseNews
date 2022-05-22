const newsArticle  = require("./model/newsModel")
const mongoose = require("mongoose");
require("dotenv").config();

// connected to the local database 
mongoose.connect(process.env.CONNECTION, (err)=>{

if(err){
    console.log(err)
}

  console.log("connected to database") ;

})


