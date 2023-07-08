import { useContext, useState } from "react";
import { ModalContent, ModalWrapper } from "./style";
import api from "../../services/api";
import { AuthContext } from "../../providers/authProvider";
import { Toaster, toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewContact, newContactSchema } from "../../providers/validator";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onAddContact: any;
}

const ModalNewContact: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  onAddContact,
}) => {
  const { userData } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<NewContact>({
    resolver: zodResolver(newContactSchema),
  });

  const createContact = async (data: NewContact) => {
    const response = await api.post(`/contacts/${userData?.id}`, data);
    if (response.status === 201) {
      const newContact = await response;
      console.log(newContact.data);
      onAddContact(newContact.data); // Chamando a função para adicionar o novo contato no componente pai
      toast.success("Contato criado com sucesso");
    }

    // setTimeout(() => {
    //   onClose();
    // }, 8500);
  };

  return (
    <ModalWrapper style={{ display: isOpen ? "flex" : "none" }}>
      <ModalContent>
        <h2>{title}</h2>
        <form onSubmit={handleSubmit(createContact)}>
          <label>
            Nome:
            <input type="text" placeholder="Maria" {...register("name")} />
          </label>
          <label>
            Telefone:
            <input
              type="text"
              placeholder="(21)980974644"
              {...register("phone")}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              placeholder="maria@mail.com"
              {...register("email")}
            />
          </label>
          <label>
            Category:
            <select {...register("category")} required>
              <option disabled selected hidden>
                Selecione uma Categoria
              </option>
              <option value="Family">Family</option>
              <option value="Friends">Friends</option>
              <option value="Work">Work</option>
              <option value="Service">Service</option>
            </select>
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

export default ModalNewContact;
