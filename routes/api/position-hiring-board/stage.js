const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
//const validateStageInput = require('../../validation/stage')
//const validateExperienceInput = require('../../validation/experience')
//const validateEducationInput = require('../../validation/education')


// Load Models
const Stage = require('../../../models/position-hiring-board/Stage');
const AdminUser = require('../../../models/AdminUser');
// const Trip = require('../../models/Trip');
// const Stop = require('../../models/Stop');
// const Event = require('../../models/Event');

// @route   GET api/stage/test
// @desc    Test stage routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Stage works'}));

// @route   GET api/stage/all
// @desc    Get all stages
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Stage.find()
    .then(stages => {
        if(!stages) {
            errors.nostage = 'There are no stages';
            return res.status(404).json(errors);
        }
    res.json(stages)
    })
    .catch(err =>
      res.status(404).json({ stage: 'There are no stages' })
    );
})

// @route   GET api/stage/:stage_id
// @desc    Get stage by stage ID
// @access  Private
router.get('/:stage_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Stage.findOne({ _id: req.params.stage_id })
    .then(res.json({msg: 'stage request work'}))
    .then(stage => {
      if (!stage) {
        errors.nostage = 'There is no stage for this ID';
        res.status(404).json(errors);
      }

      res.json(stage);
    })
    .catch(err =>
      res.status(404).json({ stage: 'There is no stage for this ID' })
    );
});

// @route   GET api/stage/department/:department_id
// @desc    Get stages by department ID
// @access  Private
router.get('/department/:department_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all stages by department ID')

  Stage.find({ department: {
      _id: req.params.department_id
      }
    })
    .then(stages => {
      if (!stages) {
        errors.nostages = 'There is no stages for this department';
        res.status(404).json(errors);
      }
      res.json(stages);
    })
    .catch(err =>
      res.status(404).json({ stage: 'There is no stages for this department' })
    );
});


// @route   POST api/stage
// @desc    Create or edit department stage
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateStageInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    //console.log('this.props', this.props)

    // Get fields
    const stageFields = {};
    stageFields.positionHiringBoard = req.positionHiringBoard.id;
    //stageFields.trip = req.body.trip;
    stageFields.name = req.body.name;
    stageFields.order = req.body.order;
    // if (req.body.order) stageFields.order = req.body.order;
    if (req.body.handle) stageFields.handle = req.body.handle;
    // if (req.body.name) stageFields.name = req.body.name;
    // if (req.body.startLocation) stageFields.startLocation = req.body.startLocation;
    // if (req.body.endLocation) stageFields.endLocation = req.body.endLocation;
    // if (req.body.startTime) stageFields.startTime = req.body.startTime;
    // if (req.body.endTime) stageFields.endTime = req.body.endTime;
    // if (req.body.price) stageFields.price = req.body.price;
    // if (req.body.pctBooked) stageFields.pctBooked = req.body.pctBooked;
    // if (req.body.budgetAllocation) stageFields.budgetAllocation = req.body.budgetAllocation;

    Stage.findOne({ positionHiringBoard: req.body.positionHiringBoard.id }).then(stage => {
        // Create
        // Check if handle exists
        Stage.findOne({ handle: stageFields.handle }).then(stage => {
          if (stage) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save Stage
          new Stage(stageFields).save().then(stage => res.json(stage));
        });
    });
  });

// @route   DELETE api/stage/:stage_id
// @desc    Delete stage by stage id
// @access  Private
router.delete('/:stage_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete stage by stage id')

  var stage_id = req.params.stage_id;

  Stage.findOneAndRemove({ _id: stage_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})

module.exports = router;
