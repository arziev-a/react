import "./App.css";
import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      listOfTodos: [],
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ todo: e.target.value });
  };

  handleClick = (e) => {
    // console.log(e.target.value);
    console.log(this.state.todo, "from handle click");

    this.setState((state) => {
      const newArr = [...state.listOfTodos];
      if (state.todo !== "") {
        newArr.push(state.todo);
      }
      return {
        listOfTodos: newArr,
        todo: "",
      };
    });
  };

  handleDelete = (index) => {
    const filtered = this.state.listOfTodos.filter((item, i) => i !== index);
    console.log(filtered);
    this.setState({ listOfTodos: filtered });
  };

  render() {
    let { todo, listOfTodos } = this.state;
    console.log(this.state.listOfTodos);
    return (
      <div className="App">
        <div className="searchInput">
          <input
            type="text"
            placeholder="Add to do"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <div className="searchIcon">
            <AddIcon onClick={this.handleClick} />
          </div>
        </div>

        <div className="toDoAdded">
          {listOfTodos.map((item, index) => {
            return (
              <div className="items" key={index}>
                <div className="item">{item}</div>

                <div className="icon">
                  <DeleteIcon onClick={() => this.handleDelete(index)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
