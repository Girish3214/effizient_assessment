import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

function Modal({ open, handleClose }) {
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Clear form?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            This will remove your answers from all questions, and cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(e) => handleClose(e, "clear")}>Clear form</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;
