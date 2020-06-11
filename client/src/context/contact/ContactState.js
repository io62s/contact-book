import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  CLEAR_CONTACTS,
  CONTACT_ERROR,
} from "../types";

function ContactState(props) {
  const initialState = {
    contacts: [],
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const getContacts = async () => {
    try {
      const res = await axios.get("/api/contacts");
      const contacts = await res.data;

      dispatch({
        type: GET_CONTACTS,
        payload: contacts,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  const addContact = async (contact) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    try {
      const res = await axios.post("/api/contacts", contact, config);
      const newContact = await res.data;
      dispatch({
        type: ADD_CONTACT,
        payload: newContact,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  const clearContacts = () => {
    dispatch({
      type: CLEAR_CONTACTS,
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

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        error: state.error,
        getContacts,
        addContact,
        deleteContact,
        clearContacts,
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
