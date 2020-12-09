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
    .get("http://localhost:3001/inbox")
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

  deleteHandler = (e: any) => {};

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div data-testid="InboxComponent">not loaded data</div>;
    } else {
      return (
        <div className="inbox-main" data-testid="InboxComponent">
          <div className="inbox-header">
            <div className="inbox-checkbox">
              <input
                type="checkbox"
                id="checked"
                name="checked"
                value="check"
              />
              checkbox
            </div>
            <div className="inbox-order">order By:</div>
            <div className="inbox-pagination">pagination</div>
          </div>

          {items.map((p: any) => {
            return (
              <div className="inbox-rows">
                <div className="inbox-grid-container">
                  <div className="inbox-check">
                    <input
                      type="checkbox"
                      id="checked"
                      name="checked"
                      value="check"
                    />
                    check
                  </div>
                  <div className="inbox-sendername">
                    <b>{p.sendername}</b>
                  </div>
                  <div className="inbox-subject">{p.subject}</div>
                  {/* <div className="inbox-attachments"> {p.attachments}</div> */}
                  <div className="inbox-flag">
                    <FlagIcon
                      color="primary"
                      onClick={() => {
                        alert("clicked");
                      }}
                    />
                  </div>
                  <div className="inbox-deleted">
                    <DeleteOutlined
                      onClick={this.deleteHandler}
                    ></DeleteOutlined>
                  </div>
                  <div className="inbox-time">{p.time}</div>
                  <div className="inbox-date">{p.date}</div>
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
