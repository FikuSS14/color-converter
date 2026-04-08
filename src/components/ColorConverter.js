import React, { useState } from 'react';

function ColorConverter() {
  const [hex, setHex] = useState('');       
  const [rgb, setRgb] = useState('');       
  const [error, setError] = useState('');   
  const [bgColor, setBgColor] = useState('#ffffff'); 

  const hexToRgb = (hexCode) => {
    const regex = /^#([A-Fa-f0-9]{6})$/;
    if (!regex.test(hexCode)) {
      return null;
    }

    const r = parseInt(hexCode.slice(1, 3), 16);
    const g = parseInt(hexCode.slice(3, 5), 16);
    const b = parseInt(hexCode.slice(5, 7), 16);

    return { r, g, b };
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setHex(value);
    if (value.length === 7) {
      const rgbResult = hexToRgb(value);
      
      if (rgbResult) {
        setRgb(`rgb(${rgbResult.r}, ${rgbResult.g}, ${rgbResult.b})`);
        setBgColor(value);
        setError('');
      } else {
        setError('Ошибка: неверный HEX-код');
        setRgb('');
      }
    } else {
      setRgb('');
      setError('');
    }
  };

  return (
    <div className="converter" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <h1>Конвертер цветов</h1>
        
        <input
          type="text"
          value={hex}
          onChange={handleChange}
          placeholder="#34495e"
          maxLength={7}
          className="color-input"
        />
        
        {rgb && (
          <div className="result">
            RGB: {rgb}
          </div>
        )}
        
        {error && (
          <div className="error">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default ColorConverter;