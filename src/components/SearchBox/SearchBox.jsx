import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <>
      <label className={s.container}>
        <span>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </>
  );
};

export default SearchBox;
