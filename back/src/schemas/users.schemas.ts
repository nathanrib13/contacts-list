import { z } from "zod";
import { contactSchemaReturn } from "./contacts.schemas";

const createUserSchema = z.object({
  name: z.string().max(65),
  email: z.string().email().max(75),
  phone: z.string().max(12),
  password: z.string(),
});

const createUserSchemaReturn = createUserSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
  })
  .omit({ password: true });

const userUpdateSchema = z.object({
  name: z.string().max(65).optional(),
  email: z.string().email().max(75).optional(),
  phone: z.string().max(12).optional(),
  password: z.string().optional(),
});

const readUserSchemaReturn = createUserSchemaReturn.extend({
  contact: contactSchemaReturn.optional(),
});
export {
  createUserSchema,
  createUserSchemaReturn,
  userUpdateSchema,
  readUserSchemaReturn,
};
