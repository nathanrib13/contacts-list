import { useState } from "react";
import { Contact } from "../../pages/Dashboard";
import { ContactCardStyle } from "./style";
import ModalOnlyContact from "../modalContact/ModalOnlyContact";
import ModalViewContact from "../modalViewContact/ModalContact";

const ContactCard = ({ contact }: { contact: Contact }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ContactCardStyle>
      <ModalViewContact
        isOpen={isModalOpen}
        onClose={closeModal}
        contact={contact}
      />
      <ul onClick={openModal}>
        <li> {contact.name}</li>
        <li> Work</li>
        {/* <li>Email: {contact.email}</li>
        <li>Phone: {contact.phone}</li> */}
      </ul>
    </ContactCardStyle>
  );
};

export default ContactCard;
