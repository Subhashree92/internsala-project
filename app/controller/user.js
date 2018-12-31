const express = require('express');
const _ = require('lodash');
const router = express.Router();
const{User}=require('../model/user');
router.get('/',(req,res)=>{
    User.find().then((users)=>{
        res.send(users);
    }).catch((err)=>{
        re.send(err);
    })
});
router.post('/',(req,res)=>{
        let body=req.body;
        let user=new User(body);
        user.save().then((users)=>{
            res.send(users);
        }).catch((err)=>{
            res.send(err);
        })
    })
module.exports={
    UserController:router
}