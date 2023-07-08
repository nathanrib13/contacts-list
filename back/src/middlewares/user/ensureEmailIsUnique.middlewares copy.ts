import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../erros";

const ensureEmailIsUniqueMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  if (!req.body.email && !req.body.phone) {
    return next();
  }

  const findMail = await userRepository.findOne({
    where: {
      email: req.body.email,
    },
  });

  const findPhone = await userRepository.findOne({
    where: {
      phone: req.body.phone,
    },
  });

  if (findMail && findMail.id !== req.user.id) {
    throw new AppError("Email  already exists", 409);
  }
  if (findPhone && findPhone.id !== req.user.id) {
    throw new AppError("Email  already exists", 409);
  }
  

  return next();
};

export default ensureEmailIsUniqueMiddleware;
