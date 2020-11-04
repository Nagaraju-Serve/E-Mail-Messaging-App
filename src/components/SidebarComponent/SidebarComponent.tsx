import React from "react";
import "./SidebarComponent.scss";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import InboxRoundedIcon from "@material-ui/icons/InboxRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import DraftsIcon from "@material-ui/icons/Drafts";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ComposeComponent from "../MainComponent/ComposeComponent/ComposeComponent";
import DeletedComponent from "../MainComponent/DeletedComponent/DeletedComponent";
import InboxComponent from "../MainComponent/InboxComponent/InboxComponent";
import SentComponent from "../MainComponent/SentComponent/SentComponent";
import DraftComponent from "../MainComponent/DraftComponent/DraftComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

export interface ISidebarComponentProps {}
export interface ISidebarComponentState {}

export default class SidebarComponent extends React.Component<
  ISidebarComponentProps,
  ISidebarComponentState
> {
  constructor(props: ISidebarComponentProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <HeaderComponent />
        <BrowserRouter>
          <ul className="listItems">
            <li className="li">
              <MenuRoundedIcon className="MenuRoundedIcon Sidebar-Icons"></MenuRoundedIcon>
              <Link to="/Compose" className="listItem">
                Compose
              </Link>
            </li>
            <li className="li">
              <InboxRoundedIcon className="InboxRoundedIcon Sidebar-Icons"></InboxRoundedIcon>
              <Link to="/Inbox" className="listItem">
                Inbox
              </Link>
            </li>
            <li className="li">
              <SendRoundedIcon className="SendRoundedIcon Sidebar-Icons"></SendRoundedIcon>
              <Link to="/Sent" className="listItem">
                Sent
              </Link>
            </li>
            <li className="li">
              <DraftsIcon className="DraftsIcon Sidebar-Icons"></DraftsIcon>
              <Link to="/Drafts" className="listItem">
                Drafts
              </Link>
            </li>
            <li className="li">
              <DeleteOutlineIcon className="DeleteOutlineIcon Sidebar-Icons"></DeleteOutlineIcon>
              <Link to="/Deleted" className="listItem">
                Deleted
              </Link>
            </li>
          </ul>
          <Switch>
            <div className="Component">
              <Route exact path="/Inbox" component={InboxComponent}></Route>
              <Route exact path="/Compose" component={ComposeComponent}></Route>
              <Route exact path="/Sent" component={SentComponent}></Route>
              <Route exact path="/Drafts" component={DraftComponent}></Route>
              <Route exact path="/Deleted" component={DeletedComponent}></Route>
            </div>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
