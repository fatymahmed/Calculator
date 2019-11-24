import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

const ButtonPanel = () => (
  <div className="buttonPanel">
    <div className="buttonGroup group1">
      <Button name="AC" color="lightgrey" />
      <Button name="+/-" color="lightgrey" />
      <Button name="%" color="lightgrey" />
      <Button name="/" />
    </div>
    <div className="buttonGroup group2">
      <Button name="7" color="lightgrey" />
      <Button name="8" color="lightgrey" />
      <Button name="9" color="lightgrey" />
      <Button name="x" />
    </div>
    <div className="buttonGroup group3">
      <Button name="4" color="lightgrey" />
      <Button name="5" color="lightgrey" />
      <Button name="6" color="lightgrey" />
      <Button name="-" />
    </div>
    <div className="buttonGroup group4">
      <Button name="1" color="lightgrey" />
      <Button name="2" color="lightgrey" />
      <Button name="3" color="lightgrey" />
      <Button name="+" />
    </div>
    <div className="buttonGroup group5">
      <Button name="0" className="button-0" color="lightgrey" isWide />
      <Button name="." color="lightgrey" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
