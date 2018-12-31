const mongoose=require('mongoose');
const validator=require('validator');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    image:{
        type:String
    },
username:{
    type:String,
    minlength:8,
    maxlength:128
},
email:{
type:String,

unique:true,
validate:{
    validator:function(value){
        return validator.isEmail(value);
    }
}
},
contact:{
    type:Number
},
address:{
    type:String
}
});
const User=mongoose.model('User',userSchema);
    module.exports={
        User
    }