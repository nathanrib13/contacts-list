import { useContext, useState } from "react";
import { ModalContent, ModalWrapper } from "./style";
import api from "../../services/api";
import { AuthContext } from "../../providers/authProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { updateUserData, updateUserSchema } from "../../providers/validator";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  openEditUserModal: boolean;
  closeEditUserModal: () => void;
  title: string;
}

const ModalEditUser: React.FC<ModalProps> = ({
  openEditUserModal,
  closeEditUserModal,
  title,
}) => {
  const navigate = useNavigate();
  const { userData } = useContext(AuthContext);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<updateUserData>({
    resolver: zodResolver(updateUserSchema),
  });
  const deleteUser = async () => {
    setConfirmDelete(true);

    setTimeout(() => {
      setConfirmDelete(false);
    }, 2000);

    if (confirmDelete) {
      const response = await api.delete(`/users/${userData?.id}`);
      if (response.status == 204) {
        toast.success("Usuario excluido com sucesso! Adeus :(");
        setTimeout(() => {
          localStorage.clear();
          navigate("/");
        }, 2000);
      }
    }
  };

  const editUser = async (dataToSend: updateUserData) => {
    const response = await api.patch(`/users/${userData?.id}`, dataToSend);
    if (response.status == 200) {
      toast.success("usuário editado com sucesso!");
    }

    setTimeout(() => {
      closeEditUserModal();
    }, 1500);
  };

  return (
    <ModalWrapper style={{ display: openEditUserModal ? "flex" : "none" }}>
      <ModalContent>
        <h2>{title}</h2>
        <form onSubmit={handleSubmit(editUser)}>
          <label>
            Nome:
            <input
              type="text"
              placeholder={userData?.name}
              {...register("name")}
            />
          </label>
          <label>
            Telefone:
            <input
              type="text"
              placeholder={userData?.phone}
              {...register("phone")}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              placeholder={userData?.email}
              {...register("email")}
            />
          </label>
          <button type="submit">Enviar</button>
          <button type="button" onClick={closeEditUserModal}>
            Fechar
          </button>
        </form>
        <button className="deleteUser" onClick={deleteUser}>
          {" "}
          {confirmDelete ? "Confirmar?" : "Excluir Perfil"}
        </button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalEditUser;
