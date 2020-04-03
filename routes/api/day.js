const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
const validateDayInput = require('../../validation/day')
const validateExperienceInput = require('../../validation/experience')
const validateEducationInput = require('../../validation/education')


// Load Models
const User = require('../../models/User');
const Trip = require('../../models/Trip');
const Stop = require('../../models/Stop');
const Day = require('../../models/Day');
const Event = require('../../models/Event');

// @route   GET api/day/test
// @desc    Test day routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Day works'}));

// @route   GET api/day/all
// @desc    Get all days
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Day.find()
    .then(days => {
        if(!days) {
            errors.noday = 'There are no days';
            return res.status(404).json(errors);
        }
    res.json(days)
    })
    .catch(err =>
      res.status(404).json({ day: 'There are no days' })
    );
})

// @route   GET api/day/all
// @desc    Get all days
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Day.find()
    .then(days => {
        if(!days) {
            errors.noday = 'There are no days';
            return res.status(404).json(errors);
        }
    res.json(days)
    })
    .catch(err =>
      res.status(404).json({ day: 'There are no days' })
    );
})

// @route   GET api/day/:day_id
// @desc    Get day by day ID
// @access  Private

router.get('/:day_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Day.findOne({ _id: req.params.day_id })
    .then(res.json({msg: 'day request work'}))
    .then(day => {
      if (!day) {
        errors.noday = 'There is no day for this ID';
        res.status(404).json(errors);
      }

      res.json(day);
    })
    .catch(err =>
      res.status(404).json({ day: 'There is no day for this ID' })
    );
});

// @route   GET api/day/stop/:stop_id
// @desc    Get all days by stop id
// @access  Private
{/*router.get('/stop/:stop_id', passport.authenticate('jwt', { session: false }), (req, res) => { // important: '/' is already /api/day
    const errors = {};
    Day.find({ stop_id: req.stop.id }) //cause stop in Day model is associated directly to stop ID
        .then(days => {
            if(!days) {
                errors.noday = 'There is no days for this name'; //we add noday key to errors object
                return res.status(404).json(errors);
            }
            res.json(days);
        })
        .catch(err => {
          res.status(404).json(err)
        });
})*/}

{/*//works
router.get('/stop/:stop_id', (req, res) => {
    const errors = {};
    Day.findOne({ stop_id: req.params.stop_id }) //**important: params instead of body ! cause handle is passed via the URL
        .then(day => {
            if(!day) {
                errors.noday = 'There is no day for this stop';
                res.status(404).json(errors);
            }
            res.json(day);
        })
        .catch(err => res.status(404).json(err));
});*/}

// @route   GET api/day/stop/:stop_id
// @desc    Get days by stop ID
// @access  Private

router.get('/stop/:stop_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all days by stop ID')

  Day.find({ stop: {
      _id: req.params.stop_id
      }
    })
    .then(days => {
      if (!days) {
        errors.nodays = 'There is no days for this stop';
        res.status(404).json(errors);
      }
      res.json(days);
    })
    .catch(err =>
      res.status(404).json({ day: 'There is no days for this stop' })
    );
});

{/*// @route   GET api/profile/stop/stop/:stop_id
// @desc    Get profile by stop ID
// @access  Private
router.get('/stop/stop/:stop_id', (req, res) => {
  const errors = {};
  Profile.findOne({ stop: req.params.stop_id })
    .populate('stop', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this stop';
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({ profile: 'There is no profile for this stop' })
    );
});*/}


{/*router.get('/day/stop/:stop_id', passport.authenticate('jwt', { session: false }), (req, res) => { // important: '/' is already /api/day
    const errors = {};

    Day.findOne({ stop_id: req.params.stop_id }) //cause stop in Day model is associated directly to stop ID
        .then(day => {
            if(!day) {
                errors.noday = 'There is no day for this day id'; //we add noday key to errors object
                return res.status(404).json(errors);
            }
            res.json(day);
        })
        .catch(err => res.status(404).json(err));
})*/}



