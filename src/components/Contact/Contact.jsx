import React from "react";
import s from "./contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={s.container}>
      <li className={s.item}>
        <p>
          <i className="fas fa-user icon" style={{ marginRight: "8px" }}></i>
          {name}
        </p>

        <p>
          <i
            className="fas fa-phone-alt icon"
            style={{ marginRight: "8px" }}
          ></i>
          {number}
        </p>
        <button className={s.deleteBtn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
