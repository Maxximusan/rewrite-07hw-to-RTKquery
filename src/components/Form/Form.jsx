import {useState} from 'react'
import { nanoid } from 'nanoid';
import css from 'components/Form/Form.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from '../../Redux/ToolkitSlice'

export const Form = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts)

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  

    const inputChange = (event) => {
    const { name, value } = event.target;
  
       switch (name) {
         case 'name':
           setName(value);
           break;
         
         case 'number':
           setNumber(value);
           break;
         
         default:
           return;
       }
    
  }

  const clearForm = () => {
    setName('');
    setNumber('')
   
    };

 
  
    const addContacts = ({ name, number }) => {
    
    const newContact = { id: nanoid(), name, number };
    const checkUser = contacts.find(
      (contact) => contact.name === newContact.name
    );

    checkUser
      ? alert(`${name} is already in the contacts`)
      : dispatch(addContact(newContact));
  };
  
  
  const formSubmit = (event) => {
    event.preventDefault();

    addContacts({ name, number })
    
    clearForm()
  }
    
    const nameInputId = nanoid();
   const  telInputId = nanoid()
    
 
  
        return (
            <form onSubmit={formSubmit} className={css.form}>
          <label htmlFor={nameInputId} className={css.form__field}>
            Name:
             <input
              id={nameInputId}     
              className={css.form__input}
              value={name}
              onChange={inputChange}
              name="name"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              
            />
          </label>
          <label htmlFor={telInputId} className={css.form__field}>
            Number:
            <input
              id={telInputId}  
              className={css.form__input} 
              value={number}
              onChange={inputChange}
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button className={css.form__btn} type="submit">Add contact!</button>
        </form>
        )
   
}