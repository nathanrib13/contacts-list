import { useNavigate } from "react-router-dom";
import HeaderStyled from "./Style";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ModalEditUser from "../modalEditUser/ModalEditUser";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const openEditUserModal = () => {
    setIsModalEditOpen(true);
  };
  const closeEditUserModal = () => {
    setIsModalEditOpen(false);
  };

  return (
    <HeaderStyled>
      <h1>Link Up</h1>
      <div onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</div>
      {isOpen && (
        <section>
          <ul>
            <li onClick={openEditUserModal}>Editar Perfil</li>
            <li>Sobre</li>
            <li>FAQ</li>
            <li onClick={logout}>Sair</li>
          </ul>
        </section>
      )}

      <ModalEditUser
        openEditUserModal={isModalEditOpen}
        closeEditUserModal={closeEditUserModal}
        title="Edit User"
      />
    </HeaderStyled>
  );
};

export default Header;
