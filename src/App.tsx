import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
//import * as ReactDOM from "react-dom";

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);

  //Display text on screen, function called from NewTodo.tsx by adding a pointer OnAddTodo below
  //The logic here returns a new array with the new elements and overides the exhisting elements
  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  //Delete functionality added
  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
