const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const OneToOneSchema = new Schema({
    //admin_oneToOne
    //company
    //department
    //team
    //position
    //user
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    strengths: {
        type: Array
    },
    weaknesses: {
        type: Array
    },
    actions: {
        type: Array
    },
    hardSkillsDic: {
        type: Array
    },
    softSkillsDic: {
        type: Array
    },
    actionsDic: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    },
    handle: {
        type: String
    }
});


module.exports = OneToOne = mongoose.model('oneToOne', OneToOneSchema);
