import React from 'react';
import ContactItem from './ContactItem';

function ContactList(props) {
  const { contacts } = props;
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}

export default ContactList;
