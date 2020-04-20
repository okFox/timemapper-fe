import React from 'react';

const miniActivity = (props) => {
  const blurb = props.blurbsArray;
  return (

    <div className='activityBlurb'>
      <p>{blurb.ActivityName}</p>
    </div>

  );
};

export default miniActivity;
