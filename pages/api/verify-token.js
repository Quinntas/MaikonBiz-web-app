const jwt = require("jsonwebtoken");

export default (req, res) => {
  if (!req.body.token) res.status(400).json({ sucess: false });

  jwt.verify(req.body.token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) res.status(401).json({ sucess: false });

    res.status(200).json({ sucess: true, data: decoded });
  });
};
