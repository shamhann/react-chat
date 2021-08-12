import React from 'react';
import styles from './contacts.module.css';

function FormContacts(props) {
  return (
    <div className="form-control-file d-flex align-items-center">
      <i className="fa fa-search" aria-hidden="true"></i>
      <input
        className={styles.input}
        type="text"
        placeholder="Sreach contact"
      />
    </div>
  );
}

export default FormContacts;
