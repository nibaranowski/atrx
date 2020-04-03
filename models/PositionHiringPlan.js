const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const PositionHiringPlanSchema = new Schema({
    //admin_user
    //company
    //department
    position: {
      type: Schema.Types.ObjectId,
      ref: 'position'
    },
    hiringDic: {
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

module.exports = PositionHiringPlan = mongoose.model('positionHiringPlan', PositionHiringPlanSchema);
