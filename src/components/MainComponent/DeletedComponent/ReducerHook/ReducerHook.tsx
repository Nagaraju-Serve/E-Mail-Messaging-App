import React, { useReducer } from "react";
import MultipleReducers from "./MultipleReducers/MultipleReducers";
import "./ReducerHook.scss";
import SingleReducerHook from "./SingleReducerHook/SingleReducerHook";

const initialCount = {
  firstCounter: 0,
  secondCounter: 10,
};

function numberReducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialCount;
    default:
      return state;
  }
}

function ReducerHook(props: any) {
  const buttonStyle = { margin: "5px" };
  const [count, dispatch] = useReducer(numberReducer, initialCount);
  return (
    <div className="ReducerHook" data-testid="ReducerHook">
      <div>First Counter : {count.firstCounter}</div>
      <div>Second Counter : {count.secondCounter}</div>
      <button
        style={buttonStyle}
        onClick={() => dispatch({ type: "increment", value: 1 })}
      >
        Increment
      </button>
      <button
        style={buttonStyle}
        onClick={() => dispatch({ type: "decrement", value: 1 })}
      >
        Decrement
      </button>
      <button
        style={buttonStyle}
        onClick={() => dispatch({ type: "increment", value: 5 })}
      >
        Increment
      </button>
      <button
        style={buttonStyle}
        onClick={() => dispatch({ type: "decrement", value: 5 })}
      >
        Decrement
      </button>
      <div>
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: "increment2", value: 10 })}
        >
          Increment Counter 2
        </button>
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: "decrement2", value: 10 })}
        >
          Decrement Counter 2
        </button>
      </div>
      <button style={buttonStyle} onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
      <hr />
      <SingleReducerHook />
      <hr />
      <MultipleReducers />
      <hr />
    </div>
  );
}

export default ReducerHook;
