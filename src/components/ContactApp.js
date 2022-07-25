import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';

function ContactApp() {
  const contactsdat = getData();

  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contactsdat} />
    </div>
  );
}

export default ContactApp;
