import React from 'react';
import styles from './Activity.css';
import activityForm from './ActivityForm';



function Activity(props) {
  // const item = props.activity;
  // console.log(item);

  let actStyle =  { 
    backgroundColor: props.color,
    height: props.height * 6
  };

  return (
    <div className={styles.activity} style={actStyle}>
      <span><h1>{props.name}</h1><time>{props.duration} minutes</time></span>
      <p>{props.description}</p>
    </div>
  );
}

export default Activity;
