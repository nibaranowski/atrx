const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
const validateEventInput = require('../../validation/event')
const validateExperienceInput = require('../../validation/experience')
const validateEducationInput = require('../../validation/education')


// Load Models
const User = require('../../models/User');
const Trip = require('../../models/Trip');
const Stop = require('../../models/Stop');
const Day = require('../../models/Day');
const Event = require('../../models/Event');

// @route   GET api/event/test
// @desc    Test event routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Event works'}));

// @route   GET api/event/all
// @desc    Get all events
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Event.find()
    .then(events => {
        if(!events) {
            errors.noevent = 'There are no events';
            return res.status(404).json(errors);
        }
    res.json(events)
    })
    .catch(err =>
      res.status(404).json({ event: 'There are no events' })
    );
})

// @route   GET api/event/all
// @desc    Get all events
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Event.find()
    .then(events => {
        if(!events) {
            errors.noevent = 'There are no events';
            return res.status(404).json(errors);
        }
    res.json(events)
    })
    .catch(err =>
      res.status(404).json({ event: 'There are no events' })
    );
})

// @route   GET api/event/:event_id
// @desc    Get event by event ID
// @access  Private

router.get('/:event_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Event.findOne({ _id: req.params.event_id })
    .then(res.json({msg: 'event request work'}))
    .then(event => {
      if (!event) {
        errors.noevent = 'There is no event for this ID';
        res.status(404).json(errors);
      }

      res.json(event);
    })
    .catch(err =>
      res.status(404).json({ event: 'There is no event for this ID' })
    );
});

// @route   GET api/event/day/:day_id
// @desc    Get all events by day id
// @access  Private
{/*router.get('/day/:day_id', passport.authenticate('jwt', { session: false }), (req, res) => { // important: '/' is already /api/event
    const errors = {};
    Event.find({ day_id: req.day.id }) //cause day in Event model is associated directly to day ID
        .then(events => {
            if(!events) {
                errors.noevent = 'There is no events for this name'; //we add noevent key to errors object
                return res.status(404).json(errors);
            }
            res.json(events);
        })
        .catch(err => {
          res.status(404).json(err)
        });
})*/}

{/*//works
router.get('/day/:day_id', (req, res) => {
    const errors = {};
    Event.findOne({ day_id: req.params.day_id }) //**important: params instead of body ! cause handle is passed via the URL
        .then(event => {
            if(!event) {
                errors.noevent = 'There is no event for this day';
                res.status(404).json(errors);
            }
            res.json(event);
        })
        .catch(err => res.status(404).json(err));
});*/}

// @route   GET api/event/day/:day_id
// @desc    Get events by day ID
// @access  Private

router.get('/day/:day_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all events by day ID')

  Event.find({ day: {
      _id: req.params.day_id
      }
    })
    .then(events => {
      if (!events) {
        errors.noevents = 'There is no events for this day';
        res.status(404).json(errors);
      }
      res.json(events);
    })
    .catch(err =>
      res.status(404).json({ event: 'There is no events for this day' })
    );
});

{/*// @route   GET api/profile/day/day/:day_id
// @desc    Get profile by day ID
// @access  Private
router.get('/day/day/:day_id', (req, res) => {
  const errors = {};
  Profile.findOne({ day: req.params.day_id })
    .populate('day', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this day';
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({ profile: 'There is no profile for this day' })
    );
});*/}


{/*router.get('/event/day/:day_id', passport.authenticate('jwt', { session: false }), (req, res) => { // important: '/' is already /api/event
    const errors = {};

    Event.findOne({ day_id: req.params.day_id }) //cause day in Event model is associated directly to day ID
        .then(event => {
            if(!event) {
                errors.noevent = 'There is no event for this event id'; //we add noevent key to errors object
                return res.status(404).json(errors);
            }
            res.json(event);
        })
        .catch(err => res.status(404).json(err));
})*/}



