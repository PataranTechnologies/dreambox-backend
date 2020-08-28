const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    motherLastName: {
        type: String
    },
    telephone: {
        type: Number,
        minlength: 10,
        maxlength: 10,
    },
    email: {
        type: String
    },
    role: [{type: String}],
    lastConnection: {
        type: Object,
        date: {
            type: String
        },
        time: {
            type: String
        }
    },
    profilePicture: {
        type: String
    },
    permissions:{
        modules: {
            type: [String]
        },
        banking: {
            type: [String]
        }
    },
    status: {
        active: {
            type: Boolean
        }
    },
});

module.exports = mongoose.model("Admin", adminSchema);