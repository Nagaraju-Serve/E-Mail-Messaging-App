// import React from "react";
// const TestFunctionalComponent = () => {
//   return (
//     <div className="App">
//       <p>1</p>
//       <h1>21</h1>
//     </div>
//   );
// };
// export default TestFunctionalComponent;

// ***********************************
import React, { useEffect, useState } from "react";
const MyComponent = () => {
  const [count, setCount] = useState(0);
  //   const innerFunction = useCallback(() => {
  //     // do something!
  //   });

  useEffect(() => {
    console.log(count);
  });
  return (
    <div>
      <h1>lifecycle hook</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click here
      </button>
    </div>
  );
};
export default MyComponent;

// **********************

//********************* */

// **************************************
// import React from "react";
// function TestFunctionalComponent(props: any) {
//   return (
//     <>
//       <div className="App">
//         <p>1</p>
//         <h1>2</h1>
//         <li>
//           <h2>{props.title}</h2>
//           <div>{props.author}</div>
//         </li>
//       </div>
//     </>
//   );
// }

// export default TestFunctionalComponent;
