import React from 'react';
import styles from './Activity.css';



function Activity(props) {
  return (
    <div className={styles.activity}>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Activity;
