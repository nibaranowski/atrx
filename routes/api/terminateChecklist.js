const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
//const validateTerminateChecklistInput = require('../../validation/terminate-checklist')
//const validateExperienceInput = require('../../validation/experience')
//const validateEducationInput = require('../../validation/education')


// Load Models
const TerminateChecklist = require('../../models/TerminateChecklist');
const AdminUser = require('../../models/AdminUser');
// const Trip = require('../../models/Trip');
// const Stop = require('../../models/Stop');
// const Event = require('../../models/Event');

// @route   GET api/terminate-checklist/test
// @desc    Test terminateChecklist routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'TerminateChecklist works'}));

// @route   GET api/terminate-checklist/all
// @desc    Get all terminateChecklists
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    TerminateChecklist.find()
    .then(terminateChecklists => {
        if(!terminateChecklists) {
            errors.noterminateChecklist = 'There are no terminateChecklists';
            return res.status(404).json(errors);
        }
    res.json(terminateChecklists)
    })
    .catch(err =>
      res.status(404).json({ terminateChecklist: 'There are no terminateChecklists' })
    );
})

// @route   GET api/terminate-checklist/:terminateChecklist_id
// @desc    Get terminateChecklist by terminateChecklist ID
// @access  Private
router.get('/:terminateChecklist_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  TerminateChecklist.findOne({ _id: req.params.terminateChecklist_id })
    .then(res.json({msg: 'terminateChecklist request work'}))
    .then(terminateChecklist => {
      if (!terminateChecklist) {
        errors.noterminateChecklist = 'There is no terminateChecklist for this ID';
        res.status(404).json(errors);
      }

      res.json(terminateChecklist);
    })
    .catch(err =>
      res.status(404).json({ terminateChecklist: 'There is no terminateChecklist for this ID' })
    );
});

// @route   GET api/terminate-checklist/department/:department_id
// @desc    Get terminateChecklists by department ID
// @access  Private
router.get('/department/:department_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all terminateChecklists by department ID')

  TerminateChecklist.find({ department: {
      _id: req.params.department_id
      }
    })
    .then(terminateChecklists => {
      if (!terminateChecklists) {
        errors.noterminateChecklists = 'There is no terminateChecklists for this department';
        res.status(404).json(errors);
      }
      res.json(terminateChecklists);
    })
    .catch(err =>
      res.status(404).json({ terminateChecklist: 'There is no terminateChecklists for this department' })
    );
});


// @route   POST api/terminate-checklist
// @desc    Create or edit department terminateChecklist
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTerminateChecklistInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    //console.log('this.props', this.props)

    // Get fields
    const terminateChecklistFields = {};
    terminateChecklistFields.position = req.position.id;
    //terminate-checklistFields.trip = req.body.trip;
    terminateChecklistFields.name = req.body.name;
    // if (req.body.order) terminateChecklistFields.order = req.body.order;
    if (req.body.handle) terminateChecklistFields.handle = req.body.handle;
    // if (req.body.name) terminateChecklistFields.name = req.body.name;
    // if (req.body.startLocation) terminateChecklistFields.startLocation = req.body.startLocation;
    // if (req.body.endLocation) terminateChecklistFields.endLocation = req.body.endLocation;
    // if (req.body.startTime) terminateChecklistFields.startTime = req.body.startTime;
    // if (req.body.endTime) terminateChecklistFields.endTime = req.body.endTime;
    // if (req.body.price) terminateChecklistFields.price = req.body.price;
    // if (req.body.pctBooked) terminateChecklistFields.pctBooked = req.body.pctBooked;
    // if (req.body.budgetAllocation) terminateChecklistFields.budgetAllocation = req.body.budgetAllocation;

    TerminateChecklist.findOne({ position: req.body.position.id }).then(terminateChecklist => {
        // Create
        // Check if handle exists
        TerminateChecklist.findOne({ handle: terminateChecklistFields.handle }).then(terminateChecklist => {
          if (terminateChecklist) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save TerminateChecklist
          new TerminateChecklist(terminateChecklistFields).save().then(terminateChecklist => res.json(terminateChecklist));
        });
    });
  });

// @route   DELETE api/terminate-checklist/:terminateChecklist_id
// @desc    Delete terminateChecklist by terminateChecklist id
// @access  Private
router.delete('/:terminateChecklist_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete terminateChecklist by terminateChecklist id')

  var terminateChecklist_id = req.params.terminateChecklist_id;

  TerminateChecklist.findOneAndRemove({ _id: terminateChecklist_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})

module.exports = router;
