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
        <h1>Phonebook</h1>
        <Form  />
        
        <h2>Contacts</h2>
        <Filter />
        {isloading && !error && <Loader />}
        <ContactList
          />
      </div>
      )
  

  
};
