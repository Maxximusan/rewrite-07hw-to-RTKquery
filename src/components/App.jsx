import {useEffect} from 'react'
// import { nanoid } from 'nanoid';
import { Form } from 'components/Form/Form'
import { ContactList } from 'components/Contacts/Contacts'
import { Filter } from 'components/Filter/Filter'
import css from 'components/App.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getIsLoading, getError } from '../Redux/ToolkitSlice'
import { fetchContacts } from 'Redux/operations'
import { Loader } from './Loader/Loader'

export const App = () => {

  const dispatch = useDispatch();
  const isloading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
    
   
    return (
      <div className={css.container}>
        <header className={css.header}>
          <h1 className={css.header__title}>Phonebook</h1>
        </header>
        <div className={css.sectionsContainer}>
          <section className={css.addList}>
            <h2 className={css.title}>Add Contact</h2>
           <Form  />
          </section>
          <section className={css.contactsList}>
            <h2 className={css.title}>Contacts</h2>
            <Filter />
            {isloading && !error && <Loader />}
            <ContactList />
          </section>
        </div>
      </div>
      )
  

  
};
