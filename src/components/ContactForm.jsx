import PropTypes from 'prop-types';

export const ContactForm = ({ onChange, onAddContact }) => {
  return (
    <>
      <form onSubmit={onAddContact}>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            id="inputName"
            type="text"
            name="name"
            onChange={onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputNumber" className="form-label">
            Number
          </label>
          <input
            id="inputNumber"
            type="tel"
            name="number"
            onChange={onChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onAddContact: PropTypes.func.isRequired,
};
