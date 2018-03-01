//connect with mongodb
var mongoose = require('mongoose');
//create mongodb's schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name :String,
    screen_name: String,
    bio: String
});

module.exports = mongoose.model('UserModel', UserSchema);




