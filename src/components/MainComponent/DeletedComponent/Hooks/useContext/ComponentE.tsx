import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "./ContextProvider";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      Comp E{user}
      {channel}
      <ComponentF />
    </div>
  );
}
export default ComponentE;
