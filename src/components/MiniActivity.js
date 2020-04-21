import React from 'react';

const MiniActivity = (props) => {

  return ( 

    <div className='activityBlurb' style={ { backgroundColor: props.color, borderRadius: 3 }}>
      <p>{props.name}</p>
    </div>

  );
};

export default MiniActivity;
