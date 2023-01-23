const router = require('express').Router();

router.post('/', (req, res) => {
  res.send('test');
});

module.exports = router;
