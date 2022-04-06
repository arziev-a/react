import "./App.css";
import React from "react";

const data = [
  {
    category: "sporting goods",
    price: "23.99",
    available: true,
    id: 1,
    name: "jersey",
  },
  {
    category: "sporting goods",
    price: "23.99$",
    available: false,
    id: 2,
    name: "hockey puck",
  },
  {
    category: "technology",
    price: "300.00$",
    available: true,
    id: 3,
    name: "Iphone X",
  },
  {
    category: "sporting goods",
    price: "150.00$",
    available: false,
    id: 4,
    name: "Nokia",
  },
  {
    category: "clothing",
    price: "20.00$",
    available: false,
    id: 5,
    name: "T-Shirt",
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      check: !true,
    };
  }

  handleChange = (e) => {
    let target = e.target.name === "check" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: target });
  };

  render() {
    let checkedOrNot = data.filter((i) => i.available);
    let products;
    if (this.state.check) {
      products = checkedOrNot;
    } else {
      products = data;
    }

    let filtered = products.filter((i) =>
      i.name.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div className="container">
        <div className="row">
          <input
            type="search"
            name="search"
            placeholder="search for an item"
            onChange={this.handleChange}
            value={this.state.search}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="check"
            id="check"
            onChange={this.handleChange}
          />
          <label htmlFor="check">Filter by availablity</label>
        </div>

        {filtered.map((item, ind) => {
          let available = item.available === false ? "notAvailable" : "";

          return (
            <div className={`d-flex ${available}`} key={item.id}>
              <p className="me-5" style={{ marginLeft: "5px" }}>
                {item.name}
              </p>
              <p className="me-5">{item.price}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
