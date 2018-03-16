var express = require('express');
var router = express.Router();
Website = require('../models/websites.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
 var searchText = req.body.searchText;
 var searchType = req.body.searchType ;
 
 if (searchType == 'website') { 
   Website.searchWebsites(searchText, function(err,websites){
     if (err) {
       res.send(err);
     }
     var model = {
       websites : websites.results 
     }
     res.render('websitesresults' , models);
   });
  }
 else if(searchType =='news'){

 }else{
   res.send('choose website or news');
 }
});

module.exports = router;
