const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    }, 
    status: {
        default:"Pending",
        type: String
    },
    age: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    },
    mobileNo: {
        required: true,
        type: String
    },
    examinedBy: {
        required: true,
        type: String
    },
    examinedDate: {
        required: true,
        type: String
    },
    test: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
    },
    reportdate: {
        required: true,
        type: String
    },
    result:[{
        // name:{
        //     required: true,
        //     type: String
        // },
        // range: {
        //     required: true,
        //     type: String
        // },
        // unit: {
        //     required: true,
        //     type: String
        // },
        // result: {
        //     required: true,
        //     type: String
        // }
        initialComplain: String,
        medicalHistory: String,
        diagnosys: {
       BP:String,
       Diabetics:String,
         SPO2:String,
           Height:String,
           Weight:String ,
           Others:String
        },
        medicineAdvice: String,
        advice: String
    }]
}, {
    timeStamps: {
        createdAt: true,
        updatedAt: String
    }
})

const repo = mongoose.model("patient", Schema)
module.exports = repo;