import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

function ContactItem({ contact }) {
  const contactContext = useContext(ContactContext);

  const { deleteContact } = contactContext;
  const { id, name, email, phone, type } = contact;

  const handleDelete = () => {
    deleteContact(id);
  };

  return (
    <div
      className={`card bg-light ${type === "professional" ? "prof-card" : ""}`}
    >
      <h3 className="text-primary text-left">
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
      <ul className="list">
        {email && (
          <li>
            <i class="fas fa-envelope"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i class="fas fa-phone-alt"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-edit btn-sm">
          <i class="fas fa-edit"></i>
        </button>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          <i class="far fa-trash-alt"></i>
        </button>
      </p>
    </div>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
