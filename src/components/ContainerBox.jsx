import { Container } from "@mui/material";
import React from "react";

function ContainerBox({
  children,
  topBlue,
  formSumitted,
  setFormSumitted,
  title,
  error,
  id,
}) {
  if (topBlue) {
    return (
      <Container className="main__container" style={{ position: "relative" }}>
        <div className="blue__heading" />
        <div style={{ display: "block", paddingBottom: "12px" }}>
          <div className="heading">
            <h6 className="title">Customized SOP Generator</h6>
          </div>
          {formSumitted ? (
            <div className="form__description">
              Thanks for using our customized SOP Generator. You will receive a
              customized SOP on the email you provided in this form. Feel free
              to use and edit it as you see fit.
              <br />
              <br />
              <div>
                Good luck with your application!
                <br />
                <br />
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setFormSumitted(false);
                  }}
                >
                  <span>Submit another form</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="form__description">
              Fill this questionnaire for the student. After submitting, you
              will receive an email at the email address that you have provided
              with a Statement of Purpose customized for you. You can use and
              modify that as per your needs.
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
          )}
        </div>
        {!formSumitted && (
          <>
            <div className="divider" />
            <div className="required__container">
              * Indicates required question
            </div>
          </>
        )}
      </Container>
    );
  }
  return (
    <Container
      id={id}
      className={`main__container ${error ? "container__error" : ""}`}
    >
      <div className="container__title">
        {title} <span className="required">*</span>
      </div>
      <div>{children}</div>
    </Container>
  );
}

export default ContainerBox;
