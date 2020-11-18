import React, { useRef } from "react";

function RefHook() {
  const inputRef: any = useRef(null);

  const onFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={onFocus}>Focus the text input</button>
    </div>
  );
}

export default RefHook;
