const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Team = require('./Team');

//Create DepartmentSchema
const DepartmentSchema = new Schema({
    // adminUser
    company: {
      type: Schema.Types.ObjectId,
      ref: 'company'
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

DepartmentSchema.pre('remove', function(doc) {
  console.log('department depedencies removed')
  console.log('doc', doc);
  console.log('this._id', this._id)

  Team.find({department: this._id }).lean().then(teams => {
    console.log('teams', teams)
    teams.forEach(function (team) {
      console.log('team', team)

      Team.findOneAndRemove({ _id: team._id }, function(err, team){
          if (err) {
            console.log(err);
            return res.status(500).send();
          } else {
            team.remove();
          }
      });
    })
  })
});

module.exports = Department = mongoose.model('department', DepartmentSchema)
