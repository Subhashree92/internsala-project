const express = require('express');
const router = express.Router();
const{UserController}=require('../app/controller/user');
router.use('/users',UserController);
module.exports = {
    router
}