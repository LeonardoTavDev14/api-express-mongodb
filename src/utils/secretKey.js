import cryptoRandomString from "crypto-random-string";

const secretKey = cryptoRandomString({ length: 64, type: "hex" });
console.log(secretKey);
