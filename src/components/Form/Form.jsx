import React from 'react'
import { nanoid } from 'nanoid';
import css from 'components/Form/Form.module.css'


export class Form extends React.Component {

    state = {
      name: '',
      number: ''
    }

     inputChange = (event) => {
    const { name, value } = event.target;
    // console.log(event.target.name);
    // console.log(event.currentTarget.value);
    this.setState({[name]: value})
  }

  formSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
this.props.submit(this.state)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      name: '',
      number: '',
    });
    };
    
    nameInputId = nanoid();
    telInputId = nanoid()
    
    render() {
        return (
            <form onSubmit={this.formSubmit} className={css.form}>
          <label htmlFor={this.nameInputId} className={css.form__field}>
            Name:
             <input
              id={this.nameInputId}     
              className={css.form__input}
              value={this.state.name}
              onChange={this.inputChange}
              name="name"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              
            />
          </label>
          <label htmlFor={this.telInputId} className={css.form__field}>
            Number:
            <input
              id={this.telInputId}  
              className={css.form__input} 
              value={this.state.number}
              onChange={this.inputChange}
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
}