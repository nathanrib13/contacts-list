import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import readContactService from "../services/contacts/readContact.service";
import updateContactService from "../services/contacts/updateContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";

const createContactController = async (req: Request, res: Response) => {
  const contactData = req.body;
  const userId = parseInt(req.params.id);

  const contactCreated = await createContactService(contactData, userId);

  return res.status(201).json(contactCreated);
};

const readContactController = async (req: Request, res: Response) => {
  const contactId = parseInt(req.params.id);
  const allUsers = await readContactService(contactId);

  res.json(allUsers);
};

const updateContactController = async (req: Request, res: Response) => {
  const contactData = req.body;
  const contactId = parseInt(req.params.id);

  const userUpdated = await updateContactService(contactData, contactId);
  return res.status(200).json(userUpdated);
};

const deleteContactController = async (req: Request, res: Response) => {
  const contactId = parseInt(req.params.id);

  await deleteContactService(contactId);

  return res.status(204).send();
};

export {
  createContactController,
  updateContactController,
  readContactController,
  deleteContactController,
};
