var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    roll_no :{
        type : String
    },
    name:{
        type : String
    },
    phy:{
        type : Number
    },
    chem:{
        type:Number
    },
    maths:{
        type:Number
    },
    total:{
        type:Number
    }
})
module.exports = mongoose.model('result',userschema);