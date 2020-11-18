import React from "react";
import SoftwareComponent from "../SoftwareComponent/SoftwareComponent";
import "./ComputerComponent.scss";

export const ComputerContext = React.createContext({ category: "Ubuntu" });
export const ComputerContext1 = React.createContext({ category: "Ubuntu" });

function ComputerComponent(props: any) {
  return (
    <div className="ComputerComponent" data-testid="ComputerComponent">
      Main category : Computer
      <ComputerContext1.Provider value={{ category: "Apple ios" }}>
        <ComputerContext.Provider value={{ category: "windows" }}>
          {<SoftwareComponent />}
        </ComputerContext.Provider>
      </ComputerContext1.Provider>
    </div>
  );
}

export default ComputerComponent;
