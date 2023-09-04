import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import ContainerBox from "./ContainerBox";

function NewTextInput({ item, name, value, onChange, fillWidth, placeholder }) {
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
      id={item.name}
      title={item.title}
      error={error}
    >
      <TextField
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        fullWidth={fillWidth}
        sx={{ width: { sm: "100%", md: fillWidth ? "100%" : "60%" } }}
        onBlur={() => handleError()}
        variant="standard"
        margin="normal"
        error={error}
      />
      <div className="error__message">
        <span>❗</span>
        <span>This is a required question</span>
      </div>
    </ContainerBox>
  );
}

export default NewTextInput;
