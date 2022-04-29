import React from "react";

const TitleIntro = ({ Title, SubTitle, Classes }) => {
  return (
    <>
      <div className={Classes}>
        <h1>{Title}</h1>
        <p>{SubTitle}</p>
      </div>
    </>
  );
};

export default TitleIntro;
