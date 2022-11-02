import PropTypes from "prop-types";
import css from 'components/Contacts/Contacts.module.css'

export const ContactList = ({ contacts, onDeleteContact }) => {

  return (
    <ol className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          {name}: {number}
          <button className={css.item__btn}type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
};



ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};