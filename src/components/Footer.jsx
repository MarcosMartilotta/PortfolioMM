import styled from "styled-components";
import logoGit from "../Img/icons8-github-60.png";
import logoIn from "../Img/icons8-linkedin-60.png";

const FooterStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1.5rem;

  div {
    width: contain;
    display: flex;
    align-items: center;
  }
  p {
    margin-right: 2rem;
  }
  img {
    width: 3rem;
    margin-right: 2rem;
    transition: all 0.3s ease;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>Created by Marcos Martilotta</p>
      <div>
        <p>My networks </p>
        <img src={logoGit} alt="GitHub logo" />
        <img src={logoIn} alt="LinkedIn logo" />
      </div>
    </FooterStyled>
  );
};

export default Footer;
