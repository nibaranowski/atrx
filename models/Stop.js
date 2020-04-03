const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create UserSchema
const StopSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user' //users is name of collection exported from model User
    },
    trip: {
      type: Schema.Types.ObjectId,
      ref: 'trip' //users is name of collection exported from model User
    },
    order: {
      type: Number
    },
    handle: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    startLocation: {
      type: String
    },
    endLocation: {
      type: String
    },
    startTime: {
      type: Date
    },
    endTime: {
      type: Date
    },
    price: {
      type: String
    },
    pctBooked: {
      type: Number
    },
    budgetAllocation: {
      type: Number
    },
    balance: [
      {
        nature: {
            type: Number,
        },
        fun: {
            type: String,
        },
        sport: {
            type: String,
        },
        culture: {
            type: Number,
        },
        relax : {
            type: Number //not required cause it could be 'current'
        }
      },
    ],
    date: {
      type: Date,
      default: Date.now
    }
});



StopSchema.pre('remove', function(doc) {
  console.log('stop depedencies removed')
  console.log('doc', doc);
  console.log('this._id', this._id)

  Day.find({stop: this._id }).lean().then(days => {
    console.log('days', days)
    days.forEach(function (day) {
      console.log('day', day)

      Day.findOneAndRemove({ _id: day._id }, function(err, day){
          if (err) {
            console.log(err);
            return res.status(500).send();
          } else {
            day.remove();
          }
      });

    })
  })
});



{/*stopName: {
    type: String
},
stopAddress: {
    type: String
},
company: {
    type: String
},
website: {
    type: String
},
location:  {
    type: String
},
status:  {
    type: String,
    required: true //cause they have to select a status anyway
},
skills: {
    type: [String], //array of strings
    required: true
},
bio: {
    type: String
},
githubusername: {
    type: String
},
experience: [
    {
        title: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        location: {
            type: String,
        },
        from: {
            type: Date,
            required: true
        },
        to : {
            type: Date //not required cause it could be 'current'
        },
        current: {
            type: Boolean,
            default: false
        },
        description: {
            type: String
        }
    },
],
education: [
    {
        school: {
            type: String,
            required: true
        },
        degree: {
            type: String,
            required: true
        },
        fieldofstudy: {
            type: String,
            required: true
        },
        from: {
            type: Date,
            required: true
        },
        to : {
            type: Date //not required cause it could be 'current'
        },
        current: {
            type: Boolean,
            default: false
        },
        description: {
            type: String
        }
    }
],
social : {
    youtube: {
        type: String
    },
    twitter: {
        type: String
    },
    facebook: {
        type: String
    },
    linkedin: {
        type: String
    },
    instagram: {
        type: String
    },
},*/}

module.exports = Stop = mongoose.model('stop', StopSchema)
