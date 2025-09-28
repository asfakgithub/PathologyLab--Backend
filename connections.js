const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/tests").then(() => {
    console.log("Mongo DB Connected Successfully")
}).catch(err =>{
    console.log("Something Went wrong")
})