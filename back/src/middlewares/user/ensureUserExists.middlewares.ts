import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../erros";

const ensureUserExistsMiddeware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userID = parseInt(req.params.id);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({ where: { id: userID } });
  if (!findUser) {
    throw new AppError("user not found", 404);
  }

  return next();
};

export default ensureUserExistsMiddeware;
