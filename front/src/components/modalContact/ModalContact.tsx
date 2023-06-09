import { useContext, useState } from "react";
import { ModalContent, ModalWrapper } from "./style";
import api from "../../services/api";
import { AuthContext } from "../../providers/authProvider";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title }) => {
  const { userData } = useContext(AuthContext);

  const [name, setName] = useState(userData?.name || "");
  const [phone, setPhone] = useState(userData?.phone || "");
  const [email, setEmail] = useState(userData?.email || "");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const dataToSend = { name, phone, email };
    let response;
    if (title == "Novo Contato") {
      response = await api.post(`/contacts/${userData?.id}`, dataToSend);
    } else {
      response = await api.patch(`/users/${userData?.id}`, dataToSend);
    }

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

export default Modal;
