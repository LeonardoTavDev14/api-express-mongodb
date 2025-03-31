import crypto from "crypto";
import "dotenv/config";

const ALGORITHM = "aes-256-cbc";
const SECREYKEY = process.env.SECRETKEYAES;

const KEY = crypto.scryptSync(SECREYKEY, "salt", 32);
const IV = Buffer.alloc(16, 0);

const decryptMessage = (encrypttext) => {
  const decipher = crypto.createDecipheriv(ALGORITHM, KEY, IV);
  let decrypted = decipher.update(encrypttext, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
};

export { decryptMessage };
