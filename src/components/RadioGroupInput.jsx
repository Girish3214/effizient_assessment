import React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import ContainerBox from "./ContainerBox";

function RadioGroupInput({ item, name, value, options, onChange }) {
  return (
    <ContainerBox key={item.name} title={item.title} id={item.name}>
      <RadioGroup name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </ContainerBox>
  );
}

export default RadioGroupInput;
