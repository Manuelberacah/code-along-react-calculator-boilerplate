import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const calculateResult = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleButton = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'ac') {
      clearAll();
    } else if (value === 'del') {
      deleteLast();
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  

  const clearAll = () => {
    setInput('');
    setResult('');
  };

  const deleteLast = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButton('7')}>7</button>
          <button onClick={() => handleButton('8')}>8</button>
          <button onClick={() => handleButton('9')}>9</button>
          <button onClick={() => handleButton('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButton('4')}>4</button>
          <button onClick={() => handleButton('5')}>5</button>
          <button onClick={() => handleButton('6')}>6</button>
          <button onClick={() => handleButton('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButton('1')}>1</button>
          <button onClick={() => handleButton('2')}>2</button>
          <button onClick={() => handleButton('3')}>3</button>
          <button onClick={() => handleButton('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButton('0')}>0</button>
          <button onClick={() => handleButton('.')}>.</button>
          <button onClick={() => handleButton('=')}>=</button>
          <button onClick={() => handleButton('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButton('ac')}>AC</button>
          <button onClick={() => handleButton('del')}>DEL</button>
        </div>
      </div>
    </div>
  );
}

export default App;
