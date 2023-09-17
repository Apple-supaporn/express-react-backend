///////////////////////////////
// MODELS
////////////////////////////////
const { mongoose } = require("mongoose");

const formerAddressSchema = new mongoose.Schema({
    streetAddressL1: {type:'String'},
    streetAddressL2: {type:'String'},
    city: {type:'String'},
    state: {type:'String'},
    zip: {type:Number},
    country: {type:'String', default: 'USA'},
})

const PersonSchema = new mongoose.Schema({
    firstName: {type:'String', required: true},
    lastName: {type:'String', required: true},
    streetAddressL1: {type:'String', required: true},
    streetAddressL2: {type:'String'},
    city: {type:'String', required: true},
    state: {type:'String', required: true},
    zip: {type:Number, required:true},
    country: {type:'String', default: 'USA'}, //it's default value for people in USA. in the frontend don't need to add country.
    pastAddresses: [formerAddressSchema],
    phoneNumber: {
        type:'String', 
        required: true, 
        minLength: [14, 'Please enter your number using the following format, no spaces allowed: (111)-111-1111'], 
        maxLength: [14, 'Please enter your number using the following format, no spaces allowed: (111)-111-1111']}, //(111)-111-1111
    email: {type:'String', required: true},
  });
  
  const Person = mongoose.model("Person", PersonSchema);
  
  module.exports = Person
