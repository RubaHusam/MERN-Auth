const router = require('express').Router();

router.post('/', (req, res) => {
  const { email, password, passwordVerify } = req.body;
  console.log(email);
});

module.exports = router;
