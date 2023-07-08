import { z } from "zod";
import { createUserSchemaReturn } from "./users.schemas";

const createContactSchema = z.object({
  name: z.string().max(65),
  email: z.string().email().max(75),
  phone: z.string().max(12),
  category: z.string().max(30),
});

const contactSchemaReturn = createContactSchema.extend({
  id: z.number(),
  createdAt: z.string(),
  user: createUserSchemaReturn,
});

const contactUpdateSchema = z.object({
  name: z.string().max(45).optional(),
  email: z.string().email().max(45).optional(),
  phone: z.string().max(35).optional(),
});
export { createContactSchema, contactSchemaReturn, contactUpdateSchema };
