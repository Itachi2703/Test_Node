const mongoose = require("mongoose")

const My_Schema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    Name: {
        type: String
    }
})

module.exports = mongoose.model("Users", My_Schema)