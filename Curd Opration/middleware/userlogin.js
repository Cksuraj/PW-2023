exports.vaildlogin = (req, res, next) => {
  const { email, password } = req.body;

  if (req.body && email && password) {
    next();
  } else {
    res.status(404).send({ msg: "all filled required" });
  }
};
