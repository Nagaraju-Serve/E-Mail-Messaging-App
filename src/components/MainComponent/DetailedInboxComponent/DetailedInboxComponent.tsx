import axios from "axios";
import React from "react";
import "./DetailedInboxComponent.scss";
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
      <div className="InboxComponent" data-testid="DetailedInboxComponent">
        {response.map((data: any, index: number) => {
          return (
            <div className="detailedinbox-card" key={index + 1}>
              <div className="detailedinbox-data">
                <ul className="detailedinbox-Header">
                  <li>
                    <div className="detailedinbox-circle">
                      <span className="detailedinbox-circleData">
                        {[
                          data.FirstName[0] + data.LastName[0],
                          console.log(data.FirstName[0], data.LastName[0]),
                        ]}
                      </span>
                    </div>
                    <h4 className="detailedinbox-Subject">{data.Subject}</h4>
                    <h5 className="detailedinbox-Name">
                      {data.FirstName + " " + data.LastName}
                    </h5>
                    <h5 className="detailedinbox-Date">{data.Date}</h5>
                    <h5 className="detailedinbox-Time">{data.Time}</h5>
                    <h5
                      className="detailedinbox-Recipient"
                      onClick={this.CCHandler}
                    >
                      To: {data.Recipient}
                    </h5>
                    <h6 className="detailedinbox-CC">
                      {data.CC === "" ? " " : `${"CC:"}` + data.CC}
                    </h6>
                  </li>
                </ul>
                <h6 className="detailedinbox-Text">
                  <span>Hi {data.Recipient} ,</span>
                </h6>
                <span className="detailedinbox-Data">
                  {data.Data.map((el: any, index: number) => {
                    return (
                      <div key={index}>
                        <span className="detailedinbox-initial">{el}</span>
                        <br />
                      </div>
                    );
                  })}
                </span>
                <div className="detailedinbox-footer">
                  <span className="detailedinbox-Salutation">
                    Thanks & Regards,
                  </span>
                  <span className="detailedinbox-SalutationName">
                    {data.FirstName + " " + data.LastName}
                  </span>
                </div>
                <div className="detailedinbox-btn">
                  <button
                    className="detailedinbox-Reply"
                    onClick={this.BtnHandler}
                  >
                    Reply
                  </button>
                  <button
                    className="detailedinbox-ReplyAll"
                    onClick={this.DeleteHandler}
                  >
                    Reply All
                  </button>
                  <button className="detailedinbox-Forward">Forward</button>
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
