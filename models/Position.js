const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create PositionSchema
const PositionSchema = new Schema({
    //admin_user
    //company
    //department
    team: {
      type: Schema.Types.ObjectId,
      ref: 'team'
    },
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    responsibilities: {
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

PositionSchema.pre('remove', function(doc) {
  console.log('position depedencies removed')
  console.log('doc', doc);
  console.log('this._id', this._id)


  //remove users
  Position.find({user: this._id }).lean().then(users => {
    console.log('users', users)
    users.forEach(function (user) {
      console.log('user', user)

      Position.findOneAndRemove({ _id: user._id }, function(err, user){
          if (err) {
            console.log(err);
            return res.status(500).send();
          } else {
            user.remove();
          }
      });
    })
  })

  //remove positionHiringPlan
  Position.find({positionHiringPlan: this._id }).lean().then(positionHiringPlans => {
    console.log('positionHiringPlans', positionHiringPlans)
    positionHiringPlans.forEach(function (positionHiringPlan) {
      console.log('positionHiringPlan', positionHiringPlan)

      Position.findOneAndRemove({ _id: positionHiringPlan._id }, function(err, positionHiringPlan){
          if (err) {
            console.log(err);
            return res.status(500).send();
          } else {
            positionHiringPlan.remove();
          }
      });
    })
  })

  //remove positionHiringBoard
  Position.find({positionHiringBoard: this._id }).lean().then(positionHiringBoards => {
    console.log('positionHiringBoards', positionHiringBoards)
    positionHiringBoards.forEach(function (positionHiringBoard) {
      console.log('positionHiringBoard', positionHiringBoard)

      Position.findOneAndRemove({ _id: positionHiringBoard._id }, function(err, positionHiringBoard){
          if (err) {
            console.log(err);
            return res.status(500).send();
          } else {
            positionHiringBoard.remove();
          }
      });
    })
  })

  //remove onboardChecklist
  Position.find({onboardChecklist: this._id }).lean().then(onboardChecklists => {
    console.log('onboardChecklists', onboardChecklists)
    onboardChecklists.forEach(function (onboardChecklist) {
      console.log('onboardChecklist', onboardChecklist)

      Position.findOneAndRemove({ _id: onboardChecklist._id }, function(err, onboardChecklist){
          if (err) {
            console.log(err);
            return res.status(500).send();
          } else {
            onboardChecklist.remove();
          }
      });
    })
  })

  //remove terminateChecklist
  Position.find({terminateChecklists: this._id }).lean().then(terminateChecklists => {
    console.log('terminateChecklists', terminateChecklists)
    terminateChecklists.forEach(function (terminateChecklist) {
      console.log('terminateChecklist', terminateChecklist)

      Position.findOneAndRemove({ _id: terminateChecklist._id }, function(err, terminateChecklist){
          if (err) {
            console.log(err);
            return res.status(500).send();
          } else {
            terminateChecklist.remove();
          }
      });
    })
  })

});


module.exports = Position = mongoose.model('position', PositionSchema)
