import React, { useState } from 'react';
import { GithubPicker } from 'react-color';

const ColorPicker = () => {
  const [colorPalette, setColorPalette] = useState()
;
  return (
    <div style={{ margin: 'auto', paddingBottom: '10px' }}>
      <GithubPicker />
    </div>
  );};

export default ColorPicker;
