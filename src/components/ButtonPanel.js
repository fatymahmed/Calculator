import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css';

class ButtonPanel extends React.PureComponent {
  render() {
    return (
      <div className="buttonPanel">
        <div className="buttonGroup group1">
          <Button
            onClick={name => this.props.onClick(name)}
            name="AC"
            color="lightgrey"
          />
          <Button
            onClick={name => this.props.onClick(name)}
            name="+/-"
            color="lightgrey"
          />
          <Button
            onClick={name => this.props.onClick(name)}
            name="%"
            color="lightgrey"
          />
          <Button
            onClick={name => this.props.onClick(name)}
            name="/"
          />
        </div>
        <div className="buttonGroup group2">
          <Button
            onClick={name => this.props.onClick(name)}
            name="7"
            color="lightgrey"
          />
          <Button
            onClick={name => this.props.onClick(name)}
            name="8"
            color="lightgrey"
          />
          <Button
            onClick={name => this.props.onClick(name)}
            name="9"
            color="lightgrey"
          />
          <Button
            onClick={name => this.props.onClick(name)}
            name="x"
          />
        </div>
        <div className="buttonGroup group3">
          <Button
            onClick={name => this.props.onClick(name)}
            name="4"
            color="lightgrey"
          />
          <Button
            onClick={name => this.props.onClick(name)}
            name="5"
            color="lightgrey"
          />
          <Button
            onClick={name => this.props.onClick(name)}
            name="6"
            color="lightgrey"
          />
          <Button
            onClick={name => this.props.onClick(name)}
            name="-"
          />
        </div>
        <div className="buttonGroup group4">
          <Button
            onClick={name => this.props.onClick(name)}
            name="1"
            color="lightgrey"
          />
          <Button
            onClick={name => this.props.onClick(name)}
            name="2"
            color="lightgrey"
          />
          <Button
            onClick={name => this.props.onClick(name)}
            name="3"
            color="lightgrey"
          />
          <Button
            onClick={(name) => this.props.onClick(name)}
            name="+"
          />
        </div>
        <div className="buttonGroup group5">
          <Button
            onClick={(name) => this.props.onClick(name)}
            name="0"
            className="button-0"
            color="lightgrey"
            isWide
          />
          <Button
            onClick={(name) => this.props.onClick(name)}
            name="."
            color="lightgrey"
          />
          <Button
            onClick={(name) => this.props.onClick(name)}
            name="="
          />
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ButtonPanel;
