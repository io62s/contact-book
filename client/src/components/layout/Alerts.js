import React, { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AlertContext from "../../context/alert/alertContext";

function Alerts() {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  return (
    <TransitionGroup>
      {alerts.length > 0 &&
        alerts.map(({ id, type, msg }) => (
          <CSSTransition key={id} timeout={300} classNames="item">
            <div className={`alert alert-${type}`}>
              <i className="fas fa-info-circle" /> {msg}
            </div>
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
}

export default Alerts;
