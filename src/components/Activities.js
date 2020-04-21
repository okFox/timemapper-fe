import React, { useEffect } from 'react';
import MiniActivity from './MiniActivity';
// import Activity from './Activity';

//this is for the view of all available activities, independent of blocks
//map over activity array.
//needs state off all activities attributed to a user


function Activities(props) {
  const blurbsArray = [];

  useEffect(() => {
    fetch('http://localhost:7890/api/v1/activities')
      .then(res => {
        blurbsArray.push(res.json());
      });
    //set new state here
    
  }, []);
console.log(blurbsArray);

  return (
    {blurbsArray.map(blurb => {
      <MiniActivity blurbsArray={blurbsArray} />  
    })
      

    });
}

export default Activities;
