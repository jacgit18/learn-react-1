import React from "react";
import ReactDOM from "react-dom";
import BoardSwitcher from './TicTacToe';
//import Board from './BoardSwitcher';
//import Game from './BoardSwitcher';
import './index.css'

// rename file to jsx baiscally a react javascript file
ReactDOM.render(
  <BoardSwitcher />,
  //<BoardSwitcher numBoards={3} />,

  document.getElementById("root")
); 

