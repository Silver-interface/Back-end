import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

const generateToken = (_id: string) => {
  const jwt = sign({  _id}, JWT_SECRET, {
    expiresIn: "2h",
  });
  console.log("jwt", jwt);
  return jwt;
};

const verifyToken = (jwt: string) => {
  console.log("jwt que llega ", jwt)
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};

export { generateToken, verifyToken };
