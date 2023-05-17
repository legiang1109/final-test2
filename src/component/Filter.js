import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import reducer from "../redux/reducer";
import { todoSelector } from "../redux/selecter";

function Filter() {
  const dispatch = useDispatch();
  const todolist = useSelector(todoSelector);
  const aRef = useRef();

  const handleDeleteAllComplete = () => {
    dispatch(reducer.actions.deleteAllComplete());
  };
  const handleDeleteAll = () => {
    dispatch(reducer.actions.deleteAll(0));
  };
  const handleCheckAll = () => {
    dispatch(reducer.actions.toggleAll(true));
  };
  const handleSwitchFilter = (type) => {
    dispatch(reducer.actions.switchFilter(type));
  };
  return (
    <div className="container__filter">
      <ul className="filters">
        {Object.keys(todolist.filters).map((type, index) => (
          <li key={index}>
            <a
              ref={undefined}
              className={todolist.filter === type ? "active" : ""}
              onClick={(e) => {
                handleSwitchFilter(type);
              }}
            >
              {type[0].toUpperCase() + type.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div className="check__all">
        <button className="clear-completed" onClick={handleDeleteAllComplete}>
          Clear completed
        </button>
        <button onClick={handleCheckAll}> Check All</button>
        <button onClick={handleDeleteAll}>Clear All</button>
      </div>
    </div>
  );
}

export default Filter;
