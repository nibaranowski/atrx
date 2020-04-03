const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const PositionHiringBoardSchema = new Schema({
    //admin_user
    //company
    //department
    position: {
      type: Schema.Types.ObjectId,
      ref: 'position'
    },
    date: {
        type: Date,
        default: Date.now
    },
    handle: {
        type: String
    }
});

module.exports = PositionHiringBoard = mongoose.model('positionHiringBoard', PositionHiringBoardSchema);
