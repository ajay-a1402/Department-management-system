const mongoose = require('mongoose')
const CONFIG = require('../config/config')
const Schema = mongoose.Schema

const DailyUpdatesSchema = new mongoose.Schema({
    Name: {
        type: String
    },

    description: {
        type: String
    },
   
    department: {
        type: String,
        enum: CONFIG.department,
    },
    idcard: {
        type: String
    },
    regno:{
        type:String
    },
     batch:{
           type:String
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





}, { timestamps: true })


DailyUpdatesSchema.methods.toWeb = function() {
    let json = this.toJSON()
    json.id = this._id //this is for the front end
    return json
}

module.exports = mongoose.model('DailyUpdate', DailyUpdatesSchema)