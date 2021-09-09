// Users controller

//const db = require('../models');
const User = require('../models/User');
//const createJWT = require('./helpers');
const SECRET = process.env.SECRET;

// Index - GET - Presentational (all of one resource)
const index = async (req, res) => {
  const users = await User.find({});
  console.log(users);
  res.json(users);
};

const create = (req, res) => {
  User.create(req.body, (err, savedUser) => {
    if (err) return console.log('Error in User#create:', err);

    const token = createJWT(savedUser);
    return res.status(201).json({
      message: 'Success',
      data: { token },
    });
  });
};

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: '24h' }
  );
}

module.exports = { index, create };
