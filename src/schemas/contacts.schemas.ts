import { z } from "zod";

const createContactSchema = z.object({
  name: z.string().max(65),
  email: z.string().email().max(75),
  phone: z.string(),
});

const createContactSchemaReturn = createContactSchema.extend({
  id: z.number(),
  createdAt: z.string(),
});

const contactUpdateSchema = z.object({
  name: z.string().max(45).optional(),
  email: z.string().email().max(45).optional(),
  phone: z.string().max(35).optional(),
});
export { createContactSchema, createContactSchemaReturn, contactUpdateSchema };
