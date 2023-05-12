import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="main">
      <h1>Counter App</h1>
      <div className="counter">
        <h1>{count}</h1>
        <div>
          <button className="btn1" onClick={() => setCount(count + 1)}>
            Increase
          </button>
          <button className="btn2" onClick={decreaseCount}>
            Decrease
          </button>
          <button className="btn3" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
