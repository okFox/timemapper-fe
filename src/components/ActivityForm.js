import React from 'react';
import styles from './Activity.css';


const activityForm = () => {

  return (
    <div className={styles.form}>
      <form>
        <h1>Add a New Activity</h1>
        <label htmlFor='actname'> Activity Name:</label>
        <input type='text' name='actname' id='actname' placeholder='eg. Learn Piano'></input>
        <label htmlFor='actdesc'>Description:</label>
        <input type='textarea' name='actdesc' id='actdesc'></input>
        <label htmlFor="dur">Duration in minutes:</label>
        <input type='number' id="dur" name="dur" min="0" max='120' step='15'></input>
        <button>Create Activity</button>
      </form>
    </div>
  );
};

export default activityForm;
