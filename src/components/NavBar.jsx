import React from "react";
import theme from "../theme/Theme";
import styled from "styled-components";
import { Hamburguer } from "./MobileNav/Hamburguer";
import logo from "../Img/icons8-leon-100.png";
import { useState } from "react";

const StyledNav = styled.nav`
  position: fixed;
  top: 0px;
  padding: 0.5rem;
  width: 100vw;
  height: 6rem;
  background-color: ${theme.dark.deepBlue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  opacity: 0.9;

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

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
    font-size: 3rem;
    a {
      color: white;
      margin-top: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 2.5rem;
        color: white;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    left: 0;
    text-align: center;

    a {
      color: white;
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

    border-radius: 0 0 80% 0;
    left: 0;
    width: 100vw;
    height: 90vw;
  }
`;

const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`

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
  transition: .5s;
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
  transition: .5s;
}
}


input{
  &:checked + .slider{
    background-color: #522ba7;
  }
}



input:checked + .slider:before {
  transform: translateX(100%);
  box-shadow: inset 15px -4px 0px 15px #fff000;
}
`


export const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <StyledNav>
      <ToggleDarkMode >
        <div className="switch">
          <input type="checkbox"/>
          <span className="slider"></span>
        </div>
      </ToggleDarkMode>
      <div className={`links ${click ? "active" : ""}`}>
        <a onClick={handleClick} href="#h">Technologies</a>
        <a onClick={handleClick} href="#h">Projects</a>
        <a onClick={handleClick} href="#h">About Me</a>
        <a onClick={handleClick} href="#h">Contact</a>
      </div>
      <Logo src={logo} alt={logo} />
      <div className="burguer">
        <Hamburguer clicked={click} handleClick={handleClick} />
        <BgLinks className={`initial ${click ? "active" : ""}`}></BgLinks>
      </div>
    </StyledNav>
  );
};
