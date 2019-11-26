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
      display: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  clearAll() {
    this.setState({
      total: null,
      next: null,
      operation: null,
      buttonName: null,
      display: null,
    });
  }

  clearAfterCalculation() {
    this.setState({
      next: null,
      operation: null,
      buttonName: null,
    });
  }

  handleClick(e) {
    const content = e.target.textContent;
    if (content === 'AC') {
      this.clearAll();
    } else if (content === '=') {
      this.setState(prevState => (calculate(prevState, prevState.buttonName)));
      this.setState(prevState => ({ display: prevState.total }));
      this.clearAfterCalculation();
    } else if (isNaN(Number(content))) {
      this.setState({
        operation: content,
        buttonName: content,
      });
      if (content === '+/-') {
        this.setState(prevState => (calculate(prevState, prevState.buttonName)));
        this.setState(prevState => ({ display: prevState.total }));
      } else {
        this.setState(prevState => ({ display: prevState.display + content }));
      }
    } else if (this.state.operation === null) {
      if (this.state.total === null) {
        this.setState({ total: content });
      } else {
        this.setState(prevState => ({ total: prevState.total + content }));
      }
      this.setState(prevState => ({ display: prevState.total }));
    } else if (this.state.next === null) {
      this.setState({ next: content });
      this.setState(prevState => ({ display: prevState.display + content }));
    } else {
      this.setState(prevState => ({ next: prevState.next + content }));
      this.setState(prevState => ({ display: prevState.display + content }));
    }
  }

  render() {
    return (
      <div className="app">
        <Display result={this.state.display ? this.state.display : '0'} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}
export default App;
