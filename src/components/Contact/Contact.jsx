import React from 'react';
import s from './contact.module.css';

const Contact = ({ name, number }) => {
  return (
    <li className={s.item}>
      <p>
        <i className="fas fa-user" style={{ marginRight: '8px' }}></i>
        {name}
      </p>
   
      <p>
        <i className="fas fa-phone-alt" style={{ marginRight: '8px' }}></i>
        {number}
      </p>
    </li>
  );
};

export default Contact;
