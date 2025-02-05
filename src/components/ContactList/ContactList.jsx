import PropTypes from "prop-types";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className={s.wrapper}>
        {contacts.map((contact) => (
          <li key={contact.id} className={s.li}>
            <Contact contact={contact} onDeleteContact={onDeleteContact} />
          </li>
        ))}
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
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
