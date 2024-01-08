const mongoose = require("mongoose")

//connect node with mongodb
mongoose.connect("mongodb://substring:priti123@cluster0.slghwxx.mongodb.net/")

.then(() => {
    console.log("mongodb connected")
})

.catch((err) => {
    console.log(err)
    console.log("failed to connect");
})

const LogInschema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    }

})

const collection = new mongoose.model("collection1", LogInschema);

module.exports = collection