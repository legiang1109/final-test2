import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import reducer from "../redux/reducer";
import { todoSelector } from ".././redux/selecter";
function Content() {
  const todolist = useSelector(todoSelector);
  const dispatch = useDispatch();
  const [editValue, setEditValue] = useState("");
  const handleDeleteTodo = (index) => {
    dispatch(reducer.actions.deleteTodo(index));
  };
  const handleCompleteItem = (index) => {
    dispatch(reducer.actions.toggleTodo(index));
  };
  const handleEdit = (index) => {
    dispatch(reducer.actions.startEditTodo(index));
  };
  return (
    <div className="container__list">
      {todolist.todos
        .filter(todolist.filters[todolist.filter])
        .map((item, index) => {
          return (
            <div
              key={index}
              className={`item ${item.complete ? "complete" : ""} ${
                todolist.editIndex === index ? "editing" : ""
              }`}
            >
              <input
                className="toggle"
                type="checkbox"
                checked={item.complete}
                onChange={() => {
                  handleCompleteItem(index);
                }}
              />
              <input
                className="edit"
                defaultValue={item.name}
                onChange={(e) => {
                  setEditValue(e.target.value);
                }}
                onKeyUp={(e) => {
                  if (e.key == "Enter") {
                    const newEdit = {
                      name: editValue,
                      complete: item.complete,
                    };
                    dispatch(reducer.actions.endEditTodo(newEdit));
                  }
                }}
              ></input>

              <label onDoubleClick={() => handleEdit(index)}>{item.name}</label>
              <button
                className="fa fa-trash"
                onClick={() => {
                  handleDeleteTodo(index);
                }}
              ></button>
            </div>
          );
        })}
      <p>nháy đúp vào tiêu đề để chỉnh sửa</p>
    </div>
  );
}

export default Content;
