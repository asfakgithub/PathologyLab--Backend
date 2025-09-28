const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: String
    },
    fasting: {
        required: true,
        type: String
    },
    // imgLink: {
    //     // required: true,
    //     type: String,
    //     default: "https://images.app.goo.gl/zyGdzq1uer7DU1eL9"
    // },
    normalRange: {
        required: true,
        type: String
    },
    abnormalRange: {
        required: true,
        type: String
    }
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
})

const repo = mongoose.model("test", Schema)
module.exports = repo;