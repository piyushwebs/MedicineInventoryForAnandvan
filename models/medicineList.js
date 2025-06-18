const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  description:String,
  manufactureDate:{
    type:String,
    required:true,
  },
  expiryDate:{
   type:String,
   required:true,
  },
  quantityAvailable:{
    type:Number,
    required:true,
  },
  price:
  {
    type:Number,
    required:true,
  },
  image:{
    url:{
      type:String,
      required:true,
    }
  },
  
});


const listing = mongoose.model("listing",listingSchema);
module.exports = listing;