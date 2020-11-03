import React from 'react';
import SidebarComponent from '../SidebarComponent/SidebarComponent';
import SignupComponent from '../SignupComponent/SignupComponent';
import './LoginComponent.scss';

export interface ILoginComponentProps {

}

export interface ILoginComponentState {
  NameValue: string;
  PasswordValue: string;
  Showform: boolean;
  ShowMessage: boolean;
  ShowSignUp: boolean;
}

export default class LoginComponent extends React.Component<ILoginComponentProps, ILoginComponentState> {

  constructor(props: ILoginComponentProps) {
    super(props)
    this.state = {
      NameValue: "Enter Name",
      PasswordValue: "Enter Password",
      Showform: true,
      ShowMessage: true,
      ShowSignUp: true
    }
  }

  NameHandler = (e: any) => {
    this.setState({
      NameValue: e.target.value
    });
    console.log(e.target.name);
  }

  PasswordHandler = (e: any) => {
    this.setState({
      PasswordValue: e.target.value
    });
    console.log(e.target.name, e.target.value);
  }

  LoginHandler = (e: any) => {
    this.setState({
      ShowMessage: false,
      Showform: false
    })
    console.log('Hai', this.state.NameValue, this.state.PasswordValue);
  }

  SignUpHandler = () => {
    this.setState({
      NameValue: "Enter Name",
      PasswordValue: "Enter Password",
      Showform: false,
      ShowSignUp: false
    });
  }

  render() {

    return (
      <div data-testid="LoginComponent">
        {
          this.state.ShowMessage === false && document.getElementById("name")?.innerHTML !== ' ' ? <div><SidebarComponent /></div> : <span className="span"> Please Enter Name and Password for Login </span>
        }
        {this.state.Showform === true ?
          <div className="container">
            <h1>Welcome </h1>
            <form onSubmit={this.LoginHandler}>
              <input type="email" id="name" className="NameValue" autoComplete="off" onChange={this.NameHandler} placeholder={this.state.NameValue} />
              <input type="password" id="password" className="PasswordValue" onChange={this.PasswordHandler} placeholder={this.state.PasswordValue} />
              <button type="submit" id="Login">Login</button>
            </form>
            <button type="submit" id="SignUp" onClick={this.SignUpHandler}>SignUp</button>
          </div> : ''
        }
        {
          this.state.ShowSignUp === false ? <SignupComponent /> : ""
        }
      </div>
    )
  }
}
