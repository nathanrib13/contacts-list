/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, useState } from "react";
import api from "../../services/api";
import ContactCard from "../../components/contactCard/ContactCard";
import CreateNewContact from "../../components/newContact/NewContact";
import Modal from "../../components/modalContact/ModalContact";
import { AuthContext } from "../../providers/authProvider";
import { useNavigate } from "react-router-dom";
import Container from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

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

  if (!userData) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <Header />
      <div>
        <img
          src="https://img.freepik.com/fotos-premium/pessoa-usando-telefone-celular-sobre-fundo-isolado_1368-174417.jpg?w=2000"
          alt=""
        />
        <div>
          <div>
            <h2>Bem vindo, {userData?.name}</h2>
            <p onClick={openModal}>🖊️</p>
          </div>
          <ul>
            <li>Email: {userData?.email}</li>
            <li>Telefone: {userData?.phone}</li>
            <li>Criado em: {userData?.createdAt}</li>
          </ul>

          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="Editar Usuário"
          />
        </div>
      </div>
      <section>
        <div>
          <h2>ALL CONTACTS</h2>
          <button> + New Contact</button>
        </div>
        {contacts.length === 0 ? (
          <section>
            <h2>Nenhum contato disponível.</h2>
            <p>Cadastre um novo conta em sua lista</p>
          </section>
        ) : (
          contacts.map((contact: Contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onDeleteContact={handleDeleteContact}
            />
          ))
        )}
      </section>
      <Footer />
    </Container>
  );
};

export default Dashboard;
