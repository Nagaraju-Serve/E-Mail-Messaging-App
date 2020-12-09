import React from "react";
import "./Button_.scss";

function Button_({ lable }: { [key: string]: any }) {
  return (
    <div data-testid="button" className="button-style">
      {lable}
    </div>
  );
}
export default Button_;
