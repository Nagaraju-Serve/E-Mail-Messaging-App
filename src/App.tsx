import { Button } from "@material-ui/core";
import React from "react";
import "./App.scss";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import Parent from "./components/Parent/Parent";
import Button_ from "./components/Button_/Button_";

function App() {
  return (
    <div className="App">
      <LoginComponent />
      <FooterComponent />
      <Parent />
      <Button_ lable="Click Here" />
    </div>
  );
}

export default App;
