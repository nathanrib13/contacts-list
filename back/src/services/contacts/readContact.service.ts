import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { Repository } from "typeorm";
import { IReadUserReturn } from "../../interfaces/users.interfaces";
import { AppError } from "../../erros";
import { contactSchemaReturn } from "../../schemas/contacts.schemas";

const readContactService = async (
  contactID: number
): Promise<IReadUserReturn> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOne({
    where: { id: contactID },
    relations: {
      user: true,
    },
  });

  console.log("*********************************", findContact);

  if (!findContact) {
    throw new AppError("contact not founs", 404);
  }

  return findContact;
};

export default readContactService;
