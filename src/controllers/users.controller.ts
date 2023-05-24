import { Request, Response, response } from "express";
import createUserService from "../services/users/createUser.service";
import updateUserService from "../services/users/updateUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import readUserService from "../services/users/readUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData = req.body;

  const userCreated = await createUserService(userData);

  return res.status(201).json(userCreated);
};

const readUserController = async (req: Request, res: Response) => {
  const userID = parseInt(req.params.id);
  const allUsers = await readUserService(userID);

  res.json(allUsers);
};

const updateUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const userId = parseInt(req.params.id);

  const userUpdated = await updateUserService(userData, userId);
  return res.status(200).json(userUpdated);
};
const deleteUserController = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  await deleteUserService(userId);

  return res.status(204).send();
};

export {
  createUserController,
  updateUserController,
  deleteUserController,
  readUserController,
};
