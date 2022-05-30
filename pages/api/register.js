const required_registration_keys = [
  "email",
  "password",
  "fullname",
  "nickname",
];

export default (req, res) => {
  if (
    req.body.user &&
    required_registration_keys.every((key) =>
      Object.keys(req.body.user).includes(key)
    )
  ) {
    res.status(200).json({ sucess: true });
  } else res.status(400).json({ sucess: false });
};
