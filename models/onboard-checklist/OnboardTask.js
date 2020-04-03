const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const OnboardTaskSchema = new Schema({
    //admin_onboardTask
    //company
    //department
    //team
    //position
    //onboard-checklist
    onboardChecklist: {
      type: Schema.Types.ObjectId,
      ref: 'onboardChecklist'
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean
    },
    order: {
        type: Number
    },
    type: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    handle: {
        type: String
    }
});


module.exports = OnboardTask = mongoose.model('onboardTask', OnboardTaskSchema);
