import React from 'react';
import PropTypes from 'prop-types';

const MiniBlock = (props) => {

  return ( 

    <div className='blockBlurb' style={ { backgroundColor: props.color, borderRadius: 3 }}>
      <p>{props.blockName}</p>
    </div>

  );
};
MiniBlock.propTypes = {
  color: PropTypes.string,
  blockName: PropTypes.string
};
export default MiniBlock;


