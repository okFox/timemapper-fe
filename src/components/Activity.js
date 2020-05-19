import React from 'react';
import styles from './Activity.css';
import PropTypes from 'prop-types';

function Activity(props) {

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

Activity.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string,
  name: PropTypes.string,
  duration: PropTypes.number,
  description: PropTypes.string
};

export default Activity;
