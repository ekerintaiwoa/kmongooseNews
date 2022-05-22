
const express=  require("express");
const userController = require("./Controllers/userController") ;
const adminController = require("./Controllers/adminController");
const bodyParser =  require('body-parser');

const router = express.Router() ;



// route for the homepage
router.get("/" ,userController.index) ;

//routes for the detailed page

router.get("/detailed/:id", userController.detailedpage) ;


// routes for backend
 //router.get("/admin/login" ,adminController.login)

 router.get("/admin",adminController.index);


 // route for displaying the page for adding a  news Article
 router.get("/admin/addnews" , adminController.addNews) ;

 // route for retrieving the values added to the addnews page and adding a new News article

  router.post("/admin/addnews",adminController.getEnteredData);



  // displays the page for updating(editing) the news 

  router.get("/admin/edit/:id", adminController.editpage) ;



  //update the News 

  router.post("/admin/edit/:id", adminController.updateNews) ;



  router.get("/admin/delete/:id", adminController.deleteNews) ;
















module.exports = router