import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../erros";
import { Contact } from "../../entities";
import {
  IContactRequest,
  IContactReturn,
} from "../../interfaces/contacts.interfaces";

const updateContactService = async (
  contactData: IContactRequest,
  contactId: number
): Promise<IContactReturn> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contactToUpdate = await contactRepository.findOne({
    where: {
      id: contactId,
    },
  });
  if (!contactToUpdate) {
    throw new AppError("Contact not foun!", 404);
  }

  const contact = contactRepository.create({
    ...contactToUpdate,
    ...contactData,
  });
  await contactRepository.save(contact);

  return contact!;
};

export default updateContactService;
