import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { TodoContext } from './context/TodoContext';

function App() {
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);

  return (
    <TodoContext.Provider value={[todoList, setTodoList]}>
      <TodoList/>
    </TodoContext.Provider>

  );
}

export default App;
