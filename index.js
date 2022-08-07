import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routers/index.js";
import connect from "./config/db/index.js";
import dotenv from "dotenv";

// allow access .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

//routers
router(app);

connect(() =>
  app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
  })
);
