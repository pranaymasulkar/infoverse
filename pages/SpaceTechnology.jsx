import dynamic from "next/dynamic";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import HeroContainerFour from "../containers/HeroContainers/HeroContainerFour";
import Footer from "../layout/Footer/Footer";
import { AiTechBaner } from "../utils/allImgs";
import TitleIntro from "../containers/TitlePart/TitleIntro";
import AiDevService from "../components/AiTechnology/AiDevService/AiServiceCard";
import ClientProfile from "../components/Clientel/ClientProfile/ClientProfile";
import AiServiceContainer from "../components/AiTechnology/AiServiceContainer";

const Header = dynamic(
  () => {
    return import("../layout/Header/Header");
  },
  { ssr: false }
);
const AiTechnology = () => {
  return (
    <>
      <Header />
      <HeroContainerFour
        TextColor="text-center py-5 mb-5"
        Title="The Best AI For Everyone"
        TitleClass="vkkjkb"
        SubTitle="Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "
        SubTitleClass="white"
        Heroimg={AiTechBaner}
      />


      
      <AiServiceContainer
        Classes="white text-center py-5"
        Title="AI Development Services"
        SubTitle="We provide a host of offerings to help you capitalize on the metaverse opportunity."
      />

      <ClientProfile
        Classes="white text-start py-5"
        Title="WE ARE AN ASTRONOMY COMPANY"
        SubTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras risus risus, convallis eu nisi in, pretium blandit purus. Nam eu tempor justo, vitae tempor enim. Nam ornare rhoncus rutrum. In est mi, blandit vel interdum eget, fermentum a sapien. Quisque vitae ipsum nunc."
      />

      <Footer />
    </>
  );
};

export default AiTechnology;
