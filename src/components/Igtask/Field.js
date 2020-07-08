import React from 'react';
import PropTypes from 'prop-types';

function Field(props) {
    return(
      <button className="field" onClick={() => props.onClick()} style={{backgroundColor: props.color}}>
      </button>
    )
}

Field.propTypes = {
  // color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Field;


