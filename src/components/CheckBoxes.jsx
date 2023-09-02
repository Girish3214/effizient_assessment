import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function Checkboxes({ label, name, checked, onChange }) {
  return (
    <FormControlLabel
      control={<Checkbox name={name} checked={checked} onChange={onChange} />}
      label={label}
    />
  );
}

export default Checkboxes;
