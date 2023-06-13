import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState({
    step: 1,
    count: 0,
  });

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + counter.count);

  function handleStepDecrease() {
    if (counter.step <= 1) {
      return;
    }
    setCounter((curCounter) => {
      return { ...curCounter, step: curCounter.step - 1 };
    });
  }
  function handleStepIncrease() {
    setCounter((curCounter) => {
      return { ...curCounter, step: curCounter.step + 1 };
    });
  }
  function handleCountDecrease() {
    setCounter((curCounter) => {
      return { ...curCounter, count: curCounter.count - curCounter.step };
    });
  }
  function handleCountincrease() {
    setCounter((curCounter) => {
      return { ...curCounter, count: curCounter.count + curCounter.step };
    });
  }

  return (
    <>
      <div className="counter">
        <button onClick={handleStepDecrease}>-</button>
        <h3>Step: {counter.step}</h3>
        <button onClick={handleStepIncrease}>+</button>
      </div>
      <div className="counter">
        <button onClick={handleCountDecrease}>-</button>
        <h3>Count: {counter.count}</h3>
        <button onClick={handleCountincrease}>+</button>
      </div>
      <div>
        <h3>
          <span>
            {counter.count === 0
              ? "Today is "
              : counter.count > 0
              ? `${counter.count} days from today is `
              : `${Math.abs(counter.count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </h3>
      </div>
    </>
  );
}
