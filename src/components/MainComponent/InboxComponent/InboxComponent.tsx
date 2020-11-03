import React from "react";
import axios from "axios";
import "./InboxComponent.scss";
import FlagIcon from "@material-ui/icons/Flag";
import { DeleteOutlined } from "@material-ui/icons";

export interface IInboxComponentProps {}

export interface IInboxComponentState {
  items: any;
  isLoaded: boolean;
}

export default class InboxComponent extends React.Component<
  IInboxComponentProps,
  IInboxComponentState
> {
  constructor(props: IInboxComponentProps) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  get = axios
    .get("http://localhost:3000/inbox")
    .then((res) => res)
    .then((json) => {
      this.setState({
        isLoaded: true,
        items: json.data,
      });
    });

  componentDidMount() {
    axios
      .get("http://localhost:3000/inbox")
      .then((res) => res)
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json.data,
        });
      });
  }

  DeleteHandler = (e: any) => {};

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>not loaded data</div>;
    } else {
      return (
        <div className="maindiv">
          <div>
            <div className="header">
              checkbox
              <input
                type="checkbox"
                id="checked"
                name="checked"
                value="check"
              ></input>
            </div>
            <div className="orderBy">order By:</div>
            <div className="pagination">pagination</div>
          </div>

          {items.map((p: any) => {
            return (
              <div className="rows">
                <div className="grid-container">
                  <div className="check">check</div>
                  <div className="senderName">
                    <b>{p.sendername}</b>
                  </div>
                  <div className="subject">{p.subject}</div>
                  {/* <div className="attachments"> {p.attachments}</div> */}
                  <div className="flag">
                    <FlagIcon
                      color="primary"
                      onClick={() => {
                        alert("clicked");
                      }}
                    />
                  </div>
                  <div className="deleted">
                    <DeleteOutlined
                      onClick={this.DeleteHandler}
                    ></DeleteOutlined>
                  </div>
                  <div className="time">{p.time}</div>
                  <div className="date">{p.date}</div>
                </div>
              </div>
            );
          })}
          {/* <IconButton
            color="primary"
            onClick={() => {
              alert("clicked");
            }}
          >
            <FlagIcon />
          </IconButton>
          <AttachFileIcon color="primary" />

          <input
            type="checkbox"
            id="checked"
            name="checked"
            value="check"
          ></input> */}
        </div>
      );
    }
  }
}
