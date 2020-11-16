import React, { useContext } from "react";
import {
  ComputerContext,
  ComputerContext1,
} from "../ComputerComponent/ComputerComponent";
import LanguageComponent from "../LanguageComponent/LanguageComponent";
import "./SoftwareComponent.scss";

function SoftwareComponent() {
  const computer = useContext(ComputerContext);
  const computer1 = useContext(ComputerContext1);

  return (
    <div className="SoftwareComponent" data-testid="SoftwareComponent">
      React application is running on : {computer.category} <br />
      React application is running on : {computer1.category}
      {<LanguageComponent />}
    </div>
  );
}

export default SoftwareComponent;
