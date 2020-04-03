const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
//const validateOnboardChecklistInput = require('../../validation/onboard-checklist')
//const validateExperienceInput = require('../../validation/experience')
//const validateEducationInput = require('../../validation/education')


// Load Models
const OnboardChecklist = require('../../models/OnboardChecklist');
const AdminUser = require('../../models/AdminUser');
// const Trip = require('../../models/Trip');
// const Stop = require('../../models/Stop');
// const Event = require('../../models/Event');

// @route   GET api/onboard-checklist/test
// @desc    Test onboardChecklist routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'OnboardChecklist works'}));

// @route   GET api/onboard-checklist/all
// @desc    Get all onboardChecklists
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    OnboardChecklist.find()
    .then(onboardChecklists => {
        if(!onboardChecklists) {
            errors.noonboardChecklist = 'There are no onboardChecklists';
            return res.status(404).json(errors);
        }
    res.json(onboardChecklists)
    })
    .catch(err =>
      res.status(404).json({ onboardChecklist: 'There are no onboardChecklists' })
    );
})

// @route   GET api/onboard-checklist/:onboardChecklist_id
// @desc    Get onboardChecklist by onboardChecklist ID
// @access  Private
router.get('/:onboardChecklist_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  OnboardChecklist.findOne({ _id: req.params.onboardChecklist_id })
    .then(res.json({msg: 'onboardChecklist request work'}))
    .then(onboardChecklist => {
      if (!onboardChecklist) {
        errors.noonboardChecklist = 'There is no onboardChecklist for this ID';
        res.status(404).json(errors);
      }

      res.json(onboardChecklist);
    })
    .catch(err =>
      res.status(404).json({ onboardChecklist: 'There is no onboardChecklist for this ID' })
    );
});

// @route   GET api/onboard-checklist/department/:department_id
// @desc    Get onboardChecklists by department ID
// @access  Private
router.get('/department/:department_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all onboardChecklists by department ID')

  OnboardChecklist.find({ department: {
      _id: req.params.department_id
      }
    })
    .then(onboardChecklists => {
      if (!onboardChecklists) {
        errors.noonboardChecklists = 'There is no onboardChecklists for this department';
        res.status(404).json(errors);
      }
      res.json(onboardChecklists);
    })
    .catch(err =>
      res.status(404).json({ onboardChecklist: 'There is no onboardChecklists for this department' })
    );
});


// @route   POST api/onboard-checklist
// @desc    Create or edit department onboardChecklist
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateOnboardChecklistInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    //console.log('this.props', this.props)

    // Get fields
    const onboardChecklistFields = {};
    onboardChecklistFields.psoition = req.psoition.id;
    //onboard-checklistFields.trip = req.body.trip;
    //onboardChecklistFields.name = req.body.name;
    // if (req.body.order) onboardChecklistFields.order = req.body.order;
    if (req.body.handle) onboardChecklistFields.handle = req.body.handle;
    // if (req.body.name) onboardChecklistFields.name = req.body.name;
    // if (req.body.startLocation) onboardChecklistFields.startLocation = req.body.startLocation;
    // if (req.body.endLocation) onboardChecklistFields.endLocation = req.body.endLocation;
    // if (req.body.startTime) onboardChecklistFields.startTime = req.body.startTime;
    // if (req.body.endTime) onboardChecklistFields.endTime = req.body.endTime;
    // if (req.body.price) onboardChecklistFields.price = req.body.price;
    // if (req.body.pctBooked) onboardChecklistFields.pctBooked = req.body.pctBooked;
    // if (req.body.budgetAllocation) onboardChecklistFields.budgetAllocation = req.body.budgetAllocation;

    OnboardChecklist.findOne({ position: req.body.position.id }).then(onboardChecklist => {
        // Create
        // Check if handle exists
        OnboardChecklist.findOne({ handle: onboardChecklistFields.handle }).then(onboardChecklist => {
          if (onboardChecklist) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save OnboardChecklist
          new OnboardChecklist(onboardChecklistFields).save().then(onboardChecklist => res.json(onboardChecklist));
        });
    });
  });

// @route   DELETE api/onboard-checklist/:onboardChecklist_id
// @desc    Delete onboardChecklist by onboardChecklist id
// @access  Private
router.delete('/:onboardChecklist_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete onboardChecklist by onboardChecklist id')

  var onboardChecklist_id = req.params.onboardChecklist_id;

  OnboardChecklist.findOneAndRemove({ _id: onboardChecklist_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})

module.exports = router;
