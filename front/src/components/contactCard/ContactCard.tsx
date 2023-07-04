import { useState } from "react";
import { Contact } from "../../pages/Dashboard";
import { ContactCardStyle } from "./style";
import ModalOnlyContact from "../modalContact/ModalOnlyContact";

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
        <li> {contact.name}</li>
        <li> Work</li>
        {/* <li>Email: {contact.email}</li>
        <li>Phone: {contact.phone}</li> */}
      </ul>
    </ContactCardStyle>
  );
};

export default ContactCard;
