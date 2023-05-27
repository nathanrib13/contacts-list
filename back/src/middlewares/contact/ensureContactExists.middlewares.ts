import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Contact, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../erros";

const ensureContactExistsMiddeware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const contactID = parseInt(req.params.id);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOne({
    where: { id: contactID },
  });
  if (!findContact) {
    throw new AppError("contact not found", 404);
  }

  return next();
};

export default ensureContactExistsMiddeware;
