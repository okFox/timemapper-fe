import React, { useState } from 'react';
import { GithubPicker } from 'react-color';
import styles from './Activity.css';


const activityForm = (props) => {
  const [colorPick, setColorPick] = useState('');

  const setColorState = (color) => {
    setColorPick({ background: color.hex });
  };

  return (
    <div className={styles.form}>
      <h1>Add a New Activity</h1>
      <form onSubmit={props.handleActivityFormSubmit}>
        
        <label> Activity Name:</label>
        <input type='text' name='activityName' id='actname' placeholder='eg. Learn Piano'></input>

        <label>Description:</label>
        <input type='textarea' name='description' id='actdesc'></input>

        <label>Duration in minutes:</label>
        <input type='number' id="dur" name='duration' min="0" max='120' step='15'></input>
        <label>Color:</label>
        <div style={{ margin: 'auto', paddingBottom: '10px' }} >
          <GithubPicker onChangeComplete={setColorState}/>
        </div>
        <button id='submit' value='submit' style={{ background: colorPick.background }}>Create Activity</button>
      </form>
    </div>
  );
};

export default activityForm;
