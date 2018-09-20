const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title:String,
    body:String,
    subject:String,
    recipients:[RecipientSchema],
    _user:{type:Schema.Types.ObjectId,ref:'User'},
    no: {type:Number,default:0},
    yes: {type:Number,default:0},
    dateSent:Date,
    lastResponded:Date
});

mongoose.model('surveys',surveySchema);