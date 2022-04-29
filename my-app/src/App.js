import "./App.css";
import React from "react";
import { Input, InputGroup } from "reactstrap";
import Paging from "./pagin";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      imgHeader: "https://image.tmdb.org/t/p/w185/",
      loading: false,
      searchString: "",
      dropDownVal: 0,
      defaultPage: 1,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const url = `https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en&page=${this.state.defaultPage}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results, loading: true }));
  };

  handleChange = (e) => {
    this.setState({ searchString: e.target.value });
  };

  handleDropDown = (e) => {
    this.setState({ dropDownVal: e.target.value });
  };

  handlePage = (number) => {
    this.setState({ defaultPage: number }, () => {
      this.fetchData();
    });
  };

  render() {
    const { data, loading, imgHeader, searchString, dropDownVal, defaultPage } =
      this.state;
    let dropDownFiltered;
    if (dropDownVal > 0) {
      dropDownFiltered = data.filter((movie) => movie.gender === dropDownVal);
    } else {
      dropDownFiltered = data;
    }
    const filtered = dropDownFiltered.filter((name) =>
      name.name.toLowerCase().includes(searchString.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <div className="m-5">
          <Paging handlePage={this.handlePage} defaultPage={defaultPage} />
        </div>
        <div className="m-3">
          <InputGroup>
            <Input
              placeholder="username"
              onChange={this.handleChange}
              value={searchString}
            />
          </InputGroup>
          <div className="d-flex justify-content-center p-5">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dropDownVal}
                label="Age"
                onChange={this.handleDropDown}
              >
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={1}>Female</MenuItem>
                <MenuItem value={2}>Male</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="movies">
          {loading
            ? filtered.map((movieStar) => {
                const knownForDetail = movieStar.known_for.map(
                  (title) => title.title
                );
                return (
                  <div className="movie" key={movieStar.id}>
                    <img
                      src={`${imgHeader}${movieStar.profile_path}`}
                      alt={movieStar.name}
                    />
                    <div>{movieStar.name}</div>
                    <div className="known-for">{knownForDetail.join(",")}</div>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </div>
    );
  }
}

export default App;
