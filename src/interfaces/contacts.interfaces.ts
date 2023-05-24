import { z } from "zod";

import {
  createContactSchema,
  createContactSchemaReturn,
} from "../schemas/contacts.schemas";

type IContactRequest = z.infer<typeof createContactSchema>;
type IContactReturn = z.infer<typeof createContactSchemaReturn>;

export { IContactRequest, IContactReturn };
