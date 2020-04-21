import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import styles from './Activity.css';


const activityForm = (props) => {

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
        {<ColorPicker />}
        <button id='submit' value='submit'>Create Activity</button>
      </form>
    </div>
  );
};

export default activityForm;
