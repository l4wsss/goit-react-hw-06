import { useEffect, useState } from "react";
import s from "./App.module.css";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { nanoid } from "nanoid";

const App = () => {
  const [listContacts, setListContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("listContacts"));
    if (savedContacts && savedContacts.length) {
      return savedContacts;
    }
    return [];
  });

  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    localStorage.setItem("listContacts", JSON.stringify(listContacts));
  });

  const handleSearch = (e) => {
    setSearchName(e.target.value);
  };

  const filteredContacts = listContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const addNewContact = (values) => {
    setListContacts((prev) => [...prev, { id: nanoid(), ...values }]);
  };

  const deleteContact = (id) => {
    setListContacts(listContacts.filter((item) => item.id !== id));
  };

  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <SearchBox value={searchName} onChange={handleSearch} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
