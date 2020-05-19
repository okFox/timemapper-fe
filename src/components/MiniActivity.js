import React from 'react';
import PropTypes from 'prop-types';

const MiniActivity = (props) => {

  return ( 

    <div className='activityBlurb' style={ { backgroundColor: props.color, borderRadius: 3 }}>
      <p>{props.name}</p>
    </div>

  );
};
MiniActivity.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string
};
export default MiniActivity;
