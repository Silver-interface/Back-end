import { Router } from "express";
import { readdirSync } from "fs";


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
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((module) => {
      if (module && module.router) { // Verificar si el enrutador está definido
        router.use(`/${cleanName}`, module.router);
    }
    }).catch(error => {
      console.error(`Error importing module ${cleanName}:`, error);
  });
  }
});



export { router };