import { Router } from "express";

import {
  createContactController,
  deleteContactController,
  readContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import { createContactSchema } from "../schemas/contacts.schemas";
import ensureDataIsValidMiddeware from "../middlewares/ensureDataIsValid.middleware";
import ensureContactExistsMiddeware from "../middlewares/contact/ensureContactExists.middlewares";

const contactsRoutes = Router();

contactsRoutes.post(
  "/:id",
  ensureDataIsValidMiddeware(createContactSchema),
  createContactController
);
contactsRoutes.get("/:id", ensureContactExistsMiddeware, readContactController);
contactsRoutes.patch(
  "/:id",
  ensureContactExistsMiddeware,
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  ensureContactExistsMiddeware,
  deleteContactController
);

export { contactsRoutes };
