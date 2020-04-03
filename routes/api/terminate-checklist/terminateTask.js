const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
//const validateTerminateTaskInput = require('../../validation/terminate-task')
//const validateExperienceInput = require('../../validation/experience')
//const validateEducationInput = require('../../validation/education')


// Load Models
const TerminateTask = require('../../../models/terminate-checklist/TerminateTask');
const AdminUser = require('../../../models/AdminUser');
// const Trip = require('../../models/Trip');
// const Stop = require('../../models/Stop');
// const Event = require('../../models/Event');

// @route   GET api/terminate-task/test
// @desc    Test terminateTask routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'TerminateTask works'}));

// @route   GET api/terminate-task/all
// @desc    Get all terminateTasks
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    TerminateTask.find()
    .then(terminateTasks => {
        if(!terminateTasks) {
            errors.noterminateTask = 'There are no terminateTasks';
            return res.status(404).json(errors);
        }
    res.json(terminateTasks)
    })
    .catch(err =>
      res.status(404).json({ terminateTask: 'There are no terminateTasks' })
    );
})

// @route   GET api/terminate-task/:terminateTask_id
// @desc    Get terminateTask by terminateTask ID
// @access  Private
router.get('/:terminateTask_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  TerminateTask.findOne({ _id: req.params.terminateTask_id })
    .then(res.json({msg: 'terminateTask request work'}))
    .then(terminateTask => {
      if (!terminateTask) {
        errors.noterminateTask = 'There is no terminateTask for this ID';
        res.status(404).json(errors);
      }

      res.json(terminateTask);
    })
    .catch(err =>
      res.status(404).json({ terminateTask: 'There is no terminateTask for this ID' })
    );
});

// @route   GET api/terminate-task/department/:department_id
// @desc    Get terminateTasks by department ID
// @access  Private
router.get('/department/:department_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all terminateTasks by department ID')

  TerminateTask.find({ department: {
      _id: req.params.department_id
      }
    })
    .then(terminateTasks => {
      if (!terminateTasks) {
        errors.noterminateTasks = 'There is no terminateTasks for this department';
        res.status(404).json(errors);
      }
      res.json(terminateTasks);
    })
    .catch(err =>
      res.status(404).json({ terminateTask: 'There is no terminateTasks for this department' })
    );
});


// @route   POST api/terminate-task
// @desc    Create or edit department terminateTask
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTerminateTaskInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    //console.log('this.props', this.props)

    // Get fields
    const terminateTaskFields = {};
    terminateTaskFields.terminateChecklist = req.terminateChecklist.id;
    //terminate-taskFields.trip = req.body.trip;
    terminateTaskFields.name = req.body.name;
    terminateTaskFields.status = req.body.status;
    terminateTaskFields.order = req.body.order;
    terminateTaskFields.type = req.body.type;
    // if (req.body.order) terminateTaskFields.order = req.body.order;
    if (req.body.handle) terminateTaskFields.handle = req.body.handle;
    // if (req.body.name) terminateTaskFields.name = req.body.name;
    // if (req.body.startLocation) terminateTaskFields.startLocation = req.body.startLocation;
    // if (req.body.endLocation) terminateTaskFields.endLocation = req.body.endLocation;
    // if (req.body.startTime) terminateTaskFields.startTime = req.body.startTime;
    // if (req.body.endTime) terminateTaskFields.endTime = req.body.endTime;
    // if (req.body.price) terminateTaskFields.price = req.body.price;
    // if (req.body.pctBooked) terminateTaskFields.pctBooked = req.body.pctBooked;
    // if (req.body.budgetAllocation) terminateTaskFields.budgetAllocation = req.body.budgetAllocation;

    TerminateTask.findOne({ terminateChecklist: req.body.terminateChecklist.id }).then(terminateTask => {
        // Create
        // Check if handle exists
        TerminateTask.findOne({ handle: terminateTaskFields.handle }).then(terminateTask => {
          if (terminateTask) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save TerminateTask
          new TerminateTask(terminateTaskFields).save().then(terminateTask => res.json(terminateTask));
        });
    });
  });

// @route   DELETE api/terminate-task/:terminateTask_id
// @desc    Delete terminateTask by terminateTask id
// @access  Private
router.delete('/:terminateTask_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete terminateTask by terminateTask id')

  var terminateTask_id = req.params.terminateTask_id;

  TerminateTask.findOneAndRemove({ _id: terminateTask_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})

module.exports = router;
