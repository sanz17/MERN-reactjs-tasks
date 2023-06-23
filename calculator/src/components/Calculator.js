import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleNumberClick = (number) => {
    setInput(input + number);
  };

  const handleOperatorClick = (operator) => {
    setInput(input + operator);
  };

  const handleEqualsClick = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
    setInput('');
  };

  const handleClearClick = () => {
    setResult(0);
    setInput('');
  };

  return (
    <>
      <h1>Calculator</h1>
      <div>
      <Form.Control type="text" value={input} />
        <Button variant="dark" onClick={handleClearClick}>Clear</Button>
      </div>
      <div >
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={() => handleNumberClick('7')}>7</Button>
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={() => handleNumberClick('8')}>8</Button>
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={() => handleNumberClick('9')}>9</Button>
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={() => handleOperatorClick('/')}>÷</Button>
      </div>
      <div>
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={() => handleNumberClick('4')}>4</Button>
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={() => handleNumberClick('5')}>5</Button>
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={() => handleNumberClick('6')}>6</Button>
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={() => handleOperatorClick('*')}>x</Button>
      </div>
      <div>
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={() => handleNumberClick('1')}>1</Button>
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={() => handleNumberClick('2')}>2</Button>
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={() => handleNumberClick('3')}>3</Button>
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={() => handleOperatorClick('-')}>-</Button>
      </div>
      <div>
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={() => handleNumberClick('0')}>0</Button>
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={() => handleOperatorClick('.')}>.</Button>
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={handleEqualsClick}>=</Button>
        <Button style={{'paddingLeft':'32px','paddingRight':'32px'}}variant="dark"onClick={() => handleOperatorClick('+')}>+</Button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </>
  );
};

export default Calculator;
