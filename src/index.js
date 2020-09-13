import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <>
  {/* 
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
  
  */}
    <h1>Hello World!</h1>
    <h1>Hi Again</h1>

  </>,
  document.getElementById("root")
);
