import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import {
  createUserSchemaReturn,
  userUpdateSchema,
} from "../../schemas/users.schemas";
import {
  IUserRequest,
  IUserReturn,
  IUserInfo,
} from "../../interfaces/users.interfaces";
import { AppError } from "../../erros";

const updateUserService = async (
  userData: IUserRequest,
  userId: number,
  userInfo: IUserInfo
): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userToUpdate = await userRepository.findOneBy({ id: userId });
  const updateResquested: any = userUpdateSchema.parse(userData);

  if (userId !== userInfo.id) {
    if (!userInfo.isAdmin) {
      throw new AppError("Insufficient permission", 403);
    }
  }

  const user = userRepository.create({
    ...userToUpdate,
    ...updateResquested,
  });
  await userRepository.save(user);
  const userUpdated = createUserSchemaReturn.parse(user);

  return userUpdated;
};

export default updateUserService;
