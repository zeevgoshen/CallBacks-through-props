import React, {useState} from "react";
import "./style.css";

//export default function Increase(props) {
// export default function Increase({count, increaseCount}) {
export default function Increase(props) {
  

  return (
    <div>
       
       {/* <button onClick={() => increaseCount(count + 1)}>+</button> */}
       <button onClick={() => props.increaseCount(props.count + 1)}>+</button>
    </div>
  );
}
