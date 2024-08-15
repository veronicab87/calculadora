import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const evaluateExpression = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleScientificFunction = (func) => {
    // Implementa tus funciones científicas aquí
    // Ejemplo: Math.sqrt(expression), Math.sin(expression), etc.
    // Actualiza la expresión en consecuencia
  };

  const clearExpression = () => {
    setExpression('');
  };

  const deleteLastCharacter = () => {
    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="screen">{expression}</div>

      <button onClick={() => handleButtonClick('1')}>1</button>
      <button onClick={() => handleButtonClick('2')}>2</button>
      <button onClick={() => handleButtonClick('3')}>3</button>
      <button onClick={() => handleButtonClick('5')}>5</button>
      <button onClick={() => handleButtonClick('6')}>6</button>
      <button onClick={() => handleButtonClick('7')}>7</button>
      <button onClick={() => handleButtonClick('8')}>8</button>
      <button onClick={() => handleButtonClick('9')}>9</button>
      <button onClick={() => handleButtonClick('0')}>0</button>

      <button onClick={() => handleButtonClick('+')}>+</button>
      <button onClick={() => handleButtonClick('-')}>-</button>
      <button onClick={() => handleButtonClick('*')}>*</button>
      <button onClick={() => handleButtonClick('/')}>/</button>

      <button onClick={() => handleScientificFunction('sqrt')}>√</button>
      <button onClick={() => handleScientificFunction('sin')}>sin</button>
      <button onClick={() => handleScientificFunction('cos')}>cos</button>

      <button onClick={evaluateExpression}>=</button>
      <button onClick={deleteLastCharacter}>Del</button>
      <button onClick={clearExpression}>Ac</button>
    </div>
  );
};




export default Calculadora;
