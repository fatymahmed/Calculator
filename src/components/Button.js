import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const { name } = props;
  const { color } = props;
  return (
    <div className="Button" style={{ background: color }}>
      <button type="button">{name}</button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};
Button.defaultProps = {
  name: '',
  color: '#FF911A',
};

export default Button;
