const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create Schema
const UserSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  // filterimage: {
  //   type: Array,
  //   required: true
  // },
  Marksheet: {  
    type: String,
    require:true
  },
  Tc: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  idCard:{
    type:String,
    required:true
  },
  Coursecertificate:{
    type:String,
    required: true
  },
//   size: {
//     type: Array,
//     required: true
// },
// product_code: {
//   type:Number,
//   required:true
// },
SportsCertficate:{
  type:String,
  required:true
},
competition_Certificate:{
  type:String,
  required:true
},
// discount:{
//   type:Number,
//   required:true
// },
// old_price:{
//   type:Number,
//   required:true
// },
// product_details:{
//   type:String,
//   required:true
// }
})
module.exports = Filter = mongoose.model('filter', UserSchema)