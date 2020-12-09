import React from "react";
import SidebarComponent from "../SidebarComponent/SidebarComponent";
import SignupComponent from "../SignupComponent/SignupComponent";
import "./LoginComponent.scss";

export interface ILoginComponentProps {}

export interface ILoginComponentState {
  nameValue: string;
  passwordValue: string;
  showForm: boolean;
  showMessage: boolean;
  showSignUp: boolean;
}

export default class LoginComponent extends React.Component<
  ILoginComponentProps,
  ILoginComponentState
> {
  constructor(props: ILoginComponentProps) {
    super(props);
    this.state = {
      nameValue: "Enter Name",
      passwordValue: "Enter Password",
      showForm: true,
      showMessage: true,
      showSignUp: true,
    };
  }

  nameHandler = (e: any) => {
    this.setState({
      nameValue: e.target.value,
    });
    console.log(e.target.name);
  };

  passwordHandler = (e: any) => {
    this.setState({
      passwordValue: e.target.value,
    });
    console.log(e.target.name, e.target.value);
  };

  loginHandler = (e: any) => {
    this.setState({
      showMessage: false,
      showForm: false,
    });
    console.log("Hai", this.state.nameValue, this.state.passwordValue);
  };

  signUpHandler = () => {
    this.setState({
      nameValue: "Enter Name",
      passwordValue: "Enter Password",
      showForm: false,
      showSignUp: false,
    });
  };

  render() {
    return (
      <div data-testid="LoginComponent">
        {this.state.showMessage === false &&
        document.getElementById("name")?.innerHTML !== " " ? (
          <div>
            <SidebarComponent />
          </div>
        ) : (
          <span className="login-span">
            Please Enter Name and Password for Login
          </span>
        )}
        {this.state.showForm === true ? (
          <div className="login-container">
            <h1>Welcome </h1>
            <form onSubmit={this.loginHandler}>
              <input
                type="email"
                id="name"
                data-testid="name"
                className="login-input-fields"
                autoComplete="off"
                onChange={this.nameHandler}
                placeholder={this.state.nameValue}
              />
              <input
                type="password"
                id="password"
                data-testid="password"
                className="login-input-fields"
                onChange={this.passwordHandler}
                placeholder={this.state.passwordValue}
              />
              <button
                type="submit"
                className="login-button"
                data-testid="button"
              >
                Login
              </button>
            </form>
            <button
              type="submit"
              className="login-button"
              onClick={this.signUpHandler}
            >
              SignUp
            </button>
          </div>
        ) : (
          ""
        )}
        {this.state.showSignUp === false ? <SignupComponent /> : ""}
      </div>
    );
  }
}
