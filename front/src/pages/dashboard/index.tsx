import { useEffect, useState } from "react";
import api from "../../services/api";
import Container from "./style";
import ContactCard from "../../components/ContactCard";

interface User {
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
  const [user, setUser] = useState<User>();
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get(`users/${11}`);
      setUser(response.data);
    })();
  }, []);

  useEffect(() => {
    if (user) {
      setContacts(user.contacts);
    }
  }, [user]);

  const handleDeleteContact = async (contactId: number) => {
    try {
      const response = await api.delete(`contacts/${contactId}`);
      if (response.status === 200) {
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact.id !== contactId)
        );
      }
    } catch (error) {
      console.error("Erro ao excluir contato:", error);
    }
  };

  return (
    <Container>
      <div>
        <h2>Bem vindo, {user?.name}</h2>
        <ul>
          <li>Email: {user?.email}</li>
          <li>Telefone: {user?.phone}</li>
          <li>Criado em: {user?.createdAt}</li>
        </ul>
      </div>
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
