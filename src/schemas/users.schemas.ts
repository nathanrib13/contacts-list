import { z } from "zod";

const createUserSchema = z.object({
  name: z.string().max(65),
  email: z.string().email().max(75),
  phone: z.string(),
  password: z.string(),
});

const createUserSchemaReturn = createUserSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
  })
  .omit({ password: true });

const allUsersSchema = z.array(createUserSchemaReturn);

const userUpdateSchema = z.object({
  name: z.string().max(45).optional(),
  email: z.string().email().max(45).optional(),
  password: z.string().optional(),
  username: z.string().max(35).optional(),
});

export {
  createUserSchema,
  createUserSchemaReturn,
  userUpdateSchema,
  allUsersSchema,
};
