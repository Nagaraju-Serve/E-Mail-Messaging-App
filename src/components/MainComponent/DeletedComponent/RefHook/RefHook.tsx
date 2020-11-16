import React, { useEffect, useRef } from "react";

function RefHook() {
  const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current && inputRef.current}>
        Focus the text input
      </button>
    </div>
  );
}

export default RefHook;
