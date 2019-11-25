import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const { name } = props;
  const { color } = props;
  const { isWide } = props;
  // const { id } = props;
  return (
    isWide
      ? (
        <div className="Button" style={{ width: '50%' }}>
          <button type="button" onClick={props.onClick} style={{ backgroundColor: color }}>{name}</button>
        </div>
      )
      : (
        <div className="Button" style={{ width: '25%' }}>
          <button type="button" onClick={props.onClick} style={{ backgroundColor: color }}>{name}</button>
        </div>
      )
  );
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  isWide: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
Button.defaultProps = {
  name: '',
  color: '#FF911A',
  isWide: false,
};

export default Button;
