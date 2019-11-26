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
      buttonName: null,
      res: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const content = e.target.textContent;
    console.log(Number(content));
    if (content === 'AC') {
      this.setState({
        total: null,
        next: null,
        operation: null,
        buttonName: null,
        res: null,
      });
    } else if (content === '=') {
      this.setState((prevState) => (calculate(prevState, prevState.buttonName)));
      this.setState((prevState) => ({ res: prevState.total }));
    } else if (isNaN(Number(content))) {
      this.setState({
        operation: content,
        buttonName: content,
      });
    } else if (this.state.operation === null) {
      if (this.state.total === null) {
        this.setState({ total: content });
      } else {
        this.setState((prevState) => ({ total: prevState.total + content }));
      }
    } else if (this.state.next === null) {
      this.setState({ next: content });
    } else {
      this.setState((prevState) => ({ next: prevState.next + content }));
    }
  }

  render() {
    return (
      <div className="app">
        <Display result={this.state.res ? this.state.res
          : (this.state.next ? this.state.next : this.state.total)}
        />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}
export default App;
