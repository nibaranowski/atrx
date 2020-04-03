const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create UserSchema
const TeamSchema = new Schema({
    // adminUser
    // company
    department: {
      type: Schema.Types.ObjectId,
      ref: 'department'
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now
    },
    handle: {
        type: String
    }
});


TeamSchema.pre('remove', function(doc) {
  console.log('team depedencies removed')
  console.log('doc', doc);
  console.log('this._id', this._id)


  //remove positions
  Position.find({team: this._id }).lean().then(positions => {
    console.log('positions', positions)
    positions.forEach(function (position) {
      console.log('position', position)

      Position.findOneAndRemove({ _id: position._id }, function(err, position){
          if (err) {
            console.log(err);
            return res.status(500).send();
          } else {
            position.remove();
          }
      });
    })
  })

});


module.exports = Team = mongoose.model('team', TeamSchema)
