import React from "react";
import Child from "./Child/Child";

class Parent extends React.Component<{}, { data: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: null,
    };
  }

  handleCallback = (childData: any) => {
    this.setState({ data: childData });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Child parentCallback={this.handleCallback} />
        {data}
      </div>
    );
  }
}

export default Parent;
