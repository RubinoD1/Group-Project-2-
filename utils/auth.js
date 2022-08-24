const withAuth = (req, res, next) => {
  debugger;
  if (!req.session.user_id) {
    res.redirect('/');
  } else {
    next();
  }
};

module.exports = withAuth;
