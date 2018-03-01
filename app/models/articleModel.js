//connect with mongodb
var mongoose = require('mogoose');
//create mongodb's schema
var Schema = mongoose.Schema;
//add moment.js
var moment = require('moment');

var ArticleSchema = new Schema({
    title:String,
    text:String,
    date:String
});

ArticleSchema.methods.setDate = function(){
    //set create time
    this.date = moment().format("YYYY-MM-DD HH:mm:ss");
};

module.exports = mongoose.model('ArticleModel', ArticleSchema);