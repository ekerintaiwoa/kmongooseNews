const mongoose = require("mongoose") ;
const newsSchema = new mongoose.Schema({
    
    Author:{
        type: String,
        required: true ,

    } ,
     
    Titel:{
        type: String,
        required: true ,
    
    }
    
    ,
    TextInhalt : {
        type: String,
        required: true ,
        
    },
    Erstellungszeitpunkt :{
        type :Date  ,
        required:true
    }


})


module.exports = mongoose.model("NewsArticle",newsSchema) ;