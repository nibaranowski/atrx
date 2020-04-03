const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
//const validateOnboardTaskInput = require('../../validation/onboard-task')
//const validateExperienceInput = require('../../validation/experience')
//const validateEducationInput = require('../../validation/education')


// Load Models
const OnboardTask = require('../../../models/onboard-checklist/OnboardTask');
const AdminUser = require('../../../models/AdminUser');
// const Trip = require('../../models/Trip');
// const Stop = require('../../models/Stop');
// const Event = require('../../models/Event');

// @route   GET api/onboard-task/test
// @desc    Test onboardTask routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'OnboardTask works'}));

// @route   GET api/onboard-task/all
// @desc    Get all onboardTasks
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    OnboardTask.find()
    .then(onboardTasks => {
        if(!onboardTasks) {
            errors.noonboardTask = 'There are no onboardTasks';
            return res.status(404).json(errors);
        }
    res.json(onboardTasks)
    })
    .catch(err =>
      res.status(404).json({ onboardTask: 'There are no onboardTasks' })
    );
})

// @route   GET api/onboard-task/:onboardTask_id
// @desc    Get onboardTask by onboardTask ID
// @access  Private
router.get('/:onboardTask_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  OnboardTask.findOne({ _id: req.params.onboardTask_id })
    .then(res.json({msg: 'onboardTask request work'}))
    .then(onboardTask => {
      if (!onboardTask) {
        errors.noonboardTask = 'There is no onboardTask for this ID';
        res.status(404).json(errors);
      }

      res.json(onboardTask);
    })
    .catch(err =>
      res.status(404).json({ onboardTask: 'There is no onboardTask for this ID' })
    );
});

// @route   GET api/onboard-task/department/:department_id
// @desc    Get onboardTasks by department ID
// @access  Private
router.get('/department/:department_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all onboardTasks by department ID')

  OnboardTask.find({ department: {
      _id: req.params.department_id
      }
    })
    .then(onboardTasks => {
      if (!onboardTasks) {
        errors.noonboardTasks = 'There is no onboardTasks for this department';
        res.status(404).json(errors);
      }
      res.json(onboardTasks);
    })
    .catch(err =>
      res.status(404).json({ onboardTask: 'There is no onboardTasks for this department' })
    );
});


// @route   POST api/onboard-task
// @desc    Create or edit department onboardTask
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateOnboardTaskInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    //console.log('this.props', this.props)

    // Get fields
    const onboardTaskFields = {};
    onboardTaskFields.onboardChecklist = req.onboardChecklist.id;
    //onboard-taskFields.trip = req.body.trip;
    onboardTaskFields.name = req.body.name;
    onboardTaskFields.status = req.body.status;
    onboardTaskFields.order = req.body.order;
    onboardTaskFields.type = req.body.type;
    // if (req.body.order) onboardTaskFields.order = req.body.order;
    if (req.body.handle) onboardTaskFields.handle = req.body.handle;
    // if (req.body.name) onboardTaskFields.name = req.body.name;
    // if (req.body.startLocation) onboardTaskFields.startLocation = req.body.startLocation;
    // if (req.body.endLocation) onboardTaskFields.endLocation = req.body.endLocation;
    // if (req.body.startTime) onboardTaskFields.startTime = req.body.startTime;
    // if (req.body.endTime) onboardTaskFields.endTime = req.body.endTime;
    // if (req.body.price) onboardTaskFields.price = req.body.price;
    // if (req.body.pctBooked) onboardTaskFields.pctBooked = req.body.pctBooked;
    // if (req.body.budgetAllocation) onboardTaskFields.budgetAllocation = req.body.budgetAllocation;

    OnboardTask.findOne({ onboardChecklist: req.body.onboardChecklist.id }).then(onboardTask => {
        // Create
        // Check if handle exists
        OnboardTask.findOne({ handle: onboardTaskFields.handle }).then(onboardTask => {
          if (onboardTask) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save OnboardTask
          new OnboardTask(onboardTaskFields).save().then(onboardTask => res.json(onboardTask));
        });
    });
  });

// @route   DELETE api/onboard-task/:onboardTask_id
// @desc    Delete onboardTask by onboardTask id
// @access  Private
router.delete('/:onboardTask_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete onboardTask by onboardTask id')

  var onboardTask_id = req.params.onboardTask_id;

  OnboardTask.findOneAndRemove({ _id: onboardTask_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})

module.exports = router;
