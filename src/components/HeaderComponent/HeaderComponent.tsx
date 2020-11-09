import {
  AppsOutlined,
  CalendarToday,
  NotificationsNoneRounded,
  HelpOutline,
  Settings,
} from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./HeaderComponent.scss";

export interface IHeaderComponentProps {}

export interface IHeaderComponentState {
  userOptions: boolean;
  userSettings: boolean;
}

export default class HeaderComponent extends React.Component<
  IHeaderComponentProps,
  IHeaderComponentState
> {
  constructor(props: IHeaderComponentProps) {
    super(props);
    this.state = {
      userOptions: false,
      userSettings: false,
    };
  }

  settingsHandler = (e: any) => {
    e.preventDefault();
    this.setState({
      userSettings: true,
    });
  };

  profileHandler = (e: any) => {
    e.preventDefault();
    this.setState({
      userOptions: true,
    });
  };

  render() {
    return (
      <div className="header-component" data-testid="HeaderComponent">
        <ul className="header">
          <li className="header-name header-rightlist">
            <AppsOutlined className="header-app-icon" /> Outlook
          </li>
          <li className="header-rightlist header-input-field">
            <input type="search" value="Search" />
            <SearchIcon className="header-search-icon" />
          </li>
          <div className="header-icons">
            <li className="header-rightlist">
              <CalendarToday />
            </li>
            <li className="header-rightlist">
              <NotificationsNoneRounded />
            </li>
            <li className="header-rightlist">
              <HelpOutline />
            </li>
            <li className="header-rightlist">
              <Settings onClick={this.settingsHandler}></Settings>
              {this.state.userSettings === true ? (
                <div>
                  <a href="https://www.google.com">Change Password </a>
                  <a href="https://www.google.com">Account Settings</a>
                </div>
              ) : (
                ""
              )}
            </li>
          </div>
          <li className="header-account-icon">
            <AccountCircleIcon
              className="header-icon"
              onClick={this.profileHandler}
            ></AccountCircleIcon>
            {this.state.userOptions === true ? (
              <div>
                <a href="https://www.google.com">Add Another Account</a>
                <a href="https://www.google.com">Manage Your Google Account</a>
                <a href="https://www.google.com">Logout</a>
              </div>
            ) : (
              ""
            )}
          </li>
        </ul>
      </div>
    );
  }
}
