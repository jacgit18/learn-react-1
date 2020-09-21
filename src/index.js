import React from "react";
import ReactDOM from "react-dom";
//import BoardSwitcher from './BoardSwitcher';
import './index.css'

class App extends React.Component {
 
  render() {
    return (
      <div>
        <p>The button has been clicked 0 times</p>
        <button>Click me!!!</button>

      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

// ReactDOM.render(
//   <BoardSwitcher numBoards={3} />,
//   document.getElementById("root")
// );

