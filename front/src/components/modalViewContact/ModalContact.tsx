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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteContact = async (contactId: number) => {
    try {
      const response = await api.delete(`contacts/${contactId}`);
      if (response.status === 204) {
        setContacts((prevContacts: Contact[]) =>
          prevContacts.filter((contact: Contact) => contact.id !== contactId)
        );
        toast.success("contato exlcuido com sucesso");
      }
    } catch (error) {
      console.error("Erro ao excluir contato:", error);
    }
  };

  return (
    <ModalWrapper style={{ display: isOpen ? "flex" : "none" }}>
      <ModalContent>
        <div className="ProfileCardStyle">
          <img src="https://wp-content.bluebus.com.br/wp-content/uploads/2017/03/31142426/twitter-novo-avatar-padrao-2017-bluebus-660x440.png" />
        </div>
        <div>
          <div>
            <p>{contact.category}</p>
            <div>
              <EditOutlinedIcon />
              <DeleteForeverOutlinedIcon
                onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
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
          {isDeleteModalOpen ? (
            <div className="modalDeleteContact">
              <div>
                <h2>Você está prestes a exlcuir: </h2>
                <p>{contact.name}</p>
                <button onClick={() => handleDeleteContact(contact.id)}>
                  {" "}
                  Excluir
                </button>
              </div>
              <span
                className="closeModal"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                X
              </span>
            </div>
          ) : (
            ""
          )}
        </div>

        <Toaster position="top-center" />
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalViewContact;
