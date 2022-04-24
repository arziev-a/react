import "./App.css";
import React from "react";
import BasicCard from "./Card";
import LinearIndeterminate from "./loading";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const url = "https://jsonplaceholder.typicode.com/users";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      lodading: true,
      filteredData: [],
      modalStatus: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      const datafetch = fetch(url)
        .then((res) => res.json())
        .then((data) => this.setState({ data: data, lodading: false }));
    }, 3000);
  }

  handleClick = (index) => {
    const filtered = this.state.data.filter((item, pos) => index === pos);
    console.log(filtered);
    this.setState({ filteredData: filtered, modalStatus: true });
  };
  handleClose = () => {
    console.log("from handleClose");
  };

  render() {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };
    const { filteredData } = this.state;
    const modal = (filteredData) => {
      return (
        <>
          <Modal
            open={true}
            onClose={false}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </>
      );
    };
    const showItems = (fetchedData) => {
      return (
        <>
          {fetchedData.map((item, index) => {
            return (
              <div key={index}>
                <BasicCard
                  name={item.name}
                  username={item.username}
                  email={item.email}
                  id={index}
                  handleClick={this.handleClick}
                />
              </div>
            );
          })}
        </>
      );
    };

    return (
      <div className="App">
        {this.state.lodading ? (
          <LinearIndeterminate />
        ) : (
          showItems(this.state.data)
        )}

        {modal(filteredData)}
      </div>
    );
  }
}

export default App;
