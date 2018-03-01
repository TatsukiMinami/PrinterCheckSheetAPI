var express = require('express');
var router = express.Router();
var UserModel = require('../../models/userModel.js');



//GET http://localhost:3000/api/v1/user/test

router.get('/test',function(req,res){
    res.json({
        message:"This is user api"
    });
});

router.post('/',function(req,res){
    //create model
    var User = new UserModel();

    //import date
    User.name = req.body.name;
    User.screen_name = res.body.screen_name;
    User.bio = req.body.bio;

    //save process

    User.save(function(err){
        if(err){
            //return error messege
            res.send(err);
        }
        else{
            //return success
            res.json({message: 'Success!'});
        }
    });

});

router.get('/',function(req,res){
    UserModel
        .find().then(function(users){
            res.json(users);
        });
});

module.exports = router;