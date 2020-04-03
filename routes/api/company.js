const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load validation
//const validateCompanyInput = require('../../validation/company')
//const validateExperienceInput = require('../../validation/experience')
//const validateEducationInput = require('../../validation/education')


// Load Models
const Company = require('../../models/Company');
//const AdminUser = require('../../models/AdminUser');
// const Trip = require('../../models/Trip');
// const Stop = require('../../models/Stop');
// const Event = require('../../models/Event');

// @route   GET api/company/test
// @desc    Test company routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Company works'}));

// @route   GET api/company/all
// @desc    Get all companys
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};

    Company.find()
    .then(companys => {
        if(!companys) {
            errors.nocompany = 'There are no companys';
            return res.status(404).json(errors);
        }
    res.json(companys)
    })
    .catch(err =>
      res.status(404).json({ company: 'There are no companys' })
    );
})

// @route   GET api/company/:company_id
// @desc    Get company by company ID
// @access  Private
router.get('/:company_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};

  Company.findOne({ _id: req.params.company_id })
    .then(res.json({msg: 'company request work'}))
    .then(company => {
      if (!company) {
        errors.nocompany = 'There is no company for this ID';
        res.status(404).json(errors);
      }

      res.json(company);
    })
    .catch(err =>
      res.status(404).json({ company: 'There is no company for this ID' })
    );
});

// @route   GET api/company/admin-user/:adminUser_id
// @desc    Get companys by adminUser ID
// @access  Private
router.get('/admin-user/:adminUser_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all companys by adminUser ID')

  Company.find({ adminUser: {
      _id: req.params.adminUser_id
      }
    })
    .then(companys => {
      if (!companys) {
        errors.nocompanys = 'There is no companys for this adminUser';
        res.status(404).json(errors);
      }
      res.json(companys);
    })
    .catch(err =>
      res.status(404).json({ company: 'There is no companys for this adminUser' })
    );
});


// @route   POST api/company
// @desc    Create or edit department company
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    //const { errors, isValid } = validateCompanyInput(req.body);

    // Check Validation
    // if (!isValid) {
    //   // Return any errors with 400 status
    //   return res.status(400).json(errors);
    // }
    //console.log('this.props', this.props)

    // Get fields
    const companyFields = {};
    //console.log(req)
    const adminUser = req.user;
    companyFields.adminUser = adminUser.id;
    //companyFields.trip = req.body.trip;
    companyFields.name = req.body.name;
    // if (req.body.order) companyFields.order = req.body.order;
    if (req.body.handle) companyFields.handle = req.body.handle;
    // if (req.body.name) companyFields.name = req.body.name;
    // if (req.body.startLocation) companyFields.startLocation = req.body.startLocation;
    // if (req.body.endLocation) companyFields.endLocation = req.body.endLocation;
    // if (req.body.startTime) companyFields.startTime = req.body.startTime;
    // if (req.body.endTime) companyFields.endTime = req.body.endTime;
    // if (req.body.price) companyFields.price = req.body.price;
    // if (req.body.pctBooked) companyFields.pctBooked = req.body.pctBooked;
    // if (req.body.budgetAllocation) companyFields.budgetAllocation = req.body.budgetAllocation;
    console.log(companyFields)

    Company.findOne({ adminUser: adminUser.id }).then(company => {
        // Create
        // Check if handle exists
        Company.findOne({ handle: companyFields.handle }).then(company => {
          // if (company) {
          //   errors.handle = 'That handle already exists';
          //   res.status(400).json(errors);
          // }

          // Save Company
          new Company(companyFields).save().then(company => res.json(company));
        });
    });
  });

// @route   DELETE api/company/:company_id
// @desc    Delete company by company id
// @access  Private
router.delete('/:company_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete company by company id')

  var company_id = req.params.company_id;

  Company.findOneAndRemove({ _id: company_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})

module.exports = router;
