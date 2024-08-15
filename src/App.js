import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [isScientificMode, setIsScientificMode] = useState(false);

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
    switch (func) {
      case 'sqrt':
        setExpression(`Math.sqrt(${expression})`);
        break;
      case 'sin':
        setExpression(`Math.sin(${expression})`);
        break;
      case 'cos':
        setExpression(`Math.cos(${expression})`);
        break;
      default:
        break;
    }
  };

  const clearExpression = () => {
    setExpression('');
  };

  const deleteLastCharacter = () => {
    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  const toggleScientificMode = () => {
    setIsScientificMode((prevMode) => !prevMode);
  };

  return (
    <div className="calculator">
      <div className="screen">{expression}</div>

      {/* Numeric buttons */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
        <button key={num} onClick={() => handleButtonClick(num.toString())}>
          {num}
        </button>
      ))}

      {/* Basic arithmetic operators */}
      {['+', '-', '*', '/'].map((operator) => (
        <button key={operator} onClick={() => handleButtonClick(operator)}>
          {operator}
        </button>
      ))}

      {/* Decimal point */}
      <button onClick={() => handleButtonClick('.')}>.</button>

      {/* Scientific buttons (only shown in scientific mode) */}
      {isScientificMode && (
        <>
          <button onClick={() => handleScientificFunction('sqrt')}>√</button>
          <button onClick={() => handleScientificFunction('sin')}>sin</button>
          <button onClick={() => handleScientificFunction('cos')}>cos</button>
        </>
      )}

      {/* Other buttons */}
      <button onClick={deleteLastCharacter}>Del</button>
      <button onClick={clearExpression}>Ac</button>
      <button onClick={evaluateExpression}>=</button>

      {/* Toggle scientific mode button */}
      <button
        className="orange-button"
        onClick={toggleScientificMode}
      >
        {isScientificMode ? 'Basic' : 'Scientific'}
      </button>
    </div>
  );
};

export default Calculator;
