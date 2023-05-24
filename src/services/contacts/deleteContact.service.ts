import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../erros";
import { Contact } from "../../entities";

const deleteContactService = async (contactId: number): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const contactToDelete = await contactRepository.findOne({
    where: { id: contactId },
  });
  if (!contactToDelete) {
    throw new AppError("contact not found", 404);
  }

  await contactRepository.remove(contactToDelete);
};

export default deleteContactService;
