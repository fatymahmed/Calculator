import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const { name } = props;
  return (
    <div className="Button">
      <button type="button">{name}</button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string,
};
Button.defaultProps = {
  name: '',
};

export default Button;
