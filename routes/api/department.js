const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
//const validateDepartmentInput = require('../../validation/department')
//const validateExperienceInput = require('../../validation/experience')
//const validateEducationInput = require('../../validation/education')

//<<here>> adapt rest of APIs for department and the next ones

// Load Models
const Department = require('../../models/Department');
//const AdminUser = require('../../models/AdminUser');
// const Trip = require('../../models/Trip');
// const Stop = require('../../models/Stop');
// const Event = require('../../models/Event');

// @route   GET api/department/test
// @desc    Test department routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Department works'}));

// @route   GET api/department/all
// @desc    Get all departments
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Department.find()
    .then(departments => {
        if(!departments) {
            errors.nodepartment = 'There are no departments';
            return res.status(404).json(errors);
        }
    res.json(departments)
    })
    .catch(err =>
      res.status(404).json({ department: 'There are no departments' })
    );
})

// @route   GET api/department/:department_id
// @desc    Get department by department ID
// @access  Private
router.get('/:department_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Department.findOne({ _id: req.params.department_id })
    .then(res.json({msg: 'department request work'}))
    .then(department => {
      if (!department) {
        errors.nodepartment = 'There is no department for this ID';
        res.status(404).json(errors);
      }

      res.json(department);
    })
    .catch(err =>
      res.status(404).json({ department: 'There is no department for this ID' })
    );
});

// @route   GET api/department/department/:department_id
// @desc    Get departments by department ID
// @access  Private
router.get('/department/:department_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all departments by department ID')

  Department.find({ department: {
      _id: req.params.department_id
      }
    })
    .then(departments => {
      if (!departments) {
        errors.nodepartments = 'There is no departments for this department';
        res.status(404).json(errors);
      }
      res.json(departments);
    })
    .catch(err =>
      res.status(404).json({ department: 'There is no departments for this department' })
    );
});


// @route   POST api/department
// @desc    Create or edit department department
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateDepartmentInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    //console.log('this.props', this.props)

    // Get fields
    const departmentFields = {};
    departmentFields.company = req.company.id;
    //departmentFields.trip = req.body.trip;
    departmentFields.name = req.body.name;
    // if (req.body.order) departmentFields.order = req.body.order;
    if (req.body.handle) departmentFields.handle = req.body.handle;
    // if (req.body.name) departmentFields.name = req.body.name;
    // if (req.body.startLocation) departmentFields.startLocation = req.body.startLocation;
    // if (req.body.endLocation) departmentFields.endLocation = req.body.endLocation;
    // if (req.body.startTime) departmentFields.startTime = req.body.startTime;
    // if (req.body.endTime) departmentFields.endTime = req.body.endTime;
    // if (req.body.price) departmentFields.price = req.body.price;
    // if (req.body.pctBooked) departmentFields.pctBooked = req.body.pctBooked;
    // if (req.body.budgetAllocation) departmentFields.budgetAllocation = req.body.budgetAllocation;

    Department.findOne({ company: req.body.company.id }).then(department => {
        // Create

        // Check if handle exists
        Department.findOne({ handle: departmentFields.handle }).then(department => {
          if (department) {
            errors.handle = 'That handle already exists';
            res.status(400).json(errors);
          }

          // Save Department
          new Department(departmentFields).save().then(department => res.json(department));
        });
    });
});

// @route   DELETE api/department/:department_id
// @desc    Delete department by department id
// @access  Private
router.delete('/:department_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete department by department id')

  var department_id = req.params.department_id;

  Department.findOneAndRemove({ _id: department_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})

module.exports = router;
