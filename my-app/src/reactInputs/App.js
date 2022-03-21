import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      select: "",
      car: "",
      check: true,
      textArea: "",
    };
  }

  handleGeneral = (e) => {
    let target = e.target;
    let state = target.name === "check" ? target.checked : target.value;
    this.setState({ [target.name]: state });
  };

  render() {
    return (
      <div className="App">
        <label htmlFor="text">Type something</label>
        <input
          id="text"
          type="text"
          name="text"
          onChange={this.handleGeneral}
          value={this.state.text}
        />
        <p>{this.state.text}</p>

        <select name="select" id="" onChange={this.handleGeneral}>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="white">white</option>
        </select>
        <p>{this.state.select}</p>

        <div>
          <label htmlFor="nissan">nissan</label>
          <input
            id="nissan"
            name="car"
            type="radio"
            value="nissan"
            onChange={this.handleGeneral}
          />
          <label htmlFor="mazda">mazda</label>
          <input
            id="mazda"
            name="car"
            type="radio"
            value="mazda"
            onChange={this.handleGeneral}
          />
          <label htmlFor="toyota">toyota</label>
          <input
            id="toyota"
            name="car"
            type="radio"
            value="toyota"
            onChange={this.handleGeneral}
          />
        </div>
        <p>{this.state.car}</p>

        <label htmlFor="check">{this.state.check ? "agree" : "disagree"}</label>
        <input
          type="checkbox"
          id="check"
          checked={this.state.check}
          onChange={this.handleGeneral}
          name="check"
        />

        <textarea
          name=""
          id=""
          maxLength="20"
          value={this.state.textArea}
          onChange={this.handleGeneral}
        ></textarea>
        <p>you have left {20 - this.state.textArea.length}</p>
      </div>
    );
  }
}

export default App;
