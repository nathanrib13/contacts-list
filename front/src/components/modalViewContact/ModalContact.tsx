import { useContext, useState } from "react";
import { ModalContent, ModalWrapper } from "./style";
import api from "../../services/api";
import { AuthContext } from "../../providers/authProvider";
import { Toaster, toast } from "sonner";
import { Contact } from "../../pages/Dashboard";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: Contact;
}

const ModalViewContact: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  contact,
}) => {
  const { setContacts } = useContext(AuthContext);

  const handleDeleteContact = async (contactId: number) => {
    try {
      const response = await api.delete(`contacts/${contactId}`);
      if (response.status === 204) {
        setContacts((prevContacts: Contact[]) =>
          prevContacts.filter((contact: Contact) => contact.id !== contactId)
        );
      }
    } catch (error) {
      console.error("Erro ao excluir contato:", error);
    }
  };

  return (
    <ModalWrapper style={{ display: isOpen ? "flex" : "none" }}>
      <ModalContent>
        <img src="https://img.freepik.com/fotos-premium/pessoa-usando-telefone-celular-sobre-fundo-isolado_1368-174417.jpg?w=2000" />
        <div>
          <div>
            <p>{contact.category}</p>
            <div>
              <EditOutlinedIcon />
              <DeleteForeverOutlinedIcon
                onClick={() => handleDeleteContact(contact.id)}
              />
            </div>
          </div>
          <ul>
            <li>
              Name: <p>{contact.name}</p>
            </li>
            <li>
              Email: <p>{contact.email}</p>
            </li>
            <li>
              Phone: <p>{contact.phone}</p>
            </li>
          </ul>
          <button onClick={onClose}>X</button>
        </div>

        <Toaster position="top-center" />
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalViewContact;
