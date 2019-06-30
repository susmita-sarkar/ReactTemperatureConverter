import React, { Component } from "react";

class Temperature extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = event => {
    const val2 = event.target.value;
    this.props.onTempChange(val2);
  };
  render() {
    return (
      <div>
        <input value={this.props.temp} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Temperature;
