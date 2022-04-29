import React from "react";

const TitleLinkIntro = ({ Title, SubTitle, BtnTitle, BtnLink }) => {
  return (
    <>
      <div>
        <h1>{Title}</h1>
        <p className="white">{SubTitle}</p>
        <a href={BtnLink} className="btn btn-outline-info">
          {BtnTitle}
        </a>
      </div>
    </>
  );
};

export default TitleLinkIntro;
