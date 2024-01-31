import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  const incCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2 style={{fontSize:35}}>Count = {count}</h2>
      <button style={{marginRight:10,backgroundColor:"yellow", color:"black", padding:15}} onClick={incCount}>Increase Count </button>
      <button style={{backgroundColor:"blue", color:"white", padding:15}} onClick={decCount}>Decrease Count </button>
    </div>
  );
}

export default Counter;
