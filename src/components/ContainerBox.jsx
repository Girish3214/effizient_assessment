import { Container } from "@mui/material";
import React from "react";

function ContainerBox({ children, topBlue, title }) {
  if (topBlue) {
    return (
      <Container className="main__container" style={{ position: "relative" }}>
        <div className="blue__heading" />
        <div style={{ display: "block", paddingBottom: "12px" }}>
          <div className="heading">
            <h6 className="title">Customized SOP Generator</h6>
          </div>
          <div className="form__description">
            Fill this questionnaire for the student. After submitting, you will
            receive an email at the email address that you have provided with a
            Statement of Purpose customized for you. You can use and modify that
            as per your needs.
            <br />
            <br />
            <div>
              If you would like to get it edited, reviewed, or drafted by our
              experts, you can get in touch with us:{" "}
              <a href="https://effizient-immigration-inc.square.site/s/shop">
                <span>
                  https://effizient-immigration-inc.square.site/s/shop
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="required__container">* Indicates required question</div>
      </Container>
    );
  }
  return (
    <Container className="main__container">
      <div className="container__title">{title}</div>
      <div>{children}</div>
    </Container>
  );
}

export default ContainerBox;