// @route   POST api/day
// @desc    Create or edit stop day
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateDayInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    //console.log('this.props', this.props)

    // Get fields
    const dayFields = {};
    dayFields.user = req.user.id;
    dayFields.trip = req.body.trip;
    dayFields.stop = req.body.stop;
    if (req.body.order) dayFields.order = req.body.order;
    if (req.body.handle) dayFields.handle = req.body.handle;
    if (req.body.name) dayFields.name = req.body.name;
    if (req.body.startLocation) dayFields.startLocation = req.body.startLocation;
    if (req.body.endLocation) dayFields.endLocation = req.body.endLocation;
    if (req.body.startTime) dayFields.startTime = req.body.startTime;
    if (req.body.endTime) dayFields.endTime = req.body.endTime;
    if (req.body.price) dayFields.price = req.body.price;
    if (req.body.pctBooked) dayFields.pctBooked = req.body.pctBooked;
    if (req.body.budgetAllocation) dayFields.budgetAllocation = req.body.budgetAllocation;
    {/*// Skills - Spilt into array
    if (typeof req.body.skills !== 'undefined') {
      dayFields.skills = req.body.skills.split(',');
    }*/}

    {/*// Social
    dayFields.social = {};
    if (req.body.youtube) dayFields.social.youtube = req.body.youtube;
    if (req.body.twitter) dayFields.social.twitter = req.body.twitter;
    if (req.body.facebook) dayFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) dayFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) dayFields.social.instagram = req.body.instagram;*/}

    Day.findOne({ stop: req.body.stop.id }).then(day => {
      {/*if (day) {
        // Update
        Day.findOneAndUpdate(
          { stop: req.stop.id },
          { $set: dayFields },
          { new: true }
        ).then(day => res.json(day));
      } else {*/}
        // Create

        // Check if handle exists
        Day.findOne({ handle: dayFields.handle }).then(day => {
          if (day) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save Day
          new Day(dayFields).save().then(day => res.json(day));
        });
      {/*}*/}
    });
  }
);

{/*// @route   POST api/day/experience
// @desc    Add experience to day
// @access  Private
router.post('/experience', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);
    // Check Validation
    if(!isValid) {
        // Return any errors with 400 Status
        return res.status(400).json(errors);
    }
    Day.findOne({ stop: req.stop.id })
    .then(day => {
        const newExp = {
            title: req.body.title,
            company: req.body.company,
            location: req.body.location,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description
        }
        // Add to experience array of day
        day.experience.unshift(newExp); //pushed at the beginning of array
        day.save().then(day => res.json(day));
    })
})*/}

// @route   POST api/day/education
// @desc    Add education to day
// @access  Private

{/*router.post('/education', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateEducationInput(req.body);
    // Check Validation
    if(!isValid) {
        // Return any errors with 400 Status
        return res.status(400).json(errors);
    }
    Day.findOne({ stop: req.stop.id })
    .then(day => {
        const newEdu = {
            school: req.body.school,
            degree: req.body.degree,
            fieldofstudy: req.body.fieldofstudy,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description
        }
        // Add to experience array of day
        day.education.unshift(newEdu); //pushed at the beginning of array
        day.save().then(day => res.json(day));
    })
})*/}
{/*
// @route   DELETE api/day/experience/:exp_id
// @desc    Delete experience from day
// @access  Private
router.delete('/experience/:exp_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Day.findOne({ stop: req.stop.id })
    .then(day => {
        // Get remove index
        const removeIndex = day.experience
            .map(item => item.id) //give array of id
            .indexOf(req.params.exp_id);
        // Splice out of array
        day.experience.splice(removeIndex, 1);
        // save
        day.save().then(day => res.json(day));
    })
    .catch(err => res.status(404).json(err));
})*/}

{/*
// @route   DELETE api/day/education/:edu_id
// @desc    Delete education from day
// @access  Private
router.delete('/education/:edu_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Day.findOne({ stop: req.stop.id })
    .then(day => {
        // Get remove index
        const removeIndex = day.education
            .map(item => item.id) //give array of id
            .indexOf(req.params.exp_id);
        // Splice out of array
        day.education.splice(removeIndex, 1);
        // save
        day.save().then(day => res.json(day));
    })
    .catch(err => res.status(404).json(err));
})*/}

// @route   DELETE api/day/:day_id
// @desc    Delete day by day id
// @access  Private

router.delete('/:day_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete day by day id')

  var day_id = req.params.day_id;

  Day.findOneAndRemove({ _id: day_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });

})

module.exports = router;
