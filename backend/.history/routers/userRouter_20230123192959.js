const router = require('express').Router();

router.post('/', (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

module.exports = router;
