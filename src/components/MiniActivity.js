import React from 'react';

const MiniActivity = (props) => {

  return ( 

    <div className='activityBlurb' style={ { backgroundColor: props.color } }>
      <p>{props.name}</p>
    </div>

  );
};

export default MiniActivity;
