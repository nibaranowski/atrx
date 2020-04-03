const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load Models
const AdminUser = require('../../models/AdminUser');
// const Trip = require('../../models/Trip');
// const Stop = require('../../models/Stop');
// const Day = require('../../models/Day');
// const Event = require('../../models/Event');

// @route   GET api/admin-users/test
// @desc    Test adminUsers routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: "AdminUsers works"}));

// @route   POST api/admin-users/register
// @desc    Register adminUser
// @access  Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  AdminUser.findOne({ email: req.body.email }).then(adminUser => {
    if (adminUser) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      // const avatar = gravatar.url(req.body.email, {
      //   s: '200', // Size
      //   r: 'pg', // Rating
      //   d: 'mm' // Default
      // });

      const newAdminUser = new AdminUser({
        name: req.body.name,
        email: req.body.email,
        // avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdminUser.password, salt, (err, hash) => {
          if (err) throw err;
          newAdminUser.password = hash;
          newAdminUser
            .save()
            .then(adminUser => res.json(adminUser))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   POST api/admin-users/login
// @desc    Login AdminUser / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find adminUser by email
  AdminUser.findOne({ email }).then(adminUser => {
    // Check for adminUser
    if (!adminUser) {
      errors.email = 'AdminUser not found';
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, adminUser.password).then(isMatch => {
      if (isMatch) {
        // AdminUser Matched
        const payload = {
          id: adminUser.id,
          name: adminUser.name,
          //avatar: adminUser.avatar
        }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 604800 }, // 1 week
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/admin-users/current
// @desc    Return current adminUser
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }),
(req, res) => {
    res.json({
        id: req.adminUser.id,
        name: req.adminUser.name,
        email: req.adminUser.email
    })
});

// @route   DELETE api/admin-user/:adminUser_id
// @desc    Delete adminUser by adminUser id
// @access  Private
router.delete('/:adminUser_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete adminUser by adminUser id')

  var adminUser_id = req.params.adminUser_id;

  AdminUser.findOneAndRemove({ _id: adminUser_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})


module.exports = router;
