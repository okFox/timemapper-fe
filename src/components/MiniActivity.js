import React from 'react';

const miniActivity = (props) => {


  return (

    <div className='activityBlurb' style = {{color: props.color}}>
      <p>{props.activityName}</p>
    </div>

  );
};

export default miniActivity;
