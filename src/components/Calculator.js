import React, { Component } from "react";
import Temperature from "./Temperature";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { temp: "", scale: "" };
  }

  handleCelcius = val1 => {
    this.setState({ temp: val1, scale: "c" });
  };

  handleFaren = val1 => {
    this.setState({ temp: val1, scale: "f" });
  };

  render() {
    let celcius, faren;
    if (this.state.scale == "f") {
      if (this.state.temp == "") {
        celcius = "";
      } else if (this.state.temp != "") {
        celcius = (this.state.temp - 32) / 1.8;
      }
    } else if (this.state.scale == "c") {
      if (this.state.temp == "") {
        faren = "";
      } else if (this.state.temp != "") {
        faren = this.state.temp * 1.8 + 32;
      }
    }

    // const celcius=this.state.scale=='f'? ((this.state.temp-32)/1.8):(this.state.temp);
    //const faren=this.state.scale=='c'? ((this.state.temp*1.8)+32):(this.state.temp);

    return (
      <div>
        <p>
          Celcius:
          <Temperature temp={celcius} onTempChange={this.handleCelcius} />
        </p>
        <p>
          {" "}
          Farenheit:
          <Temperature temp={faren} onTempChange={this.handleFaren} />
        </p>
      </div>
    );
  }
}

export default Calculator;
