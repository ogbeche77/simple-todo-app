import React from "react";

interface todoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void; //Delete todos
}

const todoList: React.FC<todoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span className="container">{todo.text}</span>
          <button
            className="deleteButton"
            onClick={props.onDeleteTodo.bind(null, todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default todoList;
