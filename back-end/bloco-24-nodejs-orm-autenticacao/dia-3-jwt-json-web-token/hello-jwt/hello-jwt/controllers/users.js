const router = require('express').Router();

router.get('/me', (req, res, _next) => {
  // no auth, mandamos o payload pro req.user
  // aqui pegamos ele
  const { username, admin } = req.user;

    // Por fim, o retornamos
    res.status(200).json({ username, admin });
});

module.exports = router;
