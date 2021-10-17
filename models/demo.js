const mongoose = require("mongoose");
const schema = mongoose.Schema;

const demoSchema = new schema({
    name : {
        type : String,
    },
    last : {
        type : String,
    },
    buy : {
        type : String,
    },
    sell : {
        type : String,
    },
    volume : {
        type : String
    },
    base_unit :{
        type : String
    }
});

const demo = mongoose.model("demo" , demoSchema);
module.exports = demo;