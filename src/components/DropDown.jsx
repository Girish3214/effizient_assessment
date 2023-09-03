import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ContainerBox from "./ContainerBox";

function Dropdown({ item, name, value, onChange, options }) {
  const [error, setError] = useState(false);
  const handleError = () => {
    if (!value) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleChange = (e) => {
    onChange(e);
    handleError();
  };

  return (
    <ContainerBox
      key={item.name}
      title={item.title}
      id={item.name}
      error={error}
    >
      <Select
        placeholder={"Choose"}
        name={name}
        value={value || options[0].value}
        onChange={(e) => handleChange(e)}
        sx={{ width: { sm: "100%", md: "40%" }, marginTop: 2 }}
        variant="outlined"
        margin="dense"
        defaultValue={options[0]}
        onBlur={() => handleError()}
        error={error}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </ContainerBox>
  );
}

export default Dropdown;