// @route   POST api/event
// @desc    Create or edit day event
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEventInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const eventFields = {};
    eventFields.user = req.user.id;
    eventFields.trip = req.body.trip;
    eventFields.stop = req.body.stop;
    eventFields.day = req.body.day;
    if (req.body.order) eventFields.order = req.body.order;
    if (req.body.handle) eventFields.handle = req.body.handle;
    if (req.body.type) eventFields.type = req.body.type;
    if (req.body.title) eventFields.title = req.body.title;
    if (req.body.location) eventFields.location = req.body.location;
    if (req.body.startTime) eventFields.startTime = req.body.startTime;
    if (req.body.endTime) eventFields.endTime = req.body.endTime;
    if (req.body.price) eventFields.price = req.body.price;
    if (req.body.pctBooked) eventFields.pctBooked = req.body.pctBooked;
    if (req.body.budgetAllocation) eventFields.budgetAllocation = req.body.budgetAllocation;
    {/*// Skills - Spilt into array
    if (typeof req.body.skills !== 'undefined') {
      eventFields.skills = req.body.skills.split(',');
    }*/}

    {/*// Social
    eventFields.social = {};
    if (req.body.youtube) eventFields.social.youtube = req.body.youtube;
    if (req.body.twitter) eventFields.social.twitter = req.body.twitter;
    if (req.body.facebook) eventFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) eventFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) eventFields.social.instagram = req.body.instagram;*/}

    Event.findOne({ day: req.body.day.id }).then(event => {
      {/*if (event) {
        // Update
        Event.findOneAndUpdate(
          { day: req.day.id },
          { $set: eventFields },
          { new: true }
        ).then(event => res.json(event));
      } else {*/}
        // Create

        // Check if handle exists
        Event.findOne({ handle: eventFields.handle }).then(event => {
          if (event) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save Event
          new Event(eventFields).save().then(event => res.json(event));
        });
      {/*}*/}
    });
  }
);

{/*// @route   POST api/event/experience
// @desc    Add experience to event
// @access  Private
router.post('/experience', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);
    // Check Validation
    if(!isValid) {
        // Return any errors with 400 Status
        return res.status(400).json(errors);
    }
    Event.findOne({ day: req.day.id })
    .then(event => {
        const newExp = {
            title: req.body.title,
            company: req.body.company,
            location: req.body.location,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description
        }
        // Add to experience array of event
        event.experience.unshift(newExp); //pushed at the beginning of array
        event.save().then(event => res.json(event));
    })
})*/}

// @route   POST api/event/education
// @desc    Add education to event
// @access  Private

{/*router.post('/education', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateEducationInput(req.body);
    // Check Validation
    if(!isValid) {
        // Return any errors with 400 Status
        return res.status(400).json(errors);
    }
    Event.findOne({ day: req.day.id })
    .then(event => {
        const newEdu = {
            school: req.body.school,
            degree: req.body.degree,
            fieldofstudy: req.body.fieldofstudy,
            from: req.body.from,
            to: req.body.to,
            current: req.body.current,
            description: req.body.description
        }
        // Add to experience array of event
        event.education.unshift(newEdu); //pushed at the beginning of array
        event.save().then(event => res.json(event));
    })
})*/}
{/*
// @route   DELETE api/event/experience/:exp_id
// @desc    Delete experience from event
// @access  Private
router.delete('/experience/:exp_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Event.findOne({ day: req.day.id })
    .then(event => {
        // Get remove index
        const removeIndex = event.experience
            .map(item => item.id) //give array of id
            .indexOf(req.params.exp_id);
        // Splice out of array
        event.experience.splice(removeIndex, 1);
        // save
        event.save().then(event => res.json(event));
    })
    .catch(err => res.status(404).json(err));
})*/}

{/*
// @route   DELETE api/event/education/:edu_id
// @desc    Delete education from event
// @access  Private
router.delete('/education/:edu_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Event.findOne({ day: req.day.id })
    .then(event => {
        // Get remove index
        const removeIndex = event.education
            .map(item => item.id) //give array of id
            .indexOf(req.params.exp_id);
        // Splice out of array
        event.education.splice(removeIndex, 1);
        // save
        event.save().then(event => res.json(event));
    })
    .catch(err => res.status(404).json(err));
})*/}

// @route   DELETE api/event/:event_id
// @desc    Delete event by event id
// @access  Private

router.delete('/:event_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete event by event id')

  var event_id = req.params.event_id;

  Event.findOneAndRemove({ _id: event_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });

})


module.exports = router;
