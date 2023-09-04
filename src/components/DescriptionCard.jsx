import React from "react";
import ContainerBox from "./ContainerBox";

function DescriptionCard({ formSumitted, setFormSumitted }) {
  return (
    <ContainerBox
      topBlue
      formSumitted={formSumitted}
      setFormSumitted={setFormSumitted}
    >
      DescriptionCard
    </ContainerBox>
  );
}

export default DescriptionCard;
