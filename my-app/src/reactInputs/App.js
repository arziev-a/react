import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
    };
  }

  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="App">
        <label htmlFor="text">Type something</label>
        <input
          id="text"
          type="text"
          name="text"
          onChange={this.handleChange}
          value={this.state.inputText}
        />
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}

export default App;
