var mongoose = require('mongoose');
var searchPlugin = require('mongoose-search-plugin');
var websiteSchema = mongoose.Schema({
    title:{
        type: String ,
        required :true
    },
url:{
        type: String ,
        required :true
    },
description:{
        type: String ,
        required :true
    },

    
    created_at:{
        type:Date ,
        default: Date.now
    }
});

websiteSchema.plugin(searchPlugin ,{
    fields:['title' ,'description' , 'url']
});
/// getwebsite
var Website = module.exports = mongoose.model('Website' ,websiteSchema);


 module.exports.searchWebsites = function (callback , searchText) {
     Website.search(searchText ,{title:1 ,description:1 , url:1},{
         conditions:{title:{$exists: true} , description:{$exists:true} , url:{$exists:true}
        },
        sort:{title:1} ,
        limit: 50
     }, callback);
 }

 module.exports.addWebsite = function (website , callback) {
     Website.create(website , callback);
     
     
 }