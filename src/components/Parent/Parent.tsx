// import React, { useState } from "react";
// import Child from "./Child/Child";

// function Parent(props: any) {
//   const initialState: any = null;
//   const [state, setstate] = useState(initialState);

//   const handleCallback = (childData: any) => {
//     setstate({ ...state, state: childData });
//     console.log("I'm From Parent");
//   };

//   return (
//     <div>
//       <Child parentCallback={handleCallback} />
//       {state}
//     </div>
//   );
// }

// export default Parent;

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
    console.log("I'm From Parent");
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
