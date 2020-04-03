const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const TerminateTaskSchema = new Schema({
    //admin_terminateTask
    //company
    //department
    //team
    //position
    //terminate-checklist
    terminateChecklist: {
      type: Schema.Types.ObjectId,
      ref: 'terminateChecklist'
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


module.exports = TerminateTask = mongoose.model('terminateTask', TerminateTaskSchema);
