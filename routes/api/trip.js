const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
const validateTripInput = require('../../validation/trip')
const validateExperienceInput = require('../../validation/experience')
const validateEducationInput = require('../../validation/education')


// Load Models
const User = require('../../models/User');
const Trip = require('../../models/Trip');
const Stop = require('../../models/Stop');
const Day = require('../../models/Day');
const Event = require('../../models/Event');

// @route   GET api/trip/test
// @desc    Test trip routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Trip works'}));

// @route   GET api/trip/all
// @desc    Get all trips
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Trip.find()
    .then(trips => {
        if(!trips) {
            errors.notrip = 'There are no trips';
            return res.status(404).json(errors);
        }
    res.json(trips)
    })
    .catch(err =>
      res.status(404).json({ trip: 'There are no trips' })
    );
})

// @route   GET api/trip/all
// @desc    Get all trips
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Trip.find()
    .then(trips => {
        if(!trips) {
            errors.notrip = 'There are no trips';
            return res.status(404).json(errors);
        }
    res.json(trips)
    })
    .catch(err =>
      res.status(404).json({ trip: 'There are no trips' })
    );
})

// @route   GET api/trip/:trip_id
// @desc    Get trip by trip ID
// @access  Private

router.get('/:trip_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Trip.findOne({ _id: req.params.trip_id })
    .then(trip => {
      if (!trip) {
        errors.notrip = 'There is no trip for this ID';
        res.status(404).json(errors);
      }

      res.json(trip);
    })
    .catch(err =>
      res.status(404).json({ trip: 'There is no trip for this ID' })
    );
});

// @route   GET api/trip/user/:user_id
// @desc    Get all trips by user id
// @access  Private
{/*router.get('/user/:user_id', passport.authenticate('jwt', { session: false }), (req, res) => { // important: '/' is already /api/trip
    const errors = {};
    Trip.find({ user_id: req.user.id }) //cause user in Trip model is associated directly to user ID
        .then(trips => {
            if(!trips) {
                errors.notrip = 'There is no trips for this name'; //we add notrip key to errors object
                return res.status(404).json(errors);
            }
            res.json(trips);
        })
        .catch(err => {
          res.status(404).json(err)
        });
})*/}

{/*//works
router.get('/user/:user_id', (req, res) => {
    const errors = {};
    Trip.findOne({ user_id: req.params.user_id }) //**important: params instead of body ! cause handle is passed via the URL
        .then(trip => {
            if(!trip) {
                errors.notrip = 'There is no trip for this user';
                res.status(404).json(errors);
            }
            res.json(trip);
        })
        .catch(err => res.status(404).json(err));
});*/}

// @route   GET api/trip/user/:user_id
// @desc    Get trips by user ID
// @access  Private


router.get('/user/:user_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  console.log('Fetching all trips by user ID')

  Trip.find({ user: req.params.user_id })
    .then(trips => {
      if (!trips) {
        errors.notrips = 'There is no trips for this user';
        res.status(404).json(errors);
      }
      res.json(trips);
    })
    .catch(err =>
      res.status(404).json({ trip: 'There is no trips for this user' })
    );
});

{/*// @route   GET api/profile/user/user-content/:user_id
// @desc    Get profile by user ID
// @access  Private
router.get('/user/user-content/:user_id', (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({ profile: 'There is no profile for this user' })
    );
});*/}



{/*router.get('/trip/user/:user_id', passport.authenticate('jwt', { session: false }), (req, res) => { // important: '/' is already /api/trip
    const errors = {};


    Trip.findOne({ user_id: req.params.user_id }) //cause user in Trip model is associated directly to user ID
        .then(trip => {
            if(!trip) {
                errors.notrip = 'There is no trip for this trip id'; //we add notrip key to errors object
                return res.status(404).json(errors);
            }
            res.json(trip);
        })
        .catch(err => res.status(404).json(err));
})*/}



