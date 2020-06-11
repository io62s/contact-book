import React, { useContext, useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import FilterForm from "./FilterForm";
import Spinner from "../layout/Spinner";

function Contacts() {
  const contactsContext = useContext(ContactContext);
  const { contacts, getContacts, loading } = contactsContext;

  const [type, setType] = useState("all");
  const [name, setName] = useState("");
  const [isSorted, setIsSorted] = useState("desc");

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

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
    .sort(function (a, b) {
      return isSorted === "desc"
        ? b.name.toLowerCase() < a.name.toLowerCase()
          ? 1
          : -1
        : a.name.toLowerCase() > b.name.toLowerCase()
        ? -1
        : 1;
    })
    .filter((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

  if (contacts.length === 0 && !loading) {
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
      {contacts.length !== 0 && !loading ? (
        <TransitionGroup>
          {type === "all"
            ? sortFilterContacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={300}
                  classNames="item"
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : sortFilterContacts.map((contact) =>
                contact.type === type ? (
                  <CSSTransition
                    key={contact._id}
                    timeout={300}
                    classNames="item"
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                ) : null
              )}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Contacts;
