function auth(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ errorMassage: 'Unauthorized' });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ errorMassage: 'Unauthorized' });
  }
}

module.exports = auth;
