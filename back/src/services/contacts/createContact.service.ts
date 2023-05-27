import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import {
  IContactRequest,
  IContactReturn,
} from "../../interfaces/contacts.interfaces";
import { contactSchemaReturn } from "../../schemas/contacts.schemas";
import { AppError } from "../../erros";

const createContactService = async (
  contactData: IContactRequest,
  userID: number
): Promise<IContactReturn> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const contacRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  // const contactToFind = await contacRepository
  //   .createQueryBuilder("contact")
  //   .where("contact.email = :email", { email: contactData.email })
  //   .andWhere("contact.phone = :phone", { phone: contactData.phone })
  //   .getOne();

  // if (contactToFind) {
  //   throw new AppError("this contact already exists", 409);
  // }

  //HASH DA SENHA

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
  return contact;
};

export default createContactService;
