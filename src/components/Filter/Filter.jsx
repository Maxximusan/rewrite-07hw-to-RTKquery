import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.module.css'

export const Filter = ({ filter, onFilterChange }) => {
    return (
      <div >
      <label className={css.field}>
        Find contacts by Name
        <input
          className={css.field__input}
            type="text"
          value={filter}
          onChange={event => onFilterChange(event.target.value)}
        />
            </label>
            </div>
  );
}



Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};