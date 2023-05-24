import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { IReadUserReturn } from "../../interfaces/users.interfaces";
import { readUserSchemaReturn } from "../../schemas/users.schemas";
import { AppError } from "../../erros";

const readContactService = async (userID: number): Promise<IReadUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: { id: userID },
    relations: {
      contacts: true,
    },
  });

  if (!findUser) {
    throw new AppError("user not found");
  }

  const userFound = readUserSchemaReturn.parse(findUser);

  const contacts = findUser.contacts ? findUser.contacts : [];

  const userWithContacts = { ...userFound, contacts };

  return userWithContacts;
};

export default readContactService;
