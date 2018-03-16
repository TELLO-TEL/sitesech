var mongoose = require('mongoose');
var categorySchema = mongoose.Schema({
    title:{
        type: String ,
        required :true
    },
    created_at:{
        type:Date ,
        default: Date.now
    }
});
/// getcategory
var Category = module.exports = mongoose.model('Category' ,categorySchema);
 module.exports.getCategories = function (callback , limit) {
     Category.find(callback).limit(limit).sort([['title' , 'ascending']]) ;
 }