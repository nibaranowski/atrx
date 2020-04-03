const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
const validateStopInput = require('../../validation/stop')
const validateExperienceInput = require('../../validation/experience')
const validateEducationInput = require('../../validation/education')


// Load Models
const User = require('../../models/User');
const Trip = require('../../models/Trip');
const Stop = require('../../models/Stop');
const Day = require('../../models/Day');
const Event = require('../../models/Event');

// @route   GET api/stop/test
// @desc    Test stop routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Stop works'}));

// @route   GET api/stop/all
// @desc    Get all stops
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Stop.find()
    .then(stops => {
        if(!stops) {
            errors.nostop = 'There are no stops';
            return res.status(404).json(errors);
        }
    res.json(stops)
    })
    .catch(err =>
      res.status(404).json({ stop: 'There are no stops' })
    );
})

// @route   GET api/stop/all
// @desc    Get all stops
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Stop.find()
    .then(stops => {
        if(!stops) {
            errors.nostop = 'There are no stops';
            return res.status(404).json(errors);
        }
    res.json(stops)
    })
    .catch(err =>
      res.status(404).json({ stop: 'There are no stops' })
    );
})

// @route   GET api/stop/:stop_id
// @desc    Get stop by stop ID
// @access  Private

router.get('/:stop_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Stop.findOne({ _id: req.params.stop_id })
    .then(stop => {
      if (!stop) {
        errors.nostop = 'There is no stop for this ID';
        res.status(404).json(errors);
      }

      res.json(stop);
    })
    .catch(err =>
      res.status(404).json({ stop: 'There is no stop for this ID' })
    );
});

// @route   GET api/stop/trip/:trip_id
// @desc    Get all stops by trip id
// @access  Private
{/*router.get('/trip/:trip_id', passport.authenticate('jwt', { session: false }), (req, res) => { // important: '/' is already /api/stop
    const errors = {};
    Stop.find({ trip_id: req.trip.id }) //cause trip in Stop model is associated directly to trip ID
        .then(stops => {
            if(!stops) {
                errors.nostop = 'There is no stops for this name'; //we add nostop key to errors object
                return res.status(404).json(errors);
            }
            res.json(stops);
        })
        .catch(err => {
          res.status(404).json(err)
        });
})*/}

{/*//works
router.get('/trip/:trip_id', (req, res) => {
    const errors = {};
    Stop.findOne({ trip_id: req.params.trip_id }) //**important: params instead of body ! cause handle is passed via the URL
        .then(stop => {
            if(!stop) {
                errors.nostop = 'There is no stop for this trip';
                res.status(404).json(errors);
            }
            res.json(stop);
        })
        .catch(err => res.status(404).json(err));
});*/}

// @route   GET api/stop/trip/:trip_id
// @desc    Get stops by trip ID
// @access  Private

router.get('/trip/:trip_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all stops by trip ID')

  Stop.find({ trip: {
      _id: req.params.trip_id
      }
    })
    .then(stops => {
      if (!stops) {
        errors.nostops = 'There is no stops for this trip';
        res.status(404).json(errors);
      }
      res.json(stops);
    })
    .catch(err =>
      res.status(404).json({ stop: 'There is no stops for this trip' })
    );
});

{/*// @route   GET api/profile/trip/trip/:trip_id
// @desc    Get profile by trip ID
// @access  Private
router.get('/trip/trip/:trip_id', (req, res) => {
  const errors = {};
  Profile.findOne({ trip: req.params.trip_id })
    .populate('trip', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this trip';
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({ profile: 'There is no profile for this trip' })
    );
});*/}


{/*router.get('/stop/trip/:trip_id', passport.authenticate('jwt', { session: false }), (req, res) => { // important: '/' is already /api/stop
    const errors = {};

    Stop.findOne({ trip_id: req.params.trip_id }) //cause trip in Stop model is associated directly to trip ID
        .then(stop => {
            if(!stop) {
                errors.nostop = 'There is no stop for this stop id'; //we add nostop key to errors object
                return res.status(404).json(errors);
            }
            res.json(stop);
        })
        .catch(err => res.status(404).json(err));
})*/}



