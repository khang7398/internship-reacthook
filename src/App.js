import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Todo from './view/Todo.js';

function App() {
  const [name, setName] = useState('Elbert');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, name: 'Elbert Strosin' },
    { id: 2, name: 'Royal Paucek' },
  ]);

  useEffect(() => {
    console.log('run use effect adress');
  }, [address]);

  useEffect(() => {
    console.log('run use effect Todo');
  }, [todos]);

  const DeleteTodo = (id) => {
    let currentTodo = todos;
    currentTodo = currentTodo.filter((item) => item.id !== id);
    setTodos(currentTodo);
  };

  const handleOnLick = (event) => {
    if (!address) {
      alert('emty input');
      return;
    }
    let newtodo = { id: Math.floor(Math.random() * 10 + 1), name: address };
    setTodos([...todos, newtodo]);
    setAddress('');
  };

  const handleOnChange = (event) => {
    setAddress(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}</h1>
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnChange(event)}
        />
        <button type="buton" onClick={(event) => handleOnLick(event)}>
          Click me
        </button>

        <Todo todos={todos} DeleteTodo={DeleteTodo} />
      </header>
    </div>
  );
}

export default App;
