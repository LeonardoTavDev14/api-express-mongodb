import crypto from "crypto";
import "dotenv/config";

const ALGORITHM = "aes-256-cbc";
const SECRETKEY = process.env.SECRETKEYAES;

const KEY = crypto.scryptSync(SECRETKEY, "salt", 32);
const IV = Buffer.alloc(16, 0);

const encryptMessage = (text) => {
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, IV);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

export { encryptMessage };
