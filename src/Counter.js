import React, {useState} from "react";
import "./style.css";

//export default function Counter(props) {
export default function Counter({count}) {
  
  const [test, setTestState] = useState(0);
  
  console.log('Counter component render')
  
  

  return (
    <div>
      <div className='counter'>Current count: {count}</div>
    </div>
  );
}
