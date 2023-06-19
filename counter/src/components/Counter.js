import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';

function Counter() {
  const [val,setVal]=useState('')
  const [word,setWord]=useState(0)

  const handleChange=(e)=>{
    const data=e.target.value.split(' ');
    console.log(data);
    setVal(e.target.value);
    setWord(data.length);
    if(e.target.value==='')
    {
      setWord(0);
    }
  }

  return (
    <div 
    style={{
      'paddingLeft':'150px',
      'paddingRight':'150px',
      'margin':'30px',}}>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{'fontWeight':'bold','color':'rgb(24,24,24)','fontFamily':'monospace','fontSize':'30px'}}>Responsive Paragraph Word counter</Form.Label>
          <Form.Control value={val} onChange={
            (e)=>handleChange(e)
          } as="textarea" rows={3} />
        </Form.Group>
      </Form>
      
      <h4>Words count: {word}</h4>
    </div>

  );
}

export default Counter;