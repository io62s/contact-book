import React, { useContext, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import FilterForm from "./FilterForm";

function Contacts() {
  const contactsContext = useContext(ContactContext);
  const { contacts } = contactsContext;

  const [type, setType] = useState("all");
  const [name, setName] = useState("");
  const [isSorted, setIsSorted] = useState("desc");

  const handleSelect = (e) => {
    setType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const sortContacts = (e) => {
    setIsSorted(e.target.value);
  };

  const sortFilterContacts = contacts
    .sort((a, b) =>
      isSorted === "desc"
        ? a.name.toLowerCase() > b.name.toLowerCase()
        : a.name.toLowerCase() < b.name.toLowerCase()
    )
    .filter((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

  if (contacts.length === 0) {
    return <h3>Please Add a Contact</h3>;
  }

  return (
    <div>
      <FilterForm
        type={type}
        name={name}
        isSorted={isSorted}
        handleNameChange={handleNameChange}
        handleSelect={handleSelect}
        sortContacts={sortContacts}
      />
      <TransitionGroup>
        {type === "all"
          ? sortFilterContacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : sortFilterContacts.map((contact) =>
              contact.type === type ? (
                <CSSTransition key={contact.id} timeout={500} classNames="item">
                  <ContactItem contact={contact} />
                </CSSTransition>
              ) : null
            )}
      </TransitionGroup>
    </div>
  );
}

export default Contacts;
