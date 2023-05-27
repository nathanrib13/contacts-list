import { Router } from "express";

import ensureDataIsValidMiddeware from "../middlewares/ensureDataIsValid.middleware";
import loginSchema from "../schemas/login.schema";
import { createLoginController } from "../controllers/login.controller";

const loginRoutes = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddeware(loginSchema),
  createLoginController
);

export { loginRoutes };
