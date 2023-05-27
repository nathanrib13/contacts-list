import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../erros";
import { Contact } from "../../entities";
import {
  IContactRequest,
  IContactReturn,
} from "../../interfaces/contacts.interfaces";
import {
  contactSchemaReturn,
  contactUpdateSchema,
} from "../../schemas/contacts.schemas";

const updateContactService = async (
  contactData: IContactRequest,
  contactId: number
): Promise<IContactReturn> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contactToUpdate = await contactRepository.findOneBy({ id: contactId });
  const updateResquested: any = contactUpdateSchema.parse(contactData);

  const contact = contactRepository.create({
    ...contactToUpdate,
    ...updateResquested,
  });
  await contactRepository.save(contact);
  const contactUpdated = contactSchemaReturn.parse(contact);

  return contactUpdated;
};

export default updateContactService;