// @route   POST api/trip
// @desc    Create or edit user trip
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTripInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const tripFields = {};
    tripFields.user = req.user.id;
    if (req.body.handle) tripFields.handle = req.body.handle;
    if (req.body.name) tripFields.name = req.body.name;
    if (req.body.startLocation) tripFields.startLocation = req.body.startLocation;
    if (req.body.endLocation) tripFields.endLocation = req.body.endLocation;
    if (req.body.startTime) tripFields.startTime = req.body.startTime;
    if (req.body.endTime) tripFields.endTime = req.body.endTime;
    if (req.body.startFlight) tripFields.startFlight = req.body.startFlight;
    if (req.body.endFlight) tripFields.endFlight = req.body.endFlight;
    if (req.body.maxBudget) tripFields.maxBudget = req.body.maxBudget;
    if (req.body.price) tripFields.price = req.body.price;
    if (req.body.pctBooked) tripFields.pctBooked = req.body.pctBooked;
    {/*// Skills - Spilt into array
    if (typeof req.body.skills !== 'undefined') {
      tripFields.skills = req.body.skills.split(',');
    }*/}

    {/*// Social
    tripFields.social = {};
    if (req.body.youtube) tripFields.social.youtube = req.body.youtube;
    if (req.body.twitter) tripFields.social.twitter = req.body.twitter;
    if (req.body.facebook) tripFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) tripFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) tripFields.social.instagram = req.body.instagram;*/}

    Trip.findOne({ user: req.user.id }).then(trip => {
        // Create
        // Check if handle exists
        Trip.findOne({ handle: tripFields.handle }).then(trip => {
          if (trip) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save Trip
          new Trip(tripFields).save().then(trip => res.json(trip));
        });
    });
  }
);

{/*// @route   POST api/trip/experience
// @desc    Add experience to trip
// @access  Private
router.post('/experience', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);
    // Check Validation
    if(!isValid) {
        // Return any errors with 400 Status
        return res.status(400).json(errors);
    }
    Trip.findOne({ user: req.user.id })
    .then(trip => {
        const newExp = {
            title: req.body.title,
            company: req.body.company,
            location: req.body.location,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description
        }
        // Add to experience array of trip
        trip.experience.unshift(newExp); //pushed at the beginning of array
        trip.save().then(trip => res.json(trip));
    })
})*/}

// @route   POST api/trip/education
// @desc    Add education to trip
// @access  Private

{/*router.post('/education', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateEducationInput(req.body);
    // Check Validation
    if(!isValid) {
        // Return any errors with 400 Status
        return res.status(400).json(errors);
    }
    Trip.findOne({ user: req.user.id })
    .then(trip => {
        const newEdu = {
            school: req.body.school,
            degree: req.body.degree,
            fieldofstudy: req.body.fieldofstudy,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description
        }
        // Add to experience array of trip
        trip.education.unshift(newEdu); //pushed at the beginning of array
        trip.save().then(trip => res.json(trip));
    })
})*/}
{/*
// @route   DELETE api/trip/experience/:exp_id
// @desc    Delete experience from trip
// @access  Private
router.delete('/experience/:exp_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Trip.findOne({ user: req.user.id })
    .then(trip => {
        // Get remove index
        const removeIndex = trip.experience
            .map(item => item.id) //give array of id
            .indexOf(req.params.exp_id);
        // Splice out of array
        trip.experience.splice(removeIndex, 1);
        // save
        trip.save().then(trip => res.json(trip));
    })
    .catch(err => res.status(404).json(err));
})*/}

{/*
// @route   DELETE api/trip/education/:edu_id
// @desc    Delete education from trip
// @access  Private
router.delete('/education/:edu_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Trip.findOne({ user: req.user.id })
    .then(trip => {
        // Get remove index
        const removeIndex = trip.education
            .map(item => item.id) //give array of id
            .indexOf(req.params.exp_id);
        // Splice out of array
        trip.education.splice(removeIndex, 1);
        // save
        trip.save().then(trip => res.json(trip));
    })
    .catch(err => res.status(404).json(err));
})*/}




// @route   DELETE api/trip/:trip_id
// @desc    Delete trip by trip id
// @access  Private

router.delete('/:trip_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete trip by trip id')

  var trip_id = req.params.trip_id;

  Trip.findOneAndRemove({ _id: trip_id }, function(err, trip){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        trip.remove();
      }
  });

})
//
// Post.findOneAndRemove({'id': data.post, 'user.uid': socket.handshake.user.id}, function(err, post) {
//     post.remove();
// });
//
//

module.exports = router;
