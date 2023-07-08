/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, useEffect, useState } from "react";
import ContactCard from "../../components/contactCard/ContactCard";
import ModalNewContact from "../../components/modalContact/ModalNewContact";
import { AuthContext } from "../../providers/authProvider";
import Container from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import SearchIcon from "@mui/icons-material/Search";
import { Category } from "../../providers/validator";

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
  category: string;
  id: number;
  createdAt: string;
}
const Dashboard = () => {
  const { userData, contacts } = useContext(AuthContext);

  const [isModalOpen, setModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const contactsInAlphabeticalOrder = contacts?.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const [contactsToRender, setContactsToRender] = useState([]);

  useEffect(() => {
    if (searchText === "") {
      setContactsToRender(contactsInAlphabeticalOrder);
    } else {
      const filtered = contactsInAlphabeticalOrder.filter((contact) =>
        contact.name.toLowerCase().includes(searchText)
      );
      setContactsToRender(filtered);
    }
  }, [searchText, contactsInAlphabeticalOrder]);
  // useEffect(() => {
  //   const filtered = contactsToRender.filter((contact) =>
  //     contact.name.toLowerCase().includes(searchText)
  //   );
  //   setContactsToRender(filtered);
  // }, [searchText, contactsToRender]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const classes = {
    Family: "green",
    Friends: "purple",
    Work: "blue",
    Service: "red",
  };

  const filterCategories = (category: Category | string) => {
    if (category === "Todos") {
      setContactsToRender(contactsInAlphabeticalOrder);
    } else {
      const filtered = contactsInAlphabeticalOrder.filter(
        (contact: Contact) => contact.category === category
      );
      setContactsToRender(filtered);
    }
  };

  const handleInputChange = (event: any) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchText(searchValue);
  };

  const getCategoryClass = (category: Category) => {
    return classes[category] || "";
  };

  const uniqueCategories = [
    ...new Set(contacts?.map((contact: Contact) => contact.category)),
  ];

  if (!userData) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <Header />
      <ProfileCard userData={userData} />
      <ModalNewContact
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Novo Contato"
      />
      <section>
        <div>
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite um contato ou selecione uma categoria"
              value={searchText}
              onChange={(event) => handleInputChange(event)}
            />
            <SearchIcon />
          </div>
          <ul>
            <li onClick={() => filterCategories("Todos")}>Todos</li>
            {uniqueCategories?.map((category, index) => (
              <li
                key={index}
                className={getCategoryClass(category)}
                onClick={() => filterCategories(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
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
          contactsToRender.map((contact: Contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        )}
      </section>
      <Footer />
    </Container>
  );
};

export default Dashboard;
