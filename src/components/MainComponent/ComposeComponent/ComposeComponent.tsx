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

  InputChangeHandler = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  SubmitHandler = (event: any) => {
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
      <div className="ComposeComponent" data-testid="ComposeComponent">
        <form className="Form" onSubmit={this.SubmitHandler}>
          <label className="Label">
            <span className="LabelText">To: </span>
            <input
              type="text"
              id="Recipient"
              name="Recipient"
              value={Recipient}
              onChange={this.InputChangeHandler}
            />
          </label>
          <label className="Label">
            <span className="LabelText">CC: </span>
            <input
              type="text"
              id="CC"
              name="CC"
              value={CC}
              onChange={this.InputChangeHandler}
            />
          </label>
          <label className="Label">
            <span className="LabelText">Subject: </span>
            <input
              type="text"
              id="Subject"
              name="Subject"
              value={Subject}
              onChange={this.InputChangeHandler}
            />
          </label>
          <textarea
            rows={rows}
            cols={cols}
            name="Data"
            value={Data}
            onChange={this.InputChangeHandler}
          ></textarea>
          <div className="align">
            <button className="Send">Send</button>
            <div className="Icons">
              <AttachFileIcon
                titleAccess="AttachFiles"
                className="Icons"
              ></AttachFileIcon>
              <MoodIcon
                titleAccess="Add Expressions"
                className="Icons"
              ></MoodIcon>
              <MoreVertIcon
                titleAccess="MoreOptions"
                className="Icons"
              ></MoreVertIcon>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
