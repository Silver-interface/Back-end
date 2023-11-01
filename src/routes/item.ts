import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send({ data: "AQUI VAN LOS MODELOS" });
});

export { router };
