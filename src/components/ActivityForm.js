import React, { useState } from 'react';
import styles from './Activity.css';


const activityForm = (props) => {

  return (
    <div className={styles.form}>
      <form onSubmit={props.handleActivityFormSubmit}>
        <h1>Add a New Activity</h1>

        <label> Activity Name:</label>
        <input type='text' name='activityName' id='actname' placeholder='eg. Learn Piano'></input>

        <label>Description:</label>
        <input type='textarea' name='description' id='actdesc'></input>

        <label htmlFor="dur">Duration in minutes:</label>
        <input type='number' id="dur" name='duration' min="0" max='120' step='15'></input>

        <button id='submit' value='submit'>Create Activity</button>
      </form>
    </div>
  );
};

export default activityForm;
