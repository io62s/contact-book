import React, { useContext, useState } from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

function ContactItem({ contact }) {
  const contactContext = useContext(ContactContext);

  const { deleteContact } = contactContext;
  const { id, name, email, phone, type } = contact;

  const [expand, setExpand] = useState(false);

  const cardFadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  const handleDelete = () => {
    deleteContact(id);
  };

  const handleExpandCard = () => {
    setExpand(!expand);
  };

  return (
    <animated.div
      style={cardFadeIn}
      className={`card ${type === "professional" ? "prof-card" : ""} ${
        expand ? "expand" : ""
      }`}
    >
      <h3 className="text-primary text-left contact-name">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={`badge ${
            type === "professional" ? "badge-prof" : "badge-primary"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <div className={`list-container ${expand ? "fade-in" : ""}`}>
        <ul className="list">
          {email && (
            <li>
              <i className="fas fa-envelope"></i> {email}
            </li>
          )}
          {phone && (
            <li>
              <i className="fas fa-phone-alt"></i> {phone}
            </li>
          )}
        </ul>
        <p>
          <button className="btn btn-edit btn-sm">
            <i className="fas fa-edit"></i>
          </button>
          <button className="btn btn-delete btn-sm" onClick={handleDelete}>
            <i className="far fa-trash-alt"></i>
          </button>
        </p>
      </div>
      <button className="chevron" onClick={handleExpandCard}>
        {expand ? (
          <i className="fas fa-caret-up"></i>
        ) : (
          <i className="fas fa-caret-down"></i>
        )}
      </button>
    </animated.div>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
