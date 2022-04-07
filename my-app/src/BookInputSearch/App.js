import "./App.css";
import React from "react";
import SearchBar from "./components/Searchbar";
import data from "./data.js";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      filteredArr: [],
    };
  }

  handleFilter = (e) => {
    let target = e.target.value;
    this.setState({ inputValue: target });
    const newArr = data.filter((book) => {
      return book.title.toLowerCase().includes(target.toLowerCase());
    });

    if (target === "") {
      this.setState({ filteredArr: [] });
    } else {
      this.setState({ filteredArr: newArr });
    }
  };

  handleClick = (e) => {
    e.target.value = "";
    this.setState({ inputValue: "", filteredArr: [] });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          func={this.handleFilter}
          filteredArr={this.state.filteredArr}
          inputValue={this.state.inputValue}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
