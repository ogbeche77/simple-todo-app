import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Chat from "./components/Chat";

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
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to="/chat">ChatRoom</Link>
        </div>
        <Route path="/" exact>
          <NewTodo onAddTodo={todoAddHandler} />
          <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
        </Route>
      </div>

      <Route path="/chat" component={Chat}></Route>
    </BrowserRouter>
  );
};

export default App;
