import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer__container">
        This content is neither created nor endorsed by Google.{" "}
        <a href="/" target="_blank">
          Report Abuse
        </a>{" "}
        -{" "}
        <a href="https://policies.google.com/terms" target="_blank">
          Terms of Service
        </a>{" "}
        -{" "}
        <a href="https://policies.google.com/privacy" target="_blank">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default Footer;
