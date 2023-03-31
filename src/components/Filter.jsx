import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <>
      <label htmlFor="findName" className="form-label">
        Find contacts by name
      </label>
      <input
        id="findName"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
