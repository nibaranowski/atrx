const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
//const validatePositionHiringBoardInput = require('../../validation/position-hiring-board')
//const validateExperienceInput = require('../../validation/experience')
//const validateEducationInput = require('../../validation/education')


// Load Models
const PositionHiringBoard = require('../../models/PositionHiringBoard');
const AdminUser = require('../../models/AdminUser');
// const Trip = require('../../models/Trip');
// const Stop = require('../../models/Stop');
// const Event = require('../../models/Event');

// @route   GET api/position-hiring-board/test
// @desc    Test positionHiringBoard routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'PositionHiringBoard works'}));

// @route   GET api/position-hiring-board/all
// @desc    Get all positionHiringBoards
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    PositionHiringBoard.find()
    .then(positionHiringBoards => {
        if(!positionHiringBoards) {
            errors.nopositionHiringBoard = 'There are no positionHiringBoards';
            return res.status(404).json(errors);
        }
    res.json(positionHiringBoards)
    })
    .catch(err =>
      res.status(404).json({ positionHiringBoard: 'There are no positionHiringBoards' })
    );
})

// @route   GET api/position-hiring-board/:positionHiringBoard_id
// @desc    Get positionHiringBoard by positionHiringBoard ID
// @access  Private
router.get('/:positionHiringBoard_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  PositionHiringBoard.findOne({ _id: req.params.positionHiringBoard_id })
    .then(res.json({msg: 'positionHiringBoard request work'}))
    .then(positionHiringBoard => {
      if (!positionHiringBoard) {
        errors.nopositionHiringBoard = 'There is no positionHiringBoard for this ID';
        res.status(404).json(errors);
      }

      res.json(positionHiringBoard);
    })
    .catch(err =>
      res.status(404).json({ positionHiringBoard: 'There is no positionHiringBoard for this ID' })
    );
});

// @route   GET api/position-hiring-board/department/:department_id
// @desc    Get positionHiringBoards by department ID
// @access  Private
router.get('/department/:department_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all positionHiringBoards by department ID')

  PositionHiringBoard.find({ department: {
      _id: req.params.department_id
      }
    })
    .then(positionHiringBoards => {
      if (!positionHiringBoards) {
        errors.nopositionHiringBoards = 'There is no positionHiringBoards for this department';
        res.status(404).json(errors);
      }
      res.json(positionHiringBoards);
    })
    .catch(err =>
      res.status(404).json({ positionHiringBoard: 'There is no positionHiringBoards for this department' })
    );
});


// @route   POST api/position-hiring-board
// @desc    Create or edit department positionHiringBoard
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePositionHiringBoardInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    //console.log('this.props', this.props)

    // Get fields
    const positionHiringBoardFields = {};
    positionHiringBoardFields.position = req.position.id;
    //position-hiring-boardFields.trip = req.body.trip;
    //positionHiringBoardFields.name = req.body.name;
    // if (req.body.order) positionHiringBoardFields.order = req.body.order;
    if (req.body.handle) positionHiringBoardFields.handle = req.body.handle;
    // if (req.body.name) positionHiringBoardFields.name = req.body.name;
    // if (req.body.startLocation) positionHiringBoardFields.startLocation = req.body.startLocation;
    // if (req.body.endLocation) positionHiringBoardFields.endLocation = req.body.endLocation;
    // if (req.body.startTime) positionHiringBoardFields.startTime = req.body.startTime;
    // if (req.body.endTime) positionHiringBoardFields.endTime = req.body.endTime;
    // if (req.body.price) positionHiringBoardFields.price = req.body.price;
    // if (req.body.pctBooked) positionHiringBoardFields.pctBooked = req.body.pctBooked;
    // if (req.body.budgetAllocation) positionHiringBoardFields.budgetAllocation = req.body.budgetAllocation;

    PositionHiringBoard.findOne({ position: req.body.position.id }).then(positionHiringBoard => {
        // Create
        // Check if handle exists
        PositionHiringBoard.findOne({ handle: positionHiringBoardFields.handle }).then(positionHiringBoard => {
          if (positionHiringBoard) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save PositionHiringBoard
          new PositionHiringBoard(positionHiringBoardFields).save().then(positionHiringBoard => res.json(positionHiringBoard));
        });
    });
  });

// @route   DELETE api/position-hiring-board/:positionHiringBoard_id
// @desc    Delete positionHiringBoard by positionHiringBoard id
// @access  Private
router.delete('/:positionHiringBoard_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete positionHiringBoard by positionHiringBoard id')

  var positionHiringBoard_id = req.params.positionHiringBoard_id;

  PositionHiringBoard.findOneAndRemove({ _id: positionHiringBoard_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})

module.exports = router;
