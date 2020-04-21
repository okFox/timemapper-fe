import React, { useState } from 'react';
import { GithubPicker } from 'react-color';

const ColorPicker = () => {
  const [colorPalette, setColorPalette] = useState()
;
  return <GithubPicker />;

};

export default ColorPicker;
