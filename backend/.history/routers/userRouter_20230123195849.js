const router = require('express').Router();
const User = require('../models/userModel');

router.post('/', async (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;

    // validation

    if (!email || !password || !passwordVerify) {
      return res
        .status(400)
        .json({ errorMessage: 'Please enter all required fields.' });
    }

    if (password.length < 6) {
      return res.status(400).json({
        errorMessage: 'Please enter a password of at least 6 characters.',
      });
    }

    if (password !== passwordVerify) {
      return res
        .status(400)
        .json({ errorMessage: 'Please enter the sae password twice.' });
    }

    const existingUser = await User.findOne({ email: email });
    console.log(existingUser);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
