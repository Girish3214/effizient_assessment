import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Dropdown({ label, name, value, onChange, options }) {
  return (
    <Select
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth
      variant="outlined"
      margin="normal"
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}

export default Dropdown;
