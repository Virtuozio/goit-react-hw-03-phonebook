import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filter, deleteBtn }) => {
  return (
    <>
      <ul className="contacts">
        {contacts.map(contact =>
          contact.name.toLowerCase().includes(filter) ? (
            <li key={contact.id}>
              <span className="contacts-name">{contact.name}:</span>
              <span className="contacts-number">{contact.number}</span>
              <button
                id={contact.id}
                className="contacts-del-btn"
                onClick={deleteBtn}
              >
                Delete
              </button>
            </li>
          ) : null
        )}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
};
