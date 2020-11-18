import React from "react";
import ComponentC from "./ComponentC";

export const UserContext = React.createContext("");
export const ChannelContext = React.createContext("");

function ContextProvider() {
  return (
    <div>
      <UserContext.Provider value={"zaid"}>
        <ChannelContext.Provider value={"channelval"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
export default ContextProvider;
