/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import Container from "./style";
import ContactCard from "../../components/contactCard/ContactCard";
import CreateNewContact from "../../components/newContact/NewContact";
import Modal from "../../components/modalContact/ModalContact";
import { AuthContext } from "../../providers/authProvider";
import { useNavigate } from "react-router-dom";

export interface User {
  name: string;
  email: string;
  phone: string;
  id: number;
  createdAt: string;
  contacts: Contact[];
}
export interface Contact {
  name: string;
  email: string;
  phone: string;
  id: number;
  createdAt: string;
}
const Dashboard = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();

  const [contacts, setContacts] = useState<Contact[]>(userData!.contacts);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDeleteContact = async (contactId: number) => {
    try {
      const response = await api.delete(`contacts/${contactId}`);
      if (response.status === 204) {
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact.id !== contactId)
        );
      }
    } catch (error) {
      console.error("Erro ao excluir contato:", error);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (!userData) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <div>
        <h2>Bem vindo, {userData?.name}</h2>
        <ul>
          <li>Email: {userData?.email}</li>
          <li>Telefone: {userData?.phone}</li>
          <li>Criado em: {userData?.createdAt}</li>
        </ul>
        <p onClick={openModal}>🖊️</p>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Editar Usuário"
        />
      </div>
      <button onClick={logout}>Logout</button>
      <CreateNewContact />
      <section>
        {contacts.map((contact: Contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDeleteContact={handleDeleteContact}
          />
        ))}
      </section>
    </Container>
  );
};

export default Dashboard;
