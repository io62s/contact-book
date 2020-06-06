import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import AuthContext from "../../context/auth/authContext";

function Home() {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div className="form-wrapp">
        <ContactForm />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
}

export default Home;
