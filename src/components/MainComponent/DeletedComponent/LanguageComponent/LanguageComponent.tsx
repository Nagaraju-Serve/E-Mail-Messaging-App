import React, { useEffect, useState } from "react";
import "./LanguageComponent.scss";

function LanguageComponent() {
  const [inc, setInc] = useState(0);
  useEffect(() => {
    const hostName = window.location.hostname;
    console.log("host name : ", hostName);
  }, []);

  useEffect(() => {
    let timer: any;
    const inc1 = inc + 1;
    if (inc1 <= 20) {
      timer = setTimeout(() => setInc(inc1), 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="LanguageComponent" data-testid="LanguageComponent">
      LanguageComponent Component
      <br /> Timer: {inc}
    </div>
  );
}

export default LanguageComponent;
