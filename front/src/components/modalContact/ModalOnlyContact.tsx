import { useState } from "react";
import { ModalContent, ModalWrapper } from "./style";
import api from "../../services/api";
import { Contact } from "../../pages/Dashboard";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: Contact;
}

const ModalOnlyContact: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  data,
}) => {
  const [name, setName] = useState(data?.name || "");
  const [phone, setPhone] = useState(data?.phone || "");
  const [email, setEmail] = useState(data?.email || "");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const dataToSend = { name, phone, email };

    const response = await api.patch(`/contacts/${data?.id}`, dataToSend);

    alert(response?.status);

    onClose();
  };

  return (
    <ModalWrapper style={{ display: isOpen ? "flex" : "none" }}>
      <ModalContent>
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Telefone:
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit">Enviar</button>
          <button type="button" onClick={onClose}>
            Fechar
          </button>
        </form>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalOnlyContact;
