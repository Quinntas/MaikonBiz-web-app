import cookie from "cookie";
const jwt = require("jsonwebtoken");
import { prismaClient } from "/prisma/prismaClient";
import { verifyEncryptedValue, encryptValue } from "../../utils/encryption";

export default async (req, res) => {
  if (req.method != "POST") {
    return res.status(405).json({ sucess: false });
  }

  if (req.body.email == undefined || req.body.password == undefined) {
    return res.status(400).json({ sucess: false });
  }

  const user = await prismaClient.getInstance().user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (user != null) {
    if (!verifyEncryptedValue(req.body.password, user.password))
      return res.status(401).json({ sucess: false });

    delete user.id;
    delete user.password;

    const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
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

    return res.status(200).json({ user: user, token: token });
  }
  return res.status(401).json({ sucess: false });
};
