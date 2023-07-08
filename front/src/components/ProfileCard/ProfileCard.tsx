import { useState } from "react";
import { ProfileCardStyle } from "./style";
import ModalEditUser from "../modalEditUser/ModalEditUser";

interface UserData {
  name: string;
  phone: string;
  email: string;
}
const ProfileCard = ({ userData }: { userData: UserData }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ProfileCardStyle>
      <img
        src="https://img.freepik.com/fotos-premium/pessoa-usando-telefone-celular-sobre-fundo-isolado_1368-174417.jpg?w=2000"
        alt=""
      />
      <div>
        <div>
          <h2>Bem vindo, {userData?.name}</h2>
        </div>
        <ul>
          <li>Email: {userData?.email}</li>
          <li>Telefone: {userData?.phone}</li>
        </ul>

        <ModalEditUser
          openEditUserModal={isModalOpen}
          closeEditUserModal={closeModal}
          title="Editar perfil"
        />
      </div>
    </ProfileCardStyle>
  );
};

export default ProfileCard;
