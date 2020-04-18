import React from 'react';
import styles from './Activity.css';



function Activity(props) {

  let actStyle = {
    backgroundColor: props.color,
    height: props.height + '%'
  };

  return (
    <div className={styles.activity} style={actStyle}>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <time>{props.duration} minutes</time>
    </div>
  );
}

export default Activity;
