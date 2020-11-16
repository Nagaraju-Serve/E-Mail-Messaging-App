import React from "react";
import "./App.scss";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import Parent from "./components/Parent/Parent";

function App() {
  return (
    <div className="App">
      <LoginComponent />
      <FooterComponent />
      <Parent />
    </div>
  );
}

export default App;
