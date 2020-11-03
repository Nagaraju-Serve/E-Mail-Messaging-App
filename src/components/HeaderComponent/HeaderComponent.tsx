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
  UserOptions: boolean;
  UserSettings: boolean;
}

export default class HeaderComponent extends React.Component<
  IHeaderComponentProps,
  IHeaderComponentState
> {
  constructor(props: IHeaderComponentProps) {
    super(props);
    this.state = {
      UserOptions: false,
      UserSettings: false,
    };
  }
  SettingsHandler = (e: any) => {
    e.preventDefault();
    this.setState({
      UserSettings: true,
    });
  };

  ProfileHandler = (e: any) => {
    e.preventDefault();
    this.setState({
      UserOptions: true,
    });
  };

  render() {
    return (
      <div className="HeaderComponent" data-testid="HeaderComponent">
        <ul className="Header">
          <li className="name rightlist">
            <AppsOutlined className="AppIcon"></AppsOutlined> Outlook
          </li>
          <li className="rightlist inputField">
            <input type="search" value="Search" />
            <SearchIcon className="SearchIcon"></SearchIcon>
          </li>
          <div className="Header-Icons">
            <li className="rightlist">
              <CalendarToday></CalendarToday>
            </li>
            <li className="rightlist">
              <NotificationsNoneRounded></NotificationsNoneRounded>
            </li>
            <li className="rightlist">
              <HelpOutline></HelpOutline>
            </li>
            <li className="rightlist">
              <Settings onClick={this.SettingsHandler}></Settings>
              {this.state.UserSettings === true ? (
                <div>
                  <a>Change Password </a>
                  <a>Account Settings</a>
                </div>
              ) : (
                ""
              )}
            </li>
          </div>
          <li className="account-icon">
            <AccountCircleIcon
              className="Icon"
              onClick={this.ProfileHandler}
            ></AccountCircleIcon>
            {this.state.UserOptions === true ? (
              <div>
                <a>Add Another Account</a>
                <a>Manage Your Google Account</a>
                <a>Logout</a>
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
