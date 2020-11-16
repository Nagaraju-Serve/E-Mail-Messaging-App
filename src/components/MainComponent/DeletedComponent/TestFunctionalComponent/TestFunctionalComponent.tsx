import React, { useState } from "react";

export interface ITestFunctionalComponentProps {
  name: string;
  text: string;
}
function TestFunctionalComponent(props: ITestFunctionalComponentProps) {
  const [usersList, setUsersList] = useState({});
  const [usersCount, setUsersCount] = useState(0);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data: any = new FormData(event.target);
    const email: any = data.get("email");
    const password = data.get("password");

    let newState = { [email]: password };
    setUsersList(newState);
    setUsersCount(Object.keys(newState).length);
  };

  return (
    <div className="App">
      <div>
        UsersList:{JSON.stringify(usersList)}
        <br />
        UsersCount: {usersCount}
      </div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>Email</label>
        <input type="text" name="email" id="email" />
        <br />
        <br />
        <label>Password</label>
        <input type="text" name="password" id="password" />
        <button type="submit">Submit</button>
      </form>
      {props.name}
      {props.text}
    </div>
  );
}

export default TestFunctionalComponent;
