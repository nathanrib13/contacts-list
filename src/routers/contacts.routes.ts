import { Router } from "express";

import {
  createContactController,
  deleteContactController,
  readContactController,
  updateContactController,
} from "../controllers/contacts.controller";

const contactsRoutes = Router();

contactsRoutes.post("/:id", createContactController);
contactsRoutes.get("/:id", readContactController);
contactsRoutes.patch("/:id", updateContactController);
contactsRoutes.delete("/:id", deleteContactController);

export { contactsRoutes };
