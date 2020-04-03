const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create UserSchema
const EventSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    trip: {
      type: Schema.Types.ObjectId,
      ref: 'trip' //users is name of collection exported from model User
    },
    stop: {
      type: Schema.Types.ObjectId,
      ref: 'stop' //users is name of collection exported from model User
    },
    day: {
      type: Schema.Types.ObjectId,
      ref: 'day' //users is name of collection exported from model User
    },
    order: {
      type: Number
    },
    handle: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    location: {
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



{/*eventName: {
    type: String
},
eventAddress: {
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

module.exports = Event = mongoose.model('event', EventSchema)
