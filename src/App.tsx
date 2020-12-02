import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
//import * as ReactDOM from "react-dom";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Lets go Shopping" }];
  return (
    <div className="App">
      {/* <NewTodo /> */}
      <TodoList items={todos} />
    </div>
  );
};

export default App;
