import { useState } from "react";
import CreateNeWContactStyle from "./Style";
import Modal from "../modalContact/ModalContact";

const CreateNewContact = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <CreateNeWContactStyle>
      <p>Novo contato</p>
      <button type="button" onClick={openModal}>
        +
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Novo Contato" />
    </CreateNeWContactStyle>
  );
};
export default CreateNewContact;
