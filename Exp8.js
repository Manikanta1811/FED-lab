import React, { Component } from "react";
export default class Exp8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conInfo: [
        { name: "Italy", capital: "Rome" },
        { name: "Japan", capital: "Tokyo" },
        { name: "China", capital: "Beijing" },
        { name: "UK", capital: "London" },
      ],
    };
  }

  render() {
    const { conInfo } = this.state;
    return (
      <div>
        <table border="1">
          <tr>
            <th>COUNTRY</th>
            <th>CAPITAL</th>
          </tr>
          {conInfo.length > 0 &&
            conInfo.map((c) => {
              return (
                <tr key={c.name}>
                  <td>{c.name}</td>
                  <td>{c.capital}</td>
                </tr>
              );
            })}
        </table>
      </div>
    );
  }
}