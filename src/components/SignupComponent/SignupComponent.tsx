import React from "react";
import "./SignupComponent.scss";

export interface ISignUpComponentProps {}

export interface ISignUpComponentState {
  nameValue: string;
  passwordValue: string;
  confirmPasswordValue: string;
  emailValue: string;
  showForm: boolean;
  showMessage: boolean;
}

export default class SignupComponent extends React.Component<
  ISignUpComponentProps,
  ISignUpComponentState
> {
  constructor(props: ISignUpComponentProps) {
    super(props);
    this.state = {
      nameValue: "Enter Name",
      passwordValue: "Enter Password",
      confirmPasswordValue: "Confirm Password",
      emailValue: "abc@example.com",
      showForm: true,
      showMessage: true,
    };
  }

  nameHandler = (e: any) => {
    this.setState({
      nameValue: e.target.value,
    });
  };

  passwordHandler = (e: any) => {
    this.setState({
      passwordValue: e.target.value,
    });
  };

  emailHandler = (e: any) => {
    this.setState({
      emailValue: e.target.value,
    });
  };

  confirmPasswordHandler = (e: any) => {
    this.setState({
      confirmPasswordValue: e.target.value,
    });
  };

  signUpHandler = () => {
    this.setState({
      nameValue: "Enter Name",
      passwordValue: "Enter Password",
      showForm: false,
      showMessage: false,
    });
  };

  render() {
    const signUpMessage = (
      <span className="signup-span">Your SignUp was Successfully</span>
    );

    return (
      <div className="signup-component" data-testid="SignupComponent">
        <div className="signup-container">
          <form className="signup-form" onSubmit={this.signUpHandler}>
            <input
              type="text"
              id="name"
              className="signup-input-fields"
              onChange={this.nameHandler}
              placeholder={this.state.nameValue}
              required
            />
            <input
              type="email"
              id="email"
              className="signup-input-fields"
              onChange={this.emailHandler}
              placeholder={this.state.emailValue}
              required
            />
            <input
              type="password"
              className="signup-input-fields"
              id="password"
              onChange={this.passwordHandler}
              placeholder={this.state.passwordValue}
              required
            />
            <input
              type="password"
              className="signup-input-fields"
              id="confirmPassword"
              onChange={this.confirmPasswordHandler}
              placeholder={this.state.confirmPasswordValue}
              required
            />
            <button type="submit" className="signup-button">
              SignUp
            </button>
          </form>
          <a className="signup-ancestor" href="http://localhost:3000">
            Already Have an account ?
          </a>
          {this.state.showMessage === false ? signUpMessage : ""}
        </div>
      </div>
    );
  }
}
