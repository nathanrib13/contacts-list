import { useState } from "react";
import { Contact } from "../../pages/Dashboard";
import { ContactCardStyle } from "./style";
import ModalViewContact from "../modalViewContact/ModalContact";
import { Category } from "../../providers/validator";

const ContactCard = ({ contact }: { contact: Contact }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const classes = {
    Family: "green",
    Friends: "purple",
    Work: "blue",
    Service: "red",
  };

  const getCategoryClass = (category: Category) => {
    return classes[category] || "";
  };

  return (
    <ContactCardStyle>
      <ModalViewContact
        isOpen={isModalOpen}
        onClose={closeModal}
        contact={contact}
      />
      <ul onClick={openModal}>
        <p> {contact.name}</p>
        <li className={getCategoryClass(contact.category)}>
          {contact.category}
        </li>
      </ul>
    </ContactCardStyle>
  );
};

export default ContactCard;
