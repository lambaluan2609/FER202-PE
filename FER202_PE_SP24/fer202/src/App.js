import React from 'react';
import TodoListApp from './components/TodoListApp';
import SquareAreaCalculator from './components/SquareAreaCalculator';
import DateTimeDisplay from './components/DateTimeDisplay';
import './App.css'; // Make sure to import your CSS styles

const App = () => {
  return (
    <div className="App">
      <h1>My Todo List Application</h1>
      <TodoListApp />
      <h2>Calculate Area of a Square</h2>
      <SquareAreaCalculator />
      <h2>Current Date and Time</h2>
      <DateTimeDisplay />
    </div>
  );
};

export default App;
