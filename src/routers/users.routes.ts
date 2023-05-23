import { Router } from "express";
import {
  createUserController,
  // updateUserController,
  // deleteUserController,
  // readAllUsersController,
} from "../controllers/users.controller";

const usersRoutes = Router();

usersRoutes.post("", createUserController);
usersRoutes.get("");
usersRoutes.patch("/:id");
usersRoutes.delete("/:id");

export { usersRoutes };
