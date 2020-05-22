import React, { useState } from 'react';
import { GithubPicker } from 'react-color';
import styles from './Block.css';
import PropTypes from 'prop-types';

const blockForm = (props) => {
  const [colorPick, setColorPick] = useState('');

  const setColorState = (color) => {
    setColorPick({ background: color.hex });
  };

  return (
    <div className={styles.blockform}>
      <h1>Add A New Block</h1>
      <form onSubmit={props.handleBlockFormSubmit}>

        <label> Block Name:</label>
        <input type='text' name='blockName' id='blName'></input>

    

      </form>
    </div>
  );


};

blockForm.propTypes = {
  handleBlockFormSubmit: PropTypes.func
};

export default blockForm;
