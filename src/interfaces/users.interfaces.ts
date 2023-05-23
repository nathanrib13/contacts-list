import { z } from "zod";
import {
  allUsersSchema,
  createUserSchema,
  createUserSchemaReturn,
} from "../schemas/users.schemas";

type IUserRequest = z.infer<typeof createUserSchema>;
type IUserReturn = z.infer<typeof createUserSchemaReturn>;
type IUserInfo = { id: number; isAdmin: boolean };
type IAllUsersReturn = z.infer<typeof allUsersSchema>;

export { IUserRequest, IUserReturn, IUserInfo, IAllUsersReturn };
