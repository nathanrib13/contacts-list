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
import ensureTokenIsValidMiddleware from "../middlewares/login/ensureTokenIsValid.middleware";

const contactsRoutes = Router();

contactsRoutes.post(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddeware(createContactSchema),
  createContactController
);
contactsRoutes.get(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureContactExistsMiddeware,
  readContactController
);
contactsRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureContactExistsMiddeware,
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureContactExistsMiddeware,
  deleteContactController
);

export { contactsRoutes };
