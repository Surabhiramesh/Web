var express = require('express');
var router = express.Router();
// var passport = require('./auth.js');
var mongoose = require('mongoose');
var bCrypt = require('bcrypt-nodejs');
var flash = require('connect-flash');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var moment = require('moment');
var multer = require('multer');
var nodemailer = require('nodemailer');
var async = require('async');
var crypto = require('crypto');
var farmers = mongoose.model('farmers');
var stories = mongoose.model('stories');


 router.get("/",function(req, res,next){
   farmers.find({},function(err,data){
   	console.log(data);
     res.render('index.html',{'data':data});
 })
 });

  //  router.get("/editUser",function(req, res,next){
  //   farmers.find({},function(err,data){
  //   	console.log(data);
  //     res.render('index2.html',{'data':data});
  // })
  // });


 router.get('/editUser/:id', function(req, res, next){
  farmers.findOne({"_id":req.params.id},function(err,data){
  	console.log(data);
      res.render('index2.html',{'data':data});
  })


  });



 router.get('/stories/:id', function(req, res, next){
  stories.findOne({"_id":req.params.id},function(err,data){
    console.log(data);
      res.render('index3.html',{'story':data});
  })


  });


router.get("/stories/",function(req, res,next){
  stories.find({},function(err,data){
  	console.log(data);
    res.render('stories.html',{'data':data});
  });
});





  router.post("/index3/:id",function(req,res,next){ 
  stories.findByIdAndUpdate(req.params.id,{
    $set : {
      farmer : req.body.Id,
      time : req.body.Time,
     rawImage :  req.body.rawImage,
     location :{
       village : req.body.village,
    taluka : req.body.taluk,
     },
     layerPrakshep : {
      setBalls : req.body.setBalls,
      
     },
     scribbleImage : req.body.scribbleImage,
        caption: req.body.Caption,
    
 }
  },function(err,apiData){
    if(err){
      console.log(err);
      req.flash("error","Error encountered while updating the data.If the problem persists contact admin");
    }
    else{
      req.flash('success','Data has been successfully updated.');
    } 
    console.log(apiData);
    res.redirect('/stories/'+req.params.id);
  })
 });

//    farmers.update({"name":"Ramesh"},{$set:{_isEmail:"true"}},function(err,data){
// 	  console.log(err);
//       console.log(data);
// });



   router.post("/index2/:id",function(req,res,next){ 
  farmers.findByIdAndUpdate(req.params.id,{
    $set : {
      name : req.body.Name, 
     email :  req.body.Email,
     location :{
       village : req.body.Village,
     district : req.body.District,
     state : req.body.State,
     country : req.body.Country,

     }
    
 }
  },function(err,apiData){
    if(err){
    	console.log(err);
      req.flash("error","Error encountered while updating the data.If the problem persists contact admin");
    }
    else{
      req.flash('success','Data has been successfully updated.');
    } 
    console.log(apiData);
    res.redirect('/editUser/'+req.params.id);
  })
 } );

     

module.exports = router;
