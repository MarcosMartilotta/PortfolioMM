import React from "react";
import styled from "styled-components";
import logoReact from "../Img/logoreact.svg";
import logoJs from "../Img/logoJs.svg";
import logoHtml from "../Img/logoHtml.svg";
import logoCss from "../Img/logoCss.svg";
import logoTailwind from "../Img/Tailwind_CSS_Logo.svg";
import logoStyled from "../Img/styled-components-1.svg";
import logoVite from "../Img/vitejs.svg";
import logoWebpack from "../Img/webpack.svg";
import logoGit from "../Img/git-icon-logo-svgrepo-com.svg";

const TechnologiesContainer = styled.div`
  width: 100%;
  height: 60rem;
  margin-top: 10rem;
  display: grid;
  grid-template-rows: 10rem 10rem;
`;

const Logos = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 2rem;
  transition: all 0.2s ease;

  &:hover {
    width: 8rem;
    height: 8rem;
    cursor: pointer;
  }
`;

const Subtitle = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 0.5rem;
  color: white;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Technologies = () => {
  return (
    <>
      <Subtitle>Technologies that i use</Subtitle>
      <TechnologiesContainer>
        <Container>
          <Logos src={logoReact} alt="React Logo" />
          <Logos src={logoJs} alt="Javascript  Logo" />
          <Logos src={logoHtml} alt="Html Logo" />
          <Logos src={logoCss} alt="Css Logo" />
          <Logos src={logoTailwind} alt="Tailwind Logo" />
        </Container>
        <Container>
          <Logos src={logoStyled} alt="Styled components Logo" />
          <Logos src={logoVite} alt="Vite Logo" />
          <Logos src={logoWebpack} alt="Webpack Logo" />
          <Logos src={logoGit} alt="Git Logo" />
        </Container>
      </TechnologiesContainer>
    </>
  );
};
