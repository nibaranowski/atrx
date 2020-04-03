const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
//const validatePositionInput = require('../../validation/position')
//const validateExperienceInput = require('../../validation/experience')
//const validateEducationInput = require('../../validation/education')


// Load Models
const Position = require('../../models/Position');
const AdminUser = require('../../models/AdminUser');
// const Trip = require('../../models/Trip');
// const Stop = require('../../models/Stop');
// const Event = require('../../models/Event');

// @route   GET api/position/test
// @desc    Test position routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Position works'}));

// @route   GET api/position/all
// @desc    Get all positions
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Position.find()
    .then(positions => {
        if(!positions) {
            errors.noposition = 'There are no positions';
            return res.status(404).json(errors);
        }
    res.json(positions)
    })
    .catch(err =>
      res.status(404).json({ position: 'There are no positions' })
    );
})

// @route   GET api/position/:position_id
// @desc    Get position by position ID
// @access  Private
router.get('/:position_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Position.findOne({ _id: req.params.position_id })
    .then(res.json({msg: 'position request work'}))
    .then(position => {
      if (!position) {
        errors.noposition = 'There is no position for this ID';
        res.status(404).json(errors);
      }

      res.json(position);
    })
    .catch(err =>
      res.status(404).json({ position: 'There is no position for this ID' })
    );
});

// @route   GET api/position/department/:department_id
// @desc    Get positions by department ID
// @access  Private
router.get('/department/:department_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all positions by department ID')

  Position.find({ department: {
      _id: req.params.department_id
      }
    })
    .then(positions => {
      if (!positions) {
        errors.nopositions = 'There is no positions for this department';
        res.status(404).json(errors);
      }
      res.json(positions);
    })
    .catch(err =>
      res.status(404).json({ position: 'There is no positions for this department' })
    );
});


// @route   POST api/position
// @desc    Create or edit department position
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePositionInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    //console.log('this.props', this.props)

    // Get fields
    const positionFields = {};
    positionFields.team = req.team.id;
    //positionFields.trip = req.body.trip;
    positionFields.name = req.body.name;
    positionFields.location = req.body.location;
    positionFields.qualifications = req.body.qualifications;
    positionFields.responsibilities = req.body.responsibilities;
    // if (req.body.order) positionFields.order = req.body.order;
    if (req.body.handle) positionFields.handle = req.body.handle;
    // if (req.body.name) positionFields.name = req.body.name;
    // if (req.body.startLocation) positionFields.startLocation = req.body.startLocation;
    // if (req.body.endLocation) positionFields.endLocation = req.body.endLocation;
    // if (req.body.startTime) positionFields.startTime = req.body.startTime;
    // if (req.body.endTime) positionFields.endTime = req.body.endTime;
    // if (req.body.price) positionFields.price = req.body.price;
    // if (req.body.pctBooked) positionFields.pctBooked = req.body.pctBooked;
    // if (req.body.budgetAllocation) positionFields.budgetAllocation = req.body.budgetAllocation;

    Position.findOne({ team: req.body.team.id }).then(position => {
        // Create
        // Check if handle exists
        Position.findOne({ handle: positionFields.handle }).then(position => {
          if (position) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save Position
          new Position(positionFields).save().then(position => res.json(position));
        });
    });
  });

// @route   DELETE api/position/:position_id
// @desc    Delete position by position id
// @access  Private
router.delete('/:position_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete position by position id')

  var position_id = req.params.position_id;

  Position.findOneAndRemove({ _id: position_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})

module.exports = router;
