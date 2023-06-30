import { useState } from "react";
import { Contact } from "../../pages/Dashboard";
import { ContactCardStyle } from "./style";
import ModalOnlyContact from "../modalContact/ModalContact copy";

const ContactCard = ({
  contact,
  onDeleteContact,
}: {
  contact: Contact;
  onDeleteContact: (contactId: number) => void;
}) => {
  const handleDeleteContact = () => {
    onDeleteContact(contact.id);
  };
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ContactCardStyle>
      <ul>
        <li>Name: {contact.name}</li>
        <li>Email: {contact.email}</li>
        <li>Phone: {contact.phone}</li>
      </ul>

      <div>
        <button onClick={openModal}>Editar</button>
        <button onClick={handleDeleteContact}>Excluir</button>
        <ModalOnlyContact
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Editar Contato"
          data={contact}
        />
      </div>
    </ContactCardStyle>
  );
};

export default ContactCard;
