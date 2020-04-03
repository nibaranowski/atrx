const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
//const validateLeadInput = require('../../validation/lead')
//const validateExperienceInput = require('../../validation/experience')
//const validateEducationInput = require('../../validation/education')


// Load Models
const Lead = require('../../../models/position-hiring-board/Lead');
const AdminUser = require('../../../models/AdminUser');
// const Trip = require('../../models/Trip');
// const Stop = require('../../models/Stop');
// const Event = require('../../models/Event');

// @route   GET api/lead/test
// @desc    Test lead routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Lead works'}));

// @route   GET api/lead/all
// @desc    Get all leads
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Lead.find()
    .then(leads => {
        if(!leads) {
            errors.nolead = 'There are no leads';
            return res.status(404).json(errors);
        }
    res.json(leads)
    })
    .catch(err =>
      res.status(404).json({ lead: 'There are no leads' })
    );
})

// @route   GET api/lead/:lead_id
// @desc    Get lead by lead ID
// @access  Private
router.get('/:lead_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Lead.findOne({ _id: req.params.lead_id })
    .then(res.json({msg: 'lead request work'}))
    .then(lead => {
      if (!lead) {
        errors.nolead = 'There is no lead for this ID';
        res.status(404).json(errors);
      }

      res.json(lead);
    })
    .catch(err =>
      res.status(404).json({ lead: 'There is no lead for this ID' })
    );
});

// @route   GET api/lead/department/:department_id
// @desc    Get leads by department ID
// @access  Private
router.get('/department/:department_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all leads by department ID')

  Lead.find({ department: {
      _id: req.params.department_id
      }
    })
    .then(leads => {
      if (!leads) {
        errors.noleads = 'There is no leads for this department';
        res.status(404).json(errors);
      }
      res.json(leads);
    })
    .catch(err =>
      res.status(404).json({ lead: 'There is no leads for this department' })
    );
});


// @route   POST api/lead
// @desc    Create or edit department lead
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateLeadInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    //console.log('this.props', this.props)

    // Get fields
    const leadFields = {};
    leadFields.stage = req.stage.id;
    //leadFields.trip = req.body.trip;
    leadFields.name = req.body.name;
    leadFields.country = req.body.country;
    leadFields.quality = req.body.quality;
    //leadFields.cv = req.body.cv;
    leadFields.type = req.body.type;
    leadFields.order = req.body.order;
    // if (req.body.order) leadFields.order = req.body.order;
    if (req.body.handle) leadFields.handle = req.body.handle;
    // if (req.body.name) leadFields.name = req.body.name;
    // if (req.body.startLocation) leadFields.startLocation = req.body.startLocation;
    // if (req.body.endLocation) leadFields.endLocation = req.body.endLocation;
    // if (req.body.startTime) leadFields.startTime = req.body.startTime;
    // if (req.body.endTime) leadFields.endTime = req.body.endTime;
    // if (req.body.price) leadFields.price = req.body.price;
    // if (req.body.pctBooked) leadFields.pctBooked = req.body.pctBooked;
    // if (req.body.budgetAllocation) leadFields.budgetAllocation = req.body.budgetAllocation;

    Lead.findOne({ stage: req.body.stage.id }).then(lead => {
        // Create
        // Check if handle exists
        Lead.findOne({ handle: leadFields.handle }).then(lead => {
          if (lead) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save Lead
          new Lead(leadFields).save().then(lead => res.json(lead));
        });
    });
  });

// @route   DELETE api/lead/:lead_id
// @desc    Delete lead by lead id
// @access  Private
router.delete('/:lead_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete lead by lead id')

  var lead_id = req.params.lead_id;

  Lead.findOneAndRemove({ _id: lead_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})

module.exports = router;
