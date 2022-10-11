import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import React, { useState, useEffect } from "react";

function App() {
  const [todoList, setTodoList] = useState(() => {
    if(localStorage.getItem('list')) {
      return JSON.parse(localStorage.getItem('list'))
    } else {
      return []
    }
    });
  
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(todoList))}, [todoList])

  return (
    <div className="App">
      <Form todoList={todoList} setTodoList={setTodoList} />
      <Display todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
