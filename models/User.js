const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const UserSchema = new Schema({
    position: {
      type: Schema.Types.ObjectId,
      ref: 'position'
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'company'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    manager_ids: {
        type: Array
    },
    worker_ids: {
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

UserSchema.pre('remove', function(doc) {
  console.log('user depedencies removed')
  console.log('doc', doc);
  console.log('this._id', this._id)
  //remove oneToOnes
  User.find({oneToOne: this._id }).lean().then(oneToOnes => {
    console.log('oneToOnes', oneToOnes)
    oneToOnes.forEach(function (oneToOne) {
      console.log('oneToOne', oneToOne)

      User.findOneAndRemove({ _id: oneToOne._id }, function(err, oneToOne){
          if (err) {
            console.log(err);
            return res.status(500).send();
          } else {
            oneToOne.remove();
          }
      });
    })
  })


});

module.exports = User = mongoose.model('user', UserSchema)
