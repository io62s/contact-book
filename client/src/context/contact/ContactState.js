import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

function ContactState(props) {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "john@mail.com",
        phone: "111-111",
        type: "personal",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jane@mail.com",
        phone: "222-555",
        type: "personal",
      },
      {
        id: 3,
        name: "Bill Sid",
        email: "bill@mail.com",
        phone: "666-888",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}

export default ContactState;
