import PropTypes from "prop-types";
import s from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

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
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
