const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
//const validateOneToOneInput = require('../../validation/one-to-one')
//const validateExperienceInput = require('../../validation/experience')
//const validateEducationInput = require('../../validation/education')


// Load Models
const OneToOne = require('../../../models/user/OneToOne');
const AdminUser = require('../../../models/AdminUser');
// const Trip = require('../../models/Trip');
// const Stop = require('../../models/Stop');
// const Event = require('../../models/Event');

// @route   GET api/one-to-one/test
// @desc    Test oneToOne routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'OneToOne works'}));

// @route   GET api/one-to-one/all
// @desc    Get all oneToOnes
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    OneToOne.find()
    .then(oneToOnes => {
        if(!oneToOnes) {
            errors.nooneToOne = 'There are no oneToOnes';
            return res.status(404).json(errors);
        }
    res.json(oneToOnes)
    })
    .catch(err =>
      res.status(404).json({ oneToOne: 'There are no oneToOnes' })
    );
})

// @route   GET api/one-to-one/:oneToOne_id
// @desc    Get oneToOne by oneToOne ID
// @access  Private
router.get('/:oneToOne_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  OneToOne.findOne({ _id: req.params.oneToOne_id })
    .then(res.json({msg: 'oneToOne request work'}))
    .then(oneToOne => {
      if (!oneToOne) {
        errors.nooneToOne = 'There is no oneToOne for this ID';
        res.status(404).json(errors);
      }

      res.json(oneToOne);
    })
    .catch(err =>
      res.status(404).json({ oneToOne: 'There is no oneToOne for this ID' })
    );
});

// @route   GET api/one-to-one/department/:department_id
// @desc    Get oneToOnes by department ID
// @access  Private
router.get('/department/:department_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all oneToOnes by department ID')

  OneToOne.find({ department: {
      _id: req.params.department_id
      }
    })
    .then(oneToOnes => {
      if (!oneToOnes) {
        errors.nooneToOnes = 'There is no oneToOnes for this department';
        res.status(404).json(errors);
      }
      res.json(oneToOnes);
    })
    .catch(err =>
      res.status(404).json({ oneToOne: 'There is no oneToOnes for this department' })
    );
});


// @route   POST api/one-to-one
// @desc    Create or edit department oneToOne
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateOneToOneInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    //console.log('this.props', this.props)

    // Get fields
    const oneToOneFields = {};
    oneToOneFields.user = req.user.id;
    //one-to-oneFields.trip = req.body.trip;
    oneToOneFields.name = req.body.name;
    oneToOneFields.strengths = req.body.strengths; //array
    oneToOneFields.weaknesses = req.body.weaknesses; //array
    oneToOneFields.actions = req.body.actions; //array
    oneToOneFields.hadSkillsDic = req.body.hadSkillsDic; //dic
    oneToOneFields.softSkillsDic = req.body.softSkillsDic; //dic
    oneToOneFields.actionsDic = req.body.actionsDic; //dic
    // if (req.body.order) oneToOneFields.order = req.body.order;
    if (req.body.handle) oneToOneFields.handle = req.body.handle;
    // if (req.body.name) oneToOneFields.name = req.body.name;
    // if (req.body.startLocation) oneToOneFields.startLocation = req.body.startLocation;
    // if (req.body.endLocation) oneToOneFields.endLocation = req.body.endLocation;
    // if (req.body.startTime) oneToOneFields.startTime = req.body.startTime;
    // if (req.body.endTime) oneToOneFields.endTime = req.body.endTime;
    // if (req.body.price) oneToOneFields.price = req.body.price;
    // if (req.body.pctBooked) oneToOneFields.pctBooked = req.body.pctBooked;
    // if (req.body.budgetAllocation) oneToOneFields.budgetAllocation = req.body.budgetAllocation;

    OneToOne.findOne({ user: req.body.user.id }).then(oneToOne => {
        // Create
        // Check if handle exists
        OneToOne.findOne({ handle: oneToOneFields.handle }).then(oneToOne => {
          if (oneToOne) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save OneToOne
          new OneToOne(oneToOneFields).save().then(oneToOne => res.json(oneToOne));
        });
    });
  });

// @route   DELETE api/one-to-one/:oneToOne_id
// @desc    Delete oneToOne by oneToOne id
// @access  Private
router.delete('/:oneToOne_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete oneToOne by oneToOne id')

  var oneToOne_id = req.params.oneToOne_id;

  OneToOne.findOneAndRemove({ _id: oneToOne_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})

module.exports = router;
