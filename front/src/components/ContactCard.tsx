import { Contact } from "../pages/dashboard";
import api from "../services/api";
import { ContactCardStyle } from "./style";

const ContactCard = ({
  contact,
  onDeleteContact,
}: {
  contact: Contact;
  onDeleteContact: (contactId: number) => void;
}) => {
  const handleEditContact = async (contactId: number) => {
    const response = await api.patch(`contacts/${contactId}`);
    return response;
  };
  const handleDeleteContact = () => {
    onDeleteContact(contact.id);
  };

  return (
    <ContactCardStyle>
      <ul>
        <li>Name: {contact.name}</li>
        <li>Created At: {contact.createdAt}</li>
        <li>Email: {contact.email}</li>
        <li>Phone: {contact.phone}</li>
      </ul>

      <div>
        <button onClick={() => handleEditContact(contact.id)}>Editar</button>
        <button onClick={handleDeleteContact}>Excluir</button>
      </div>
    </ContactCardStyle>
  );
};

export default ContactCard;
