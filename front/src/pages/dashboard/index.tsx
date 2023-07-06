/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, useState } from "react";
import ContactCard from "../../components/contactCard/ContactCard";
import Modal from "../../components/modalContact/ModalContact";
import { AuthContext } from "../../providers/authProvider";
import { useNavigate } from "react-router-dom";
import Container from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProfileCard from "../../components/ProfileCard/ContactCard";

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
  const { userData, contacts } = useContext(AuthContext);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (!userData) {
    return <div>Carregando...</div>;
  }
  console.log(userData);
  return (
    <Container>
      <Header />
      <ProfileCard userData={userData} />
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Novo Contato" />
      <section>
        <div>
          <h2>ALL CONTACTS</h2>
          <button onClick={openModal}> + New Contact</button>
        </div>
        {contacts && contacts.length === 0 ? (
          <section>
            <h2>Nenhum contato disponível.</h2>
            <p>Cadastre um novo conta em sua lista</p>
          </section>
        ) : (
          contacts?.map((contact: Contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        )}
      </section>
      <Footer />
    </Container>
  );
};

export default Dashboard;
