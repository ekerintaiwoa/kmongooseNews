const flash = require("connect-flash/lib/flash");
const db = require("../db.js") ;
const newsModel = require("../model/newsModel");
const  news = require("../model/newsModel");







exports.index = (req,res)=>{
    
    try {
        newsModel.find({},(err,News)=>{

            if(err){
                res.status(400).json({"error":errors.join(",")});

            }

           
            res.render("backend/index" ,{News} )

        })
        
    } catch (error) {
        
        console.log(error)
    }


}


// displays the page for adding the news 
exports.addNews = (req,res)=>{

     
   res.render("backend/addnews")

   
}


  // retrieves the data posted in the form
exports.getEnteredData = (req,res)=>{

     try {
             const newArticle = new newsModel({
               
                Author: req.body.author ,
                Titel : req.body.titel ,
                TextInhalt :req.body.textInhalt ,
               
               Erstellungszeitpunkt :  new Date()
                   
             }) ;
             newArticle.save();
             console.log("article saved into database");
         
     
     } catch (error) {

        console.log(error) ;     
     }
}


//  callback function for displaying the page for updating(editing )  the news


exports.editpage =  (req,res)=>{

    console.log(req.params.id)
   // console.log(req.body)
   try {
    newsModel.findById({_id:req.params.id},(err,singleNews)=>{
       
     if(err){

         console.log(err)
     }

     console.log(singleNews)
     res.render("backend/editpage" ,{singleNews}) ;

    })
    
} catch (error) {
    
    console.log(error)
}


}



// callback function for updating the News article
  exports.updateNews = (req,res)=>{

       try {
           
         newsModel.findByIdAndUpdate({_id:req.params.id},
            {Author:req.body.author,Titel:req.body.titel,TextInhalt:req.body.textInhalt},(err,doc)=>{
            
            if(err) {
                console.log(error)
            }

            doc.save() ;
            console.log("the news succesfully updated")

         }) ;

             console.log("article sucessfully updated") 
           
       } catch (error) {
           
        console.log(error)
       }

  }



  // call back function for deleteting the news Page
exports.deleteNews = (req,res)=>{

   try {
       
       newsModel.findByIdAndDelete({_id:req.params.id},(err,doc)=>{

            if(err){

                console.log(err)
            }

          
            res.redirect("/admin")

            console.log("news article sucessfully deleted");

       })

   } catch (error) {
       
    console.log(error) ;
   }

}


