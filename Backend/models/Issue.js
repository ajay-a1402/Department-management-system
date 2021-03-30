const mongoose = require('mongoose')
const CONFIG = require('../config/config')
const Schema = mongoose.Schema

const IssueSchema = new mongoose.Schema({

    name:{
    type:String,
    required:true
    },
    batch:{
        type:String,
        require:true
    },
  
    
    idcard: {
        type: Boolean
    },
  
 marksheet:{
    type:Boolean,
    
},
Tc:{
    type:Boolean
},
coursecertificate:{
    type:Boolean
},
SportsCertificate:{
    type:Boolean
},
// status:{
//     type:String,
//     enum:['In-Complete', 'Complete']
// }
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
    // },,
    
    department:{
        type:String,
        enum:CONFIG.department,
    },



}, {timestamps: true})


IssueSchema.methods.toWeb = function () {
    let json = this.toJSON()
    json.id = this._id//this is for the front end
    return json
}

module.exports = mongoose.model('Issue', IssueSchema)
