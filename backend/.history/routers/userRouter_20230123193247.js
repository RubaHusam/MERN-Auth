const router = require('express').Router();

router.post('/', (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;

    // validation

    if (!email || !password || !passwordVerify) {
      return res
        .status(400)
        .json({ errorMessage: 'Please enter all required fields.' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
