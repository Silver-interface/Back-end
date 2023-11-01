import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.use(router);
//db().then(() => console.log("Connection ready"));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
