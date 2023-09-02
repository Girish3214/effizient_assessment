import React from "react";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src="https://lh6.googleusercontent.com/vHlmJXYwoJzkzWTJP1uGhFgY6sgJPIJCxl1tr5LufmBo8TvIU-EW8QLDYz6udujWDFqtNHbmn_0dVGc35tM--t4B5O2V17TC_BRV1DI6mX_3eYPzsxxIGXGBFgR0_hVQjw=w1020"
        srcSet="https://lh6.googleusercontent.com/vHlmJXYwoJzkzWTJP1uGhFgY6sgJPIJCxl1tr5LufmBo8TvIU-EW8QLDYz6udujWDFqtNHbmn_0dVGc35tM--t4B5O2V17TC_BRV1DI6mX_3eYPzsxxIGXGBFgR0_hVQjw=w1020"
        alt="company logo"
        className="header__image"
      />
    </div>
  );
}

export default Header;
