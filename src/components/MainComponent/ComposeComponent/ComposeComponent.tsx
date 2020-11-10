import axios from "axios";
import React from "react";
import "./ComposeComponent.scss";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MoodIcon from "@material-ui/icons/Mood";

// export interface IComposeComponentProps {}

// export interface IComposeComponentState {
//   Recipient: string;
//   CC: string;
//   Subject: string;
//   Data: string;
//   FirstName: string;
//   LastName: string;
// }

export default class ComposeComponent extends React.Component {
  state = {
    Recipient: "",
    CC: "",
    Subject: "",
    Data: [],
    attachments: "",
    time: "",
    Date: "",
    FirstName: "Nagaraju",
    LastName: "Odipelly",
  };

  inputChangeHandler = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event: any) => {
    event.preventDefault();

    const inbox = {
      Recipient: this.state.Recipient,
      Date: "05-02-1996",
      Time: "01:15",
      CC: this.state.CC,
      attachments: "false",
      Subject: this.state.Subject,
      Data: this.state.Data,
      FirstName: "Nagaraju",
      LastName: "Odipelly",
    };

    axios.post("http://localhost:3002/Data", inbox).then((res) => {
      console.log("+++++", res);
      console.log(res.data);
    });
  };

  render() {
    const { Recipient, CC, Subject, Data } = this.state;
    const rows = 10;
    const cols = 65;

    return (
      <div className="compose-component" data-testid="ComposeComponent">
        <form className="compose-form" onSubmit={this.submitHandler}>
          <label className="compose-label">
            <span className="compose-label-text">To: </span>
            <input
              type="text"
              id="Recipient"
              className="compose-input-fields"
              name="Recipient"
              value={Recipient}
              onChange={this.inputChangeHandler}
            />
          </label>
          <label className="compose-label">
            <span className="compose-label-text">CC: </span>
            <input
              type="text"
              id="CC"
              className="compose-input-fields"
              name="CC"
              value={CC}
              onChange={this.inputChangeHandler}
            />
          </label>
          <label className="compose-label">
            <span className="compose-label-text">Subject: </span>
            <input
              type="text"
              id="Subject"
              className="compose-input-fields"
              name="Subject"
              value={Subject}
              onChange={this.inputChangeHandler}
            />
          </label>
          <textarea
            rows={rows}
            cols={cols}
            name="Data"
            className="compose-textarea"
            value={Data}
            onChange={this.inputChangeHandler}
          ></textarea>
          <div className="compose-leftlist">
            <button className="compose-button">Send</button>
            <div className="compose-icons">
              <AttachFileIcon
                titleAccess="AttachFiles"
                className="compose-icons"
              ></AttachFileIcon>
              <MoodIcon
                titleAccess="Add Expressions"
                className="compose-icons"
              ></MoodIcon>
              <MoreVertIcon
                titleAccess="MoreOptions"
                className="compose-icons"
              ></MoreVertIcon>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
