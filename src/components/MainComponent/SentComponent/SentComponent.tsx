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
      <div className="SentItemsComponent" data-testid="SentItemsComponent">
        {response.map((data: any, index: number) => {
          return (
            <div className="grid-container" key={index}>
              <div className="circle">
                <span className="circleData">
                  {[
                    data.FirstName[0] + data.LastName[0],
                    console.log("......", data.FirstName[0], data.LastName[0]),
                  ]}
                </span>
              </div>
              <div className="sendername">
                <b>{data.Recipient}</b>
              </div>
              <div className="subject">{data.Subject}</div>
              <div className="attachments">{data.attachments}</div>
              <div className="flag">{data.flag}</div>
              <div className="time">{data.Time}</div>
              <div className="date">{data.Date}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
