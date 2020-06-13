// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="list">
      {props.list.map((item) => (
        <Todo key={item.id} task={item} toggleItem={props.toggleItem} />
      ))}
      <button onClick={props.deleteItem}>Delete</button>
    </div>
  );
};

export default TodoList;
