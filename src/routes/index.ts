import { Router } from "express";
import { readdirSync } from "fs";
import { userRouter } from "./user";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 * @returns
 */
const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).forEach((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index" && cleanName !== "user") {
    try {
      const moduleRouter = require(`./${cleanName}`).router;
      router.use(`/${cleanName}`, moduleRouter);
    } catch (error) {
      console.error(`Error importing module ${cleanName}:`, error);
    }
  }
});

//router de usuario por separado
router.use("/user", userRouter);

export { router };