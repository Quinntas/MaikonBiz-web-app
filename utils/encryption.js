const crypto = require("crypto");

const config = {
  digest: "sha256",
  saltBytes: 16,
};

function encryptValue(value, salt) {
  if (!salt)
    salt = crypto
      .randomBytes(config.saltBytes)
      .toString("hex")
      .slice(0, config.saltBytes);
  let hash = crypto.createHmac(config.digest, salt);
  hash.update(value);
  return "$" + "hmac" + "$" + salt + "$" + hash.digest("hex");
}

function verifyEncryptedValue(value, hash) {
  return encryptValue(value, hash.split("$")[2]) === hash;
}

export { encryptValue, verifyEncryptedValue };
