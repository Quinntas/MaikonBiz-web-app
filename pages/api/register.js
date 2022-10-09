import { prismaClient } from "/prisma/prismaClient";
import { encryptValue } from "../../utils/encryption";

const required_registration_keys = [
  "createdOn",
  "modifiedOn",
  "phoneNumber",
  "email",
  "password",
  "fullName",
  "nickName",
  "avatar",
  "role",
  "identifyAs",
];

export default async (req, res) => {

  console.log(encryptValue(req.body.user.password))

  if (req.method !== "POST") {
    return res.status(405).json({ sucess: false });
  }

  required_registration_keys.forEach((key) => {
    if (!req.body.user) {
      return res.status(400).json({ sucess: false });
    }
  });

  req.body.user.password = encryptValue(req.body.user.password);

  const newUser = await prismaClient.getInstance().user.create({
    data: req.body.user,
  });

  return res.status(200).json({ user: newUser });
};
