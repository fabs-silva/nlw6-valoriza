import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import { handleErrors } from "./middlewares/handleErrors";
import cors from "cors";

import "./database";

const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.use(handleErrors);

const port = "3000";
app.listen(port, () => console.log(`Server is running on port ${port}`));