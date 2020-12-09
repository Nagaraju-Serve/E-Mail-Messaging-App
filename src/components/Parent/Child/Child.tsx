// import React from "react";

// function Child(props: any) {
//   const onTrigger = (event: any) => {
//     props.parentCallback("Data from child");
//     console.log("I'm From Child");
//   };
//   return (
//     <div>
//       <form onSubmit={onTrigger}>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

// export default Child;

import React from "react";

class Child extends React.Component<{ parentCallback: any }, {}> {
  onTrigger = (event: any) => {
    this.props.parentCallback("Data from child");
    event.preventDefault();
    console.log("I'm From Child");
  };

  render() {
    return (
      <div data-testid="Child">
        <form onSubmit={this.onTrigger}>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Child;
