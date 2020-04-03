const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
//const validatePositionHiringPlanInput = require('../../validation/position-hiring-plan')
//const validateExperienceInput = require('../../validation/experience')
//const validateEducationInput = require('../../validation/education')


// Load Models
const PositionHiringPlan = require('../../models/PositionHiringPlan');
const AdminUser = require('../../models/AdminUser');
// const Trip = require('../../models/Trip');
// const Stop = require('../../models/Stop');
// const Event = require('../../models/Event');

// @route   GET api/position-hiring-plan/test
// @desc    Test positionHiringPlan routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'PositionHiringPlan works'}));

// @route   GET api/position-hiring-plan/all
// @desc    Get all positionHiringPlans
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    PositionHiringPlan.find()
    .then(positionHiringPlans => {
        if(!positionHiringPlans) {
            errors.nopositionHiringPlan = 'There are no positionHiringPlans';
            return res.status(404).json(errors);
        }
    res.json(positionHiringPlans)
    })
    .catch(err =>
      res.status(404).json({ positionHiringPlan: 'There are no positionHiringPlans' })
    );
})

// @route   GET api/position-hiring-plan/:positionHiringPlan_id
// @desc    Get positionHiringPlan by positionHiringPlan ID
// @access  Private
router.get('/:positionHiringPlan_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  PositionHiringPlan.findOne({ _id: req.params.positionHiringPlan_id })
    .then(res.json({msg: 'positionHiringPlan request work'}))
    .then(positionHiringPlan => {
      if (!positionHiringPlan) {
        errors.nopositionHiringPlan = 'There is no positionHiringPlan for this ID';
        res.status(404).json(errors);
      }

      res.json(positionHiringPlan);
    })
    .catch(err =>
      res.status(404).json({ positionHiringPlan: 'There is no positionHiringPlan for this ID' })
    );
});

// @route   GET api/position-hiring-plan/department/:department_id
// @desc    Get positionHiringPlans by department ID
// @access  Private
router.get('/department/:department_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all positionHiringPlans by department ID')

  PositionHiringPlan.find({ department: {
      _id: req.params.department_id
      }
    })
    .then(positionHiringPlans => {
      if (!positionHiringPlans) {
        errors.nopositionHiringPlans = 'There is no positionHiringPlans for this department';
        res.status(404).json(errors);
      }
      res.json(positionHiringPlans);
    })
    .catch(err =>
      res.status(404).json({ positionHiringPlan: 'There is no positionHiringPlans for this department' })
    );
});


// @route   POST api/position-hiring-plan
// @desc    Create or edit department positionHiringPlan
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePositionHiringPlanInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    //console.log('this.props', this.props)

    // Get fields
    const positionHiringPlanFields = {};
    positionHiringPlanFields.position = req.position.id;
    //position-hiring-planFields.trip = req.body.trip;
    positionHiringPlanFields.name = req.body.name;
    positionHiringPlanFields.hiringDic = req.body.hiringDic; //Dic
    // if (req.body.order) positionHiringPlanFields.order = req.body.order;
    if (req.body.handle) positionHiringPlanFields.handle = req.body.handle;
    // if (req.body.name) positionHiringPlanFields.name = req.body.name;
    // if (req.body.startLocation) positionHiringPlanFields.startLocation = req.body.startLocation;
    // if (req.body.endLocation) positionHiringPlanFields.endLocation = req.body.endLocation;
    // if (req.body.startTime) positionHiringPlanFields.startTime = req.body.startTime;
    // if (req.body.endTime) positionHiringPlanFields.endTime = req.body.endTime;
    // if (req.body.price) positionHiringPlanFields.price = req.body.price;
    // if (req.body.pctBooked) positionHiringPlanFields.pctBooked = req.body.pctBooked;
    // if (req.body.budgetAllocation) positionHiringPlanFields.budgetAllocation = req.body.budgetAllocation;

    PositionHiringPlan.findOne({ position: req.body.position.id }).then(positionHiringPlan => {
        // Create
        // Check if handle exists
        PositionHiringPlan.findOne({ handle: positionHiringPlanFields.handle }).then(positionHiringPlan => {
          if (positionHiringPlan) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save PositionHiringPlan
          new PositionHiringPlan(positionHiringPlanFields).save().then(positionHiringPlan => res.json(positionHiringPlan));
        });
    });
  });

// @route   DELETE api/position-hiring-plan/:positionHiringPlan_id
// @desc    Delete positionHiringPlan by positionHiringPlan id
// @access  Private
router.delete('/:positionHiringPlan_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete positionHiringPlan by positionHiringPlan id')

  var positionHiringPlan_id = req.params.positionHiringPlan_id;

  PositionHiringPlan.findOneAndRemove({ _id: positionHiringPlan_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})

module.exports = router;
