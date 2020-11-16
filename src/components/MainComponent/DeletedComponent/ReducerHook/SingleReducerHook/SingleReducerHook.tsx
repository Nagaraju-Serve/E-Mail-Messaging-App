import React, { useReducer } from "react";
import "./SingleReducerHook.scss";

const initialCount = 0;

function numberReducer(state: any, action: any) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialCount;
    default:
      return state;
  }
}

function SingleReducerHook() {
  const buttonStyle = { margin: "5px" };

  const [count, dispatch] = useReducer(numberReducer, initialCount);
  return (
    <div className="ReducerHook" data-testid="ReducerHook">
      Count : {count}
      <br />
      <button style={buttonStyle} onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button style={buttonStyle} onClick={() => dispatch("decrement")}>
        Decrement
      </button>
      <button style={buttonStyle} onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
}
export default SingleReducerHook;
