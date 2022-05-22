const db = require("../db.js") ;


const newsModel = require("../model/newsModel");


exports.index = (req,res)=>{
    
    try {
        newsModel.find({},(err,News)=>{

            if(err){
              res.status(400).json({"error":errors.join(",")});

            }

           
            res.render("frontend/index" ,{News} )

        })
        
    } catch (error) {
       console.log(error)
    }

}







   exports.detailedpage = (req,res)=>{

     console.log(req.params.id) ;

     try {
       newsModel.findById({_id:req.params.id},(error,detailedNews)=>{

            if(error){
              console.log(error)
              return;

            }

           res.render("frontend/detailedpage",{detailedNews})

        })

     } catch (error) {
        
        console.log(error) ;
     }
     

   }