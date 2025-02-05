import PropTypes from "prop-types";
import s from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <>
      <div className={s.containerInfo}>
        <span>
          <FaUser className={s.icon} /> {contact.name}
        </span>
        <span>
          <FaPhone className={s.icon} />
          {contact.number}
        </span>
      </div>
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
