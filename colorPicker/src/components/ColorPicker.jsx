import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div >
      <Button style={{'marginTop':'20px','marginBottom':'20px'}} variant='dark' onClick={() => setShowColorList(!showColorList)}>
        Click to Pick a color
      </Button>
      {showColorList && (
        <ul>
          {colors.map((color, index) => (
            <li
              key={index}
              style={{
                backgroundColor: color,
                width: '50px',
                height: '50px',
                display: 'inline-block',
                margin: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </ul>
      )}
      {selectedColor && (
        <div style={{ marginTop: '10px' }}>
          You selected: <span style={{ color: selectedColor }}>{selectedColor}</span>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
