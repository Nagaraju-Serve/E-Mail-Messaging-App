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
  }

  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default FooterComponent;
