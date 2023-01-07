import EditIcon from "@mui/icons-material/Edit";
import { Divider, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50rem",
  height: "15rem",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditToDo = (props) => {
  const [open, setOpen] = useState(false);
  const [newDesc, setNewDesc] = useState(props.desc);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewDesc(props.desc);
  };

  const clickHandler = () => {
    console.log(newDesc);
  };
  
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          color: "black",
          borderColor: "black",
          backgroundColor: "#F0F0F0",
        }}
        onClick={handleOpen}
      >
        <EditIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h2" component="h2">
            Edit to Do
          </Typography>
          <Divider />
          <Divider />
          {/* <Input multiline rows={3} placeholder="Change descripton" fullWidth={true} /> */}
          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            placeholder="Change Description"
            multiline
            maxRows={3}
            value={newDesc}
            onChange={(value) => setNewDesc(value.target.value)}
            fullWidth={true}
            sx={{ mt: 2, mb: 2 }}
          />
          <Divider />
          <Button
            sx={{
              color: "white",
              backgroundColor: "green",
              "&:hover": { color: "black" },
            }}
            onClick={clickHandler}
          >
            Comfirm
          </Button>
          <Button
            sx={{
              margin: 2,
              color: "white",
              backgroundColor: "red",
              "&:hover": { color: "black" },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default EditToDo;
