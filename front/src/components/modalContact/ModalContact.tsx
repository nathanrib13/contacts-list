import { useContext, useState } from "react";
import { ModalContent, ModalWrapper } from "./style";
import api from "../../services/api";
import { AuthContext } from "../../providers/authProvider";
import { Toaster, toast } from "sonner";

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
      toast.success("contato cadastrado com sucesso");
    } else {
      response = await api.patch(`/users/${userData?.id}`, dataToSend);
      toast.success(response?.status);
    }
    setTimeout(() => {
      onClose();
    }, 1500);
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
              onChange={(e) => setName(e.target.value)}
              placeholder="Maria"
            />
          </label>
          <label>
            Telefone:
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(21)980974644"
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="maria@mail.com"
            />
          </label>
          <button type="submit">Enviar</button>
          <button type="button" onClick={onClose}>
            Fechar
          </button>
        </form>
        <Toaster position="top-center" />
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
