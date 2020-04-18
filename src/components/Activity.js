import React from 'react';
import styles from './Activity.css';



function Activity(props) {

  let actStyle = {
    backgroundColor: props.color,
    height: props.height + '%'

  };

  return (
    <div className={styles.activity} style={actStyle}>
      <span><h1>{props.name}</h1><time>{props.duration} minutes</time></span>
      <p>{props.description}</p>
      
    </div>
  );
}

export default Activity;
