import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

export const Display = (props) => {
  const { result } = props;

  return (
    <div className="display">
      <h4>{result}</h4>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = {
  result: '0',
};

export default Display;
