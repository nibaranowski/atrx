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
const User = require('../../models/User');
// const Trip = require('../../models/Trip');
// const Stop = require('../../models/Stop');
// const Day = require('../../models/Day');
// const Event = require('../../models/Event');

// @route   GET api/user/test
// @desc    Test user routes
// @access  Public
router.get('/test', (req, res) => res.json({msg: "Users works"}));

// <Q>how to create user from a position?
// <Q>how to transform a lead to a user?

// <todo> create POST route to populate data for manager_ids, worker_ids

// @route   POST api/user/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      // const avatar = gravatar.url(req.body.email, {
      //   s: '200', // Size
      //   r: 'pg', // Rating
      //   d: 'mm' // Default
      // });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        // avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   POST api/user/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = {
          id: user.id,
          name: user.name,
          //avatar: user.avatar
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

// @route   GET api/user/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }),
(req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    })
});

// @route   DELETE api/user/:user_id
// @desc    Delete user by user id
// @access  Private
router.delete('/:user_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Delete user by user id')

  var user_id = req.params.user_id;

  User.findOneAndRemove({ _id: user_id }, function(err){
      if (err) {
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send();
      }
  });
})

// @route   GET api/user/position/:position_id
// @desc    Get users by position ID
// @access  Private
router.get('/position/:position_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all users by position ID')

  User.find({ position: {
      _id: req.params.position
      }
    })
    .then(users => {
      if (!users) {
        errors.nousers = 'There is no users for this position';
        res.status(404).json(errors);
      }
      res.json(users);
    })
    .catch(err =>
      res.status(404).json({ user: 'There is no users for this position' })
    );
});

// @route   GET api/user/company/:company_id
// @desc    Get users by company ID
// @access  Private
router.get('/company/:company_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  console.log('Fetching all users by company ID')

  User.find({ company: {
      _id: req.params.company_id
      }
    })
    .then(users => {
      if (!users) {
        errors.nousers = 'There is no users for this company';
        res.status(404).json(errors);
      }
      res.json(users);
    })
    .catch(err =>
      res.status(404).json({ user: 'There is no users for this company' })
    );
});


module.exports = router;
