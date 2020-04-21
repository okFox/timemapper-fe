import React from 'react';
import styles from './Activity.css';

const activityName = {
  name: 'Wani Kani',
  duration: 3,
  color: 'rgba'
};


function Activity() {
  return (
    <div className={styles.activity}>
      <h1>{activityName.name}</h1>
    </div>
  );
}

export default Activity;
