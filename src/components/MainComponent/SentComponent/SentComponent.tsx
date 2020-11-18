import React from "react";
import "./SentComponent.scss";
import axios from "axios";

export interface ISentItemsComponentState {
  response: any;
}

export interface ISentItemsComponentProps {}

export default class SentItemsComponent extends React.Component<
  ISentItemsComponentProps,
  ISentItemsComponentState
> {
  constructor(props: ISentItemsComponentProps) {
    super(props);
    this.state = {
      response: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3002/Data")
      .then((response: any) => {
        console.log(response.data);
        this.setState({
          response: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { response } = this.state;

    return (
      <div className="Sent-ItemsComponent" data-testid="SentItemsComponent">
        {response.map((data: any, index: number) => {
          return (
            <div className="sent-gridcontainer" key={index}>
              <div className="sent-circle">
                <span className="sent-circleData">
                  {[
                    data.FirstName[0] + data.LastName[0],
                    console.log("......", data.FirstName[0], data.LastName[0]),
                  ]}
                </span>
              </div>
              <div className="sent-sendername">
                <b>{data.Recipient}</b>
              </div>
              <div className="sent-subject">{data.Subject}</div>
              <div className="sent-attachments">{data.attachments}</div>
              <div className="sent-flag">{data.flag}</div>
              <div className="sent-time">{data.Time}</div>
              <div className="sent-date">{data.Date}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
