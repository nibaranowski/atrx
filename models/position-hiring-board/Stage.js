const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const StageSchema = new Schema({
    //admin_user
    //company
    //department
    //team
    //position
    //position-hiring-board
    positionHiringBoard: {
      type: Schema.Types.ObjectId,
      ref: 'positionHiringBoard'
    },
    name: {
        type: String,
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

StageSchema.pre('remove', function(doc) {
  console.log('stage depedencies removed')
  console.log('doc', doc);
  console.log('this._id', this._id)


  //remove leads
  Stage.find({lead: this._id }).lean().then(leads => {
    console.log('leads', leads)
    leads.forEach(function (lead) {
      console.log('lead', lead)

      Stage.findOneAndRemove({ _id: lead._id }, function(err, lead){
          if (err) {
            console.log(err);
            return res.status(500).send();
          } else {
            lead.remove();
          }
      });
    })
  })


});


module.exports = Stage = mongoose.model('stage', StageSchema);
