import React from "react";
export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cell" onClick={this.props.onCellClick}>
        {this.props.value}
      </div>
    );
  }
}
