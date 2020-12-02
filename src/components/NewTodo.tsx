import React, { useRef } from "react"; //UseRef to obtain what user entered when form is submitted

interface newTodoProps {
  onAddTodo: (todoText: string) => void; //OnAddTodo is a function with named prop that is triggered in APP.jsx
}

//Get everything user entered and forward them to the APP.jsx
const NewTodo: React.FC<newTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  //Display entered text
  //This function fires when the form below is submitted
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form className="form" onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">
          <strong> Add Shopping List Here </strong>
        </label>
        <input
          type="text"
          placeholder="Enter Shopping List"
          id="todo-text"
          ref={textInputRef}
        />
      </div>
      <button type="submit">
        <strong>ADD TODO</strong>
      </button>
    </form>
  );
};

export default NewTodo;
