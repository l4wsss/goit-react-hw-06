import PropTypes from "prop-types";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <label className={s.container}>
        <span>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
