const mongoose=require('mongoose')


const userName=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    blog:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('user',userName)