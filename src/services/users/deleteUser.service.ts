import { Repository } from "typeorm";
import { User } from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../erros";

const deleteUserService = async (userId: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const userToDelete = await userRepository.findOne({ where: { id: userId } });
  if (!userToDelete) {
    throw new AppError("user not found", 404);
  }

  await userRepository.remove(userToDelete);
};

export default deleteUserService;
