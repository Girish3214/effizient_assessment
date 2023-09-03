import React from "react";
import TextField from "@mui/material/TextField";

function NewTextInput({ name, value, onChange, fillWidth, placeholder }) {
  return (
    <TextField
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth={fillWidth}
      sx={{ width: fillWidth ? "100%" : "60%" }}
      variant="standard"
      margin="normal"
    />
  );
}

export default NewTextInput;
