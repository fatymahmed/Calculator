import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      res: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.total === null) {
      this.setState({ total: e.target.textContent });
    } else if (this.state.next === null) {
      this.setState({ next: e.target.textContent });
    } else {
      const buttonName = e.target.textContent;
      this.setState((prevState) => (calculate(prevState, buttonName)));
      this.setState((prevState) => ({ res: prevState.total }));
    }
  }

  render() {
    return (
      <div className="app">
        <Display result={this.state.res ? this.state.res : (this.state.next ? this.state.next : this.state.total)} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}
export default App;
