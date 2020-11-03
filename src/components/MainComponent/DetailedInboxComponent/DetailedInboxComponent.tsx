import axios from "axios";
import React from "react";
import "./InboxComponent.scss";
//import InboxData from './InboxData.json';

export interface IDetailedInboxComponentProps {}
export interface IDetailedInboxComponentState {
  response: any;
  isShowCC: boolean;
  array: any;
  error: string;
  id: number;
}

export default class DetailedInboxComponent extends React.Component<
  IDetailedInboxComponentProps,
  IDetailedInboxComponentState
> {
  constructor(props: IDetailedInboxComponentProps) {
    super(props);
    this.state = {
      response: [],
      isShowCC: false,
      error: "",
      id: 1,
      array: {
        Subject: "About your Availability",
        FirstName: "Mohammad",
        LastName: "Abdul Rahaman",
        Date: "Thu 22-10-2020",
        Time: "2:30",
        Recipient: "Nagaraju Odipelly",
        Data: ["Kindly let me know once you are available."],
        CC: "Anil Kondepudi,Anil Kasarla, Amuthan Meghanath",
      },
    };
  }

  CCHandler = () => {
    this.setState({
      isShowCC: true,
    });
  };

  BtnHandler = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/InboxData", this.state.array)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  DeleteHandler = (e: any) => {
    e.preventDefault();
    axios
      .delete("http://localhost:3000/InboxData")
      .then((response: any) => {
        console.warn("hcj ------", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/InboxData")
      .then((response: any) => {
        console.log(response.data);
        this.setState({
          response: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: "Error Retrieving Data",
        });
      });
  }

  render() {
    const { response, error } = this.state;

    return (
      <div className="InboxComponent" data-testid="InboxComponent">
        {response.map((data: any, index: number) => {
          return (
            <div className="card" key={index + 1}>
              <div className="data">
                <ul className="Header">
                  <li>
                    <div className="circle">
                      <span className="circleData">
                        {[
                          data.FirstName[0] + data.LastName[0],
                          console.log(data.FirstName[0], data.LastName[0]),
                        ]}
                      </span>
                    </div>
                    <h4 className="Subject">{data.Subject}</h4>
                    <h5 className="Name">
                      {data.FirstName + " " + data.LastName}
                    </h5>
                    <h5 className="Date">{data.Date}</h5>
                    <h5 className="Time">{data.Time}</h5>
                    <h5 className="Recipient" onClick={this.CCHandler}>
                      To: {data.Recipient}
                    </h5>
                    <h6 className="CC">
                      {data.CC === "" ? " " : `${"CC:"}` + data.CC}
                    </h6>
                  </li>
                </ul>
                <h6 className="Text">
                  <span>Hi {data.Recipient} ,</span>
                </h6>
                <span className="Data">
                  {data.Data.map((el: any, index: number) => {
                    return (
                      <div key={index}>
                        <span className="initial">{el}</span>
                        <br />
                      </div>
                    );
                  })}
                </span>
                <div className="footer">
                  <span className="Salutation">Thanks & Regards,</span>
                  <span className="SalutationName">
                    {data.FirstName + " " + data.LastName}
                  </span>
                </div>
                <div className="btn">
                  <button className="Reply" onClick={this.BtnHandler}>
                    Reply
                  </button>
                  <button className="ReplyAll" onClick={this.DeleteHandler}>
                    Reply All
                  </button>
                  <button className="Forward">Forward</button>
                </div>
              </div>
            </div>
          );
        })}
        {error ? <div>{error}</div> : null}
      </div>
    );
  }
}
