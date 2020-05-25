import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
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
      {
        id: 4,
        name: "An Io",
        email: "io@mail.com",
        phone: "555-333",
        type: "professional",
      },
      {
        id: 5,
        name: "Duki Mazza",
        email: "dooka@mail.com",
        phone: "666-333",
        type: "personal",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}

export default ContactState;
