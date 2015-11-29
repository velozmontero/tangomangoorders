// app/models/user.js

// load the things we need
var mongoose = require('mongoose');
var crypto   = require('crypto');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
    }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return crypto.createHash("md5").update(password).digest('hex');
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return this.generateHash(password)== this.local.password;
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
