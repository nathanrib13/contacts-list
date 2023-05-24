import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import {
  IContactRequest,
  IContactReturn,
} from "../../interfaces/contacts.interfaces";
import { createContactSchemaReturn } from "../../schemas/contacts.schemas";
import { AppError } from "../../erros";

const createContactService = async (
  contactData: IContactRequest,
  userID: number
): Promise<IContactReturn> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: userID,
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  const contact: Contact = contactRepository.create({
    ...contactData,
    user,
  });

  await contactRepository.save(contact);
  const newContact = createContactSchemaReturn.parse(contact);
  return newContact;
};

export default createContactService;
