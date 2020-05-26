import React, { useState, useEffect, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

function ContactForm() {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const clearAll = () => {
    clearCurrent();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    clearAll();
  };

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-secondary add-form-heading">{`${
        current ? "Edit Contact" : "Add Contact"
      }`}</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={handleChange}
      />
      <label htmlFor="type">Contact type:</label>
      <select
        className="select-contact-type"
        name="type"
        value={type}
        onChange={handleChange}
      >
        <option value="personal">Personal</option>
        <option value="professional">Professional</option>
      </select>
      <div>
        <input
          type="submit"
          value={`${current ? "Update Contact" : "Add Contact"}`}
          className="btn btn-block add-contact"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-block add-contact" onClick={clearAll}>
            Cancel
          </button>
        </div>
      )}
    </form>
  );
}

export default ContactForm;
