import { Router } from "express";
import {
  createUserController,
  updateUserController,
  deleteUserController,
  readUserController,
} from "../controllers/users.controller";

const usersRoutes = Router();

usersRoutes.post("", createUserController);
usersRoutes.get("/:id", readUserController);
usersRoutes.patch("/:id", updateUserController);
usersRoutes.delete("/:id", deleteUserController);

export { usersRoutes };
