import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import {
  createUserSchemaReturn,
  userUpdateSchema,
} from "../../schemas/users.schemas";
import { IUserRequest, IUserReturn } from "../../interfaces/users.interfaces";
import { AppError } from "../../erros";

const updateUserService = async (
  userData: IUserRequest,
  userId: number
): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userToUpdate = await userRepository.findOneBy({ id: userId });
  const updateResquested: any = userUpdateSchema.parse(userData);

  const user = userRepository.create({
    ...userToUpdate,
    ...updateResquested,
  });
  await userRepository.save(user);
  const userUpdated = createUserSchemaReturn.parse(user);

  return userUpdated;
};

export default updateUserService;
