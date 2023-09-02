import React from "react";
import TextField from "@mui/material/TextField";

function NewTextInput({ label, name, value, onChange }) {
  return (
    <TextField
      placeholder={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth
      variant="standard"
      margin="normal"
    />
  );
}

export default NewTextInput;
