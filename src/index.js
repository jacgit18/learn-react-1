import React from "react";
import ReactDOM from "react-dom";
//import BoardSwitcher from './BoardSwitcher';
import './index.css'


// event handling 
// eslint-disable-next-line 
class App0 extends React.Component {
  render() {
    return (
      <div>
        <p>The button has been clicked 0 times</p>
        <button onClick={ (e) => alert('The button was pressed!') }>{ this.props.btnText }!!!</button>
      </div>
    );
  }
}


// logs event in browser console specifically mouse event 
// in this case
// eslint-disable-next-line 
class App1 extends React.Component {
  // older way of setting state were constructor is overriden
  // eslint-disable-next-line 
  constructor(props){
    super (props);
    this.state = {
      clicks: 0,
    }
  }
  // counter
  state = {
    clicks: 0,
  }

  render() {
    return (
      <div>
        <p>The button has been clicked {this.state.clicks} times</p>
        <button onClick={ (event) => console.log(event) }>{ this.props.btnText }!!!</button>
      </div>
    );
  }
}

class App2 extends React.Component {
 
  // counter that track click states
  // funtions can also be used inside
  // the function is stored in counter property
  state = {
    clicks: 0,
    counter: () => console.log("test"),
  }
  // handele in front is good naming convetion
  // setstate is a function provided by react
  // and the whole thing is a object
  // huge part of react is state handling
  // since were using virtual dom and not editing dom
  handleClick(e) {
    this.state.counter();
    this.setState({
      clicks: this.state.clicks + 1,
    });
  }

  render() {
    return (
      <div>
        <p>The button has been clicked {this.state.clicks} times</p>
        <button onClick={ (e) => this.handleClick(e) }>{ this.props.btnText }!!!</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App2 btnText="Press this button" />,
  document.getElementById("root")
);

// ReactDOM.render(
//   <BoardSwitcher numBoards={3} />,
//   document.getElementById("root")
// ); 

