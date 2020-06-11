import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

function ContactItem({ contact }) {
  const contactContext = useContext(ContactContext);

  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { _id, name, email, phone, type } = contact;

  const [expandCard, setExpandCard] = useState(false);

  const handleDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  const handleExpandCard = () => {
    setExpandCard(!expandCard);
  };

  const handleSetCurrent = () => {
    setCurrent(contact);
  };

  return (
    <div
      className={`card ${
        type === "professional" ? "prof-card" : "prsnl-card"
      } ${expandCard ? "expand" : ""}`}
    >
      <h3 className="text-primary text-left contact-name">{name} </h3>
      <span
        style={{ float: "right" }}
        className={`badge ${
          type === "professional" ? "badge-prof" : "badge-prsnl"
        }`}
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
      <div className={`list-container ${expandCard ? "fade-in" : ""}`}>
        <ul className="list">
          {email && (
            <li>
              <i
                style={{ marginRight: ".4rem" }}
                className="fas fa-envelope"
              ></i>{" "}
              {email}
            </li>
          )}
          {phone && (
            <li>
              <i
                style={{ marginRight: ".5rem" }}
                className="fas fa-phone-alt"
              ></i>{" "}
              {phone}
            </li>
          )}
        </ul>
        <p>
          <button className="btn btn-edit btn-sm" onClick={handleSetCurrent}>
            <i className="fas fa-edit"></i>
          </button>
          <button className="btn btn-delete btn-sm" onClick={handleDelete}>
            <i className="far fa-trash-alt"></i>
          </button>
        </p>
      </div>
      <button className="chevron" onClick={handleExpandCard}>
        {expandCard ? (
          <i className="fas fa-angle-up"></i>
        ) : (
          <i className="fas fa-angle-down"></i>
        )}
      </button>
    </div>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