// @route   POST api/stop
// @desc    Create or edit trip stop
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateStopInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const stopFields = {};
    stopFields.user = req.user.id;
    stopFields.trip = req.body.trip;
    if (req.body.order) stopFields.order = req.body.order;
    if (req.body.handle) stopFields.handle = req.body.handle;
    if (req.body.name) stopFields.name = req.body.name;
    if (req.body.startLocation) stopFields.startLocation = req.body.startLocation;
    if (req.body.endLocation) stopFields.endLocation = req.body.endLocation;
    if (req.body.startTime) stopFields.startTime = req.body.startTime;
    if (req.body.endTime) stopFields.endTime = req.body.endTime;
    if (req.body.price) stopFields.price = req.body.price;
    if (req.body.pctBooked) stopFields.pctBooked = req.body.pctBooked;
    if (req.body.budgetAllocation) stopFields.budgetAllocation = req.body.budgetAllocation;
    {/*// Skills - Spilt into array
    if (typeof req.body.skills !== 'undefined') {
      stopFields.skills = req.body.skills.split(',');
    }*/}

    {/*// Social
    stopFields.social = {};
    if (req.body.youtube) stopFields.social.youtube = req.body.youtube;
    if (req.body.twitter) stopFields.social.twitter = req.body.twitter;
    if (req.body.facebook) stopFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) stopFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) stopFields.social.instagram = req.body.instagram;*/}

    Stop.findOne({ trip: req.body.trip.id }).then(stop => {
        // Create

        // Check if handle exists
        Stop.findOne({ handle: stopFields.handle }).then(stop => {
          if (stop) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save Stop
          new Stop(stopFields).save().then(stop => res.json(stop));
        });
    });
  }
);

{/*// @route   POST api/stop/experience
// @desc    Add experience to stop
// @access  Private
router.post('/experience', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);
    // Check Validation
    if(!isValid) {
        // Return any errors with 400 Status
        return res.status(400).json(errors);
    }
    Stop.findOne({ trip: req.trip.id })
    .then(stop => {
        const newExp = {
            title: req.body.title,
            company: req.body.company,
            location: req.body.location,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description
        }
        // Add to experience array of stop
        stop.experience.unshift(newExp); //pushed at the beginning of array
        stop.save().then(stop => res.json(stop));
    })
})*/}

// @route   POST api/stop/education
// @desc    Add education to stop
// @access  Private

{/*router.post('/education', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateEducationInput(req.body);
    // Check Validation
    if(!isValid) {
        // Return any errors with 400 Status
        return res.status(400).json(errors);
    }
    Stop.findOne({ trip: req.trip.id })
    .then(stop => {
        const newEdu = {
            school: req.body.school,
            degree: req.body.degree,
            fieldofstudy: req.body.fieldofstudy,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description
        }
        // Add to experience array of stop
        stop.education.unshift(newEdu); //pushed at the beginning of array
        stop.save().then(stop => res.json(stop));
    })
})*/}
{/*
// @route   DELETE api/stop/experience/:exp_id
// @desc    Delete experience from stop
// @access  Private
router.delete('/experience/:exp_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Stop.findOne({ trip: req.trip.id })
    .then(stop => {
        // Get remove index
        const removeIndex = stop.experience
            .map(item => item.id) //give array of id
            .indexOf(req.params.exp_id);
        // Splice out of array
        stop.experience.splice(removeIndex, 1);
        // save
        stop.save().then(stop => res.json(stop));
    })
    .catch(err => res.status(404).json(err));
})*/}

// @route   DELETE api/stop/:stop_id
// @desc    Delete stop by stop id
// @access  Private

router.delete('/:stop_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete stop by stop id')

  var stop_id = req.params.stop_id;

  Stop.findOneAndRemove({ _id: stop_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})




module.exports = router;
