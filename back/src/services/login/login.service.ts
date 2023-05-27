import { Repository } from "typeorm";
import jwt from "jsonwebtoken";
import ILogin from "../../interfaces/login.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../erros";
import { compare } from "bcryptjs";

const loginService = async (loginData: ILogin): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: loginData.email,
  });
  if (!user) {
    throw new AppError("invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);
  if (!passwordMatch) {
    throw new AppError("invalid credentials", 401);
  }

  const token: string = jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: String(user.id),
  });

  return token;
};

export default loginService;
