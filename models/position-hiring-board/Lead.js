const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const LeadSchema = new Schema({
    //admin_user
    //company
    //department
    //team
    //position
    //position-hiring-board
    Stage: {
      type: Schema.Types.ObjectId,
      ref: 'stage'
    },
    extEmail: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    quality: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    cv: {
        type: String, //string will have url address where cv is stored
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    handle: {
        type: String
    }
});


module.exports = Lead = mongoose.model('lead', LeadSchema);
