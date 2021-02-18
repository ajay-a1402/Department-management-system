const mongoose = require('mongoose')
const CONFIG = require('../config/config')
const Schema = mongoose.Schema

const DistributionSchema = new mongoose.Schema({

    // DistributionType:{
    //     type:String,
    //     required:true,
    //     enum:CONFIG.DistributionType
    // },
    // location:{
    //     type:String ,
    //     required:true,
    // },
    // assignedBy:{
    //     type:String,
    // },
    // status:{
    //     type:String,
    //     default:"Not completed"
    // },
    // description:{
    //     type:String
    // },
    // assignedto:{
    //     type:String
    // },
    // active:{
    //     type:Boolean,
    //     default:true
    // },
    department:{
        type:String,
        enum:CONFIG.department,
    },
    id:{
  type:String
    },
   marksheet:{
       type:String
   },
   coursecertficate:{
       type:String
   },
   comptitioncertifacte:{
       type:String
   },
   Sportscertificate:{
       typr:String
   },
   tc:{
       type:String
   },
   


}, {timestamps: true})


DistributionSchema.methods.toWeb = function () {
    let json = this.toJSON()
    json.id = this._id//this is for the front end
    return json
}

module.exports = mongoose.model('Distribution', DistributionSchema)
