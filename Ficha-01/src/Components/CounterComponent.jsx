import { useState } from "react";

function CounterComponent() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="container">
      <h1 className="text-center">{count}</h1>
      <div className="d-flex justify-content-center">
        <button className="btn btn-danger" onClick={increase}>
          +
        </button>
        <button className="btn btn-warning" onClick={decrease}>
          -
        </button>
      </div>
    </div>
  );
}

export default CounterComponent;
