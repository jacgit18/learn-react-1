import React from "react";
import ReactDOM from "react-dom";
import BoardSwitcher from './BoardSwitcher';
import './index.css'

// rename file to jsx baiscally a react javascript file
ReactDOM.render(
  <BoardSwitcher numBoards={3} />,
  document.getElementById("root")
); 

