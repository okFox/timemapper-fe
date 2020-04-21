import React from 'react';
import Activity from './Activity';

//this is for the view of all available activities, independent of blocks
//map over activity array.
//needs state off all activities attributed to a user


function Activities() {
  return (
    <div>
      <Activity />
      <Activity />
      <Activity />
    </div>
  );
}

export default Activities;
