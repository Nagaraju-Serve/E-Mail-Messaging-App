import React, { Component } from "react";
import Child from "./Child";

export interface IFooterComponentState {
  parentName: string;
}
export class FooterComponent extends Component<{}, IFooterComponentState> {
  constructor(props: any) {
    super(props);

    this.state = {
      parentName: "Hello Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  // greetParent() {
  //   alert(`Hello ${this.state.parentName}`);
  // }

  greetParent(childName: any) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
    return `Hello ${this.state.parentName} from ${childName}`;
  }

  dataFunction() {
    return 10;
  }

  render() {
    return (
      <div data-testid="FooterComponent">
        <Child greetHandler={this.greetParent} />
        <div>
          <label htmlFor="checkbox" id="check">
            Check
          </label>
          <input id="checkbox" type="checkbox" />
        </div>
      </div>
    );
  }
}

export default FooterComponent;
