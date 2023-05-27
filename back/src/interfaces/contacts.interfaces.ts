import { z } from "zod";

import {
  createContactSchema,
  contactSchemaReturn,
} from "../schemas/contacts.schemas";

type IContactRequest = z.infer<typeof createContactSchema>;
type IContactReturn = z.infer<typeof contactSchemaReturn>;

export { IContactRequest, IContactReturn };
