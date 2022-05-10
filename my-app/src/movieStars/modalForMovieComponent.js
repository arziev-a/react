import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

function ModalForMovieStar({ modalState, handleModal, modalData, imgHeader }) {
  const handleClose = () => {
    handleModal();
  };
  return (
    <div>
      {/* <Button>Open modal</Button> */}
      <Modal
        open={modalState}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <img src={`${imgHeader}${modalData[0].profile_path}`} alt="" />
          </Typography>
          <div className="d-flex m-3">
            {modalData[0].known_for.map((known_for) => {
              return (
                <div key={known_for.id}>
                  <img
                    className="known-poster m-3"
                    src={`${imgHeader}${known_for.poster_path}`}
                    alt={known_for.title}
                  />
                  <span>{known_for.title}</span>
                </div>
              );
            })}
          </div>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Close Modal
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalForMovieStar;
