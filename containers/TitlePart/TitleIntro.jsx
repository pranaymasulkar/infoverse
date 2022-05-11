import React from "react";

const TitleIntro = ({ Title, SubTitle, Classes }) => {
  return (
    <>
      <div className={Classes}>
        <h2 className="main-Heading-blue fw-bold display-6">{Title}</h2>
        <p className="color-code-gray fs-16 fw-semibold">{SubTitle}</p>
      </div>
    </>
  );
};

export default TitleIntro;
