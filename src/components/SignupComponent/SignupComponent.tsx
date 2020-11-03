import React from 'react';
import './SignupComponent.scss';

export interface ISignUpComponentProps {

}

export interface ISignUpComponentState {
  NameValue: string;
  PasswordValue: string;
  ConfirmPasswordValue: string;
  EmailValue: string;
  Showform: boolean;
  ShowMessage: boolean
}

export default class SignupComponent extends React.Component<ISignUpComponentProps, ISignUpComponentState> {

  constructor(props: ISignUpComponentProps) {
    super(props)
    this.state = {
      NameValue: "Enter Name",
      PasswordValue: "Enter Password",
      ConfirmPasswordValue: "Confirm Password",
      EmailValue: "abc@example.com",
      Showform: true,
      ShowMessage: true
    }
  }

  NameHandler = (e: any) => {
    this.setState({
      NameValue: e.target.value
    });
  }

  PasswordHandler = (e: any) => {
    this.setState({
      PasswordValue: e.target.value
    });
  }

  EmailHandler = (e: any) => {
    this.setState({
      EmailValue: e.target.value
    });
  }

  ConfirmPasswordHandler = (e: any) => {
    this.setState({
      ConfirmPasswordValue: e.target.value
    });
  }

  SignUpHandler = () => {
    this.setState({
      NameValue: "Enter Name",
      PasswordValue: "Enter Password",
      Showform: false,
      ShowMessage: false
    });
  }

  render() {
    const SignUpMessage = <span className="Span">Your SignUp was Successfully</span>

    return (
      <div className="SignupComponent" data-testid="SignupComponent">
        <div className="container">
          <form className="form" onSubmit={this.SignUpHandler}>
            <input type="text" id="name" onChange={this.NameHandler} placeholder={this.state.NameValue} required />
            <input type="email" id="email" onChange={this.EmailHandler} placeholder={this.state.EmailValue} required />
            <input type="password" id="password" onChange={this.PasswordHandler} placeholder={this.state.PasswordValue} required />
            <input type="password" id="confirmPassword" onChange={this.ConfirmPasswordHandler} placeholder={this.state.ConfirmPasswordValue} required />
            <button type="submit" id="SignUp">SignUp</button>
          </form>
          <a className="ancestor" href="http://localhost:3001">Already Have an account ?</a>
          {
            this.state.ShowMessage === false ? SignUpMessage : ''
          }
        </div>
      </div>
    )
  }
}
