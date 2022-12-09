import {useState, useEffect} from 'react'
import { nanoid } from 'nanoid';
import { Form } from 'components/Form/Form'
import { ContactList } from 'components/Contacts/Contacts'
import { Filter } from 'components/Filter/Filter'
import css from 'components/App.module.css'

export const App = () => {

  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? []); 
  // const [filter, setFilter] = useState('');

 
  
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);


  
  //   const onFilterChange = filter => {
  //   setFilter(filter);
  // };

  // const deleteContact = (contactId) => {
  //   setContacts(contacts.filter(
  //       (contact) => contact.id !== contactId
  //     ));
  // };

  const addContact = ({ name, number }) => {
    
    const newContact = { id: nanoid(), name, number };
    const checkUser = contacts.find(
      (contact) => contact.name === newContact.name
    );

    checkUser
      ? alert(`${name} is already in the contacts`)
      : setContacts([newContact, ...contacts]);
        };
  // };

  // const getVisibleContacts = () => {
    
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };


  
    
   
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form submit={addContact} />
        
        <h2>Contacts</h2>
        <Filter />
        <ContactList
          />
      </div>
      )
  

  
};
