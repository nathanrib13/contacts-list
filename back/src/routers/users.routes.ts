import { Router } from "express";
import {
  createUserController,
  updateUserController,
  deleteUserController,
  readUserController,
} from "../controllers/users.controller";
import ensureDataIsValidMiddeware from "../middlewares/ensureDataIsValid.middleware";
import { createUserSchema } from "../schemas/users.schemas";
import ensureEmailIsUniqueMiddleware from "../middlewares/user/ensureEmailIsUnique.middlewares copy";
import ensureUserExistsMiddeware from "../middlewares/user/ensureUserExists.middlewares";
import ensureTokenIsValidMiddleware from "../middlewares/login/ensureTokenIsValid.middleware";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddeware(createUserSchema),
  ensureEmailIsUniqueMiddleware,
  createUserController
);
usersRoutes.get(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureUserExistsMiddeware,
  readUserController
);
usersRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureUserExistsMiddeware,
  ensureEmailIsUniqueMiddleware,
  updateUserController
);
usersRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureUserExistsMiddeware,
  deleteUserController
);

export { usersRoutes };
