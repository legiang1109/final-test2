import { useState } from "react";
import { useDispatch } from "react-redux";

import reducer from "../redux/reducer";
function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };
  const handleAddTodo = () => {
    if (input) {
      const newItem = {
        name: input,
        complete: false,
      };
      dispatch(reducer.actions.addTodo(newItem));
      setInput("");
    }
  };
  return (
    <div className="form-data">
      <input
        className="new-todo"
        placeholder="Enter your todo..."
        autoFocus
        value={input}
        onChange={handleChangeInput}
      ></input>
      <button onClick={handleAddTodo}>ADD</button>
    </div>
  );
}

export default Input;
