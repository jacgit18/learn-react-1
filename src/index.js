import React from "react";
import ReactDOM from "react-dom";
//import BoardSwitcher from './BoardSwitcher';
import './index.css'

/* {} brackets for comments when inside reactDom.render
  need to wrap elements can be div or enpty brackets 
  also read from bottom up for react code dom is document 
  object model basically the hmtl tag higharcy react has 
  virtual dom react itmanipulates the dom as user interacts
  with website. react was created to fix the issue with 
  auto scroll when things where loaded onto the web pg 
  causing it to be written to the dom even when content
  wasnt on screen yet which affected performance that is 
  why the virtual dom was crated to handle the rendering 
  of content not on pg that is written to dom. dont use 
  jquery for dynamic websites also it doesnt have virtual
   dom but is still usefull outside of those dynamic sites 
   in fact jquery was created to access the dom initially 
   to strandardize things. react can be reused to build 
   desktop apps and mobile like slack desktop app.
  
  */ 
// props is amutable meaning it cant be changed once it
// is been declared in one part of code
//  function Student(props) {
//  props.name= "kiing"; you will get error
//   return <div>- {props.name}, attends {props.college} </div>;
// }

// or do deconstruction use className for css
// this is still all javascript(JSX)
function Student({name, college}) {
  
  return <div className="red-text">- {name}, attends {college} </div>;
}
//another component call

// this is a function call
// Student({});
// not function call, declaring element to component
// <Student name="jl"/>
function Welcome() {
  return (
    <div>
      <h1>Welcome CTP Class</h1>
      <p>Who is in class?</p>
      <Student name="John" college="NYU" /> 
      <Student name="Jack" college="NYCT" /> 
      <Student name="Jeff" college="BC" /> 

    </div>
  );
}



// class App extends React.Component {
 
//   render() {
//     return (
//       <div>
//         <p>The button has been clicked 0 times</p>
       
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <BoardSwitcher numBoards={3} />,
//   document.getElementById("root")
// );

/* 
  Welcome is a componet being called in render
  it is thr function above must be capital and 
  react is top bottom
  props can be passed here
    <Welcome secret="foo" />,

  */
 ReactDOM.render(
  
  <Welcome />,
  document.getElementById("root")
);