import React from "react";
import theme from "../theme/Theme";
import styled from "styled-components";
import { Hamburguer } from "./MobileNav/Hamburguer";
import logo from "../Img/icons8-leon-100.png";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const StyledNav = styled.nav`
  position: fixed;
  top: 0px;
  padding: 0.5rem;
  width: 100%;
  height: 6rem;
  background-color: ${theme.dark.deepBlue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  opacity: 0.9;

  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .links {
    position: absolute;
    top: 6rem;
    left: -2000px;
    text-align: center;
    transition: all 0.6s ease;
    font-size: 2.5rem;
    .nav-item {
      padding: 1rem;
      text-decoration: none;
      color: white;
      margin-top: 6rem;
      display: block;
      border-radius: 0.5rem;
      transition: all 0.2s ease;

      &:hover {
        cursor: pointer;
        background-color: darkblue;
      }
      &.active {
        background-color: darkblue;
      }
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      .nav-item {
        font-size: 2rem;
        display: inline;
      }
    }
  }
  @media (max-width: 768px) {
    .links.active {
      padding-left: 10rem;
      padding-right: 10rem;
      width: 100vw;
      height: 90vh;
      display: flex;
      flex-direction: column;
      margin-left: auto;
      left: 0;
      text-align: center;
    }
  }
`;

const BgLinks = styled.div`
  position: absolute;
  top: 6rem;
  left: -2000px;
  bottom: 0;
  background-color: ${theme.dark.deepBlue};
  z-index: -1;
  transition: all 0.6s ease;
  &.active {
    border-radius: 0 0 60% 0;
    left: 0;
    width: 100vw;
    height: 90vw;
  }
`;

const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  &:hover {
    cursor: pointer;
  }
`;

const ToggleDarkMode = styled.div`
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    --background: #28096b;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background);
    transition: 0.5s;
    border-radius: 30px;
    &:before {
      position: absolute;
      content: "";
      height: 1.4em;
      width: 1.4em;
      border-radius: 50%;
      left: 10%;
      bottom: 15%;
      box-shadow: inset 8px -4px 0px 0px #fff000;
      background: var(--background);
      transition: 0.5s;
    }
  }

  input {
    &:checked + .slider {
      background-color: #522ba7;
    }
  }

  input:checked + .slider:before {
    transform: translateX(100%);
    box-shadow: inset 15px -4px 0px 15px #fff000;
  }
`;

const LinksContainer = styled.div`
  .nav-item {
    margin-right: 3rem;
  }
`;

export const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <StyledNav>
      <ToggleDarkMode>
        <div className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </div>
      </ToggleDarkMode>
      <LinksContainer className={`links ${click ? "active" : ""}`}>
        <Link
          className="nav-item"
          activeClass="active"
          to="tech"
          spy="true"
          smooth={true}
          offset={-70}
          duration={500}
          onClick={handleClick}
        >
          Technologies
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="projects"
          spy="true"
          smooth={true}
          offset={-70}
          duration={500}
          onClick={handleClick}
        >
          Projects
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="about"
          spy="true"
          smooth={true}
          offset={-70}
          duration={500}
          onClick={handleClick}
        >
          About Me
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="contact"
          spy="true"
          smooth={true}
          offset={-70}
          duration={500}
          onClick={handleClick}
        >
          Contact
        </Link>
      </LinksContainer>
      <Logo src={logo} alt={logo} onClick={scrollToTop} />
      <div className="burguer">
        <Hamburguer clicked={click} handleClick={handleClick} />
        <BgLinks className={`initial ${click ? "active" : ""}`}></BgLinks>
      </div>
    </StyledNav>
  );
};
