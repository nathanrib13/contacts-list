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

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddeware(createUserSchema),
  ensureEmailIsUniqueMiddleware,
  createUserController
);
usersRoutes.get("/:id", ensureUserExistsMiddeware, readUserController);
usersRoutes.patch(
  "/:id",
  ensureUserExistsMiddeware,
  ensureEmailIsUniqueMiddleware,
  updateUserController
);
usersRoutes.delete("/:id", ensureUserExistsMiddeware, deleteUserController);

export { usersRoutes };
