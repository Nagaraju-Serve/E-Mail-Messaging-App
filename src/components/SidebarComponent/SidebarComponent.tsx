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
      <div className="sidebar-main" data-testid="SidebarComponent">
        <HeaderComponent />
        <BrowserRouter>
          <ul className="sidebar-listItems">
            <li className="sidebar-listItems-li">
              <MenuRoundedIcon className="MenuRoundedIcon sidebar-icons"></MenuRoundedIcon>
              <Link to="/Compose" className="sidebar-listItem">
                Compose
              </Link>
            </li>
            <li className="sidebar-listItems-li">
              <InboxRoundedIcon className="InboxRoundedIcon sidebar-icons"></InboxRoundedIcon>
              <Link to="/Inbox" className="sidebar-listItem">
                Inbox
              </Link>
            </li>
            <li className="sidebar-listItems-li">
              <SendRoundedIcon className="SendRoundedIcon sidebar-icons"></SendRoundedIcon>
              <Link to="/Sent" className="sidebar-listItem">
                Sent
              </Link>
            </li>
            <li className="sidebar-listItems-li">
              <DraftsIcon className="DraftsIcon sidebar-icons"></DraftsIcon>
              <Link to="/Drafts" className="sidebar-listItem">
                Drafts
              </Link>
            </li>
            <li className="sidebar-listItems-li">
              <DeleteOutlineIcon className="DeleteOutlineIcon sidebar-icons"></DeleteOutlineIcon>
              <Link to="/Deleted" className="sidebar-listItem">
                Deleted
              </Link>
            </li>
          </ul>
          <Switch>
            <div className="sidebar-component">
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
