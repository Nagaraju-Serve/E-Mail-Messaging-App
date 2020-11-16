import React, { useState } from "react";

function StateHook() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default StateHook;
