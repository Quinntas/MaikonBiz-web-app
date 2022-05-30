import cookie from "cookie";
const jwt = require("jsonwebtoken");

export default (req, res) => {
  if (req.body.email == undefined || req.body.password == undefined) {
    res.status(400).json({ sucess: false });
  }

  if (
    req.body.email == "caioquintassantiago@gmail.com" &&
    req.body.password == "12345678"
  ) {
    const token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/",
      })
    );

    res.status(200).json({ sucess: true });
  } else {
    res.status(401).json({ sucess: false });
  }
};
