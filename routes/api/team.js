const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
//const validateTeamInput = require('../../validation/team')
//const validateExperienceInput = require('../../validation/experience')
//const validateEducationInput = require('../../validation/education')


// Load Models
const Team = require('../../models/Team');
const AdminUser = require('../../models/AdminUser');
// const Trip = require('../../models/Trip');
// const Stop = require('../../models/Stop');
// const Event = require('../../models/Event');

// @route   GET api/team/test
// @desc    Test team routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Team works'}));

// @route   GET api/team/all
// @desc    Get all teams
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Team.find()
    .then(teams => {
        if(!teams) {
            errors.noteam = 'There are no teams';
            return res.status(404).json(errors);
        }
    res.json(teams)
    })
    .catch(err =>
      res.status(404).json({ team: 'There are no teams' })
    );
})

// @route   GET api/team/:team_id
// @desc    Get team by team ID
// @access  Private
router.get('/:team_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Team.findOne({ _id: req.params.team_id })
    .then(res.json({msg: 'team request work'}))
    .then(team => {
      if (!team) {
        errors.noteam = 'There is no team for this ID';
        res.status(404).json(errors);
      }

      res.json(team);
    })
    .catch(err =>
      res.status(404).json({ team: 'There is no team for this ID' })
    );
});

// @route   GET api/team/department/:department_id
// @desc    Get teams by department ID
// @access  Private
router.get('/department/:department_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all teams by department ID')

  Team.find({ department: {
      _id: req.params.department_id
      }
    })
    .then(teams => {
      if (!teams) {
        errors.noteams = 'There is no teams for this department';
        res.status(404).json(errors);
      }
      res.json(teams);
    })
    .catch(err =>
      res.status(404).json({ team: 'There is no teams for this department' })
    );
});


// @route   POST api/team
// @desc    Create or edit department team
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTeamInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    //console.log('this.props', this.props)

    // Get fields
    const teamFields = {};
    teamFields.department = req.department.id;
    //teamFields.trip = req.body.trip;
    teamFields.name = req.body.name;
    // if (req.body.order) teamFields.order = req.body.order;
    if (req.body.handle) teamFields.handle = req.body.handle;
    // if (req.body.name) teamFields.name = req.body.name;
    // if (req.body.startLocation) teamFields.startLocation = req.body.startLocation;
    // if (req.body.endLocation) teamFields.endLocation = req.body.endLocation;
    // if (req.body.startTime) teamFields.startTime = req.body.startTime;
    // if (req.body.endTime) teamFields.endTime = req.body.endTime;
    // if (req.body.price) teamFields.price = req.body.price;
    // if (req.body.pctBooked) teamFields.pctBooked = req.body.pctBooked;
    // if (req.body.budgetAllocation) teamFields.budgetAllocation = req.body.budgetAllocation;

    Team.findOne({ department: req.body.department.id }).then(team => {
        // Create
        // Check if handle exists
        Team.findOne({ handle: teamFields.handle }).then(team => {
          if (team) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save Team
          new Team(teamFields).save().then(team => res.json(team));
        });
    });
  });

// @route   DELETE api/team/:team_id
// @desc    Delete team by team id
// @access  Private
router.delete('/:team_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete team by team id')

  var team_id = req.params.team_id;

  Team.findOneAndRemove({ _id: team_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})

module.exports = router;
