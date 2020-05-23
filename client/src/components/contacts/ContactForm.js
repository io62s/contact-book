import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

function ContactForm() {
  const contactContext = useContext(ContactContext);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;
  const { addContact } = contactContext;

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);

    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-secondary">Add Contact</h2>
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
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={handleChange}
      />
      <span className="radio-pers">Personal</span>
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={handleChange}
      />
      Professional
      <div>
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-block add-contact"
        />
      </div>
    </form>
  );
}

export default ContactForm;
