const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create AdminUserSchema
const AdminUserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // avatar: {
    //     type: String
    // },
    date: {
        type: Date,
        default: Date.now
    },
    handle: {
        type: String
    }
});

module.exports = User = mongoose.model('adminUser', AdminUserSchema);
