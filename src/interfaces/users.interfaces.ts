import { z } from "zod";
import {
  readUserSchemaReturn,
  createUserSchema,
  createUserSchemaReturn,
} from "../schemas/users.schemas";

type IUserRequest = z.infer<typeof createUserSchema>;
type IUserReturn = z.infer<typeof createUserSchemaReturn>;
type IUserInfo = { id: number; isAdmin: boolean };
type IReadUserReturn = z.infer<typeof readUserSchemaReturn>;

export { IUserRequest, IUserReturn, IUserInfo, IReadUserReturn };
