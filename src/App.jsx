import { NavBar } from "./components/NavBar";
import styled from "styled-components";
import theme from "./theme/Theme";
import { AnimatedPresentationText } from "./components/AnimatedPresentationText";
import { Technologies } from "./components/Technologies";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.dark.black};
`;

const PresentationContainer = styled.div`
  width: 100vw;
  height: 60rem;
  max-height: 60rem;
  letter-spacing: 1rem;
  text-align: left;
`;

const TechnologiesContainer = styled.div`
  width: 100vw;
  height: 50rem;
  text-align: center;
`;

const ProjectsContainer = styled.div`
  width: 100vw;
  height: fit-content;
  text-align: center;
`;

const AboutMeContainer = styled.div`
  width: 100vw;
  height: fit-content;
  text-align: center;
`;

const ContactContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;

  h2 {
    font-size: 4rem;
    font-weight: 500;
    letter-spacing: 0.5rem;
    color: white;
    text-align: center;
  }
`;

const FooterContainer = styled.footer`
  width: 100vw;
  height: 4rem;
  background-color: ${theme.dark.deepBlue};
`;

function App() {
  useEffect(() => {
    AOS.init({ duration: 500, delay: 120, oce: true, offset: 0 });
  }, []);
  return (
    <Main>
      <NavBar />
      <PresentationContainer>
        <AnimatedPresentationText />
      </PresentationContainer>
      <TechnologiesContainer
        id="tech"
        data-aos="fade"
        data-aos-offset="1"
        data-aos-easing="ease-in-cubic"
        data-aos-anchor-placement="top-center"
      >
        <Technologies />
      </TechnologiesContainer>
      <ProjectsContainer
        id="projects"
        data-aos="fade"
        data-aos-offset="1"
        data-aos-easing="ease-in-cubic"
        data-aos-anchor-placement="top-center"
      >
        <Projects />
      </ProjectsContainer>
      <AboutMeContainer
        id="about"
        data-aos="fade"
        data-aos-offset="1"
        data-aos-easing="ease-in-cubic"
        data-aos-anchor-placement="top-center"
      >
        <AboutMe />
      </AboutMeContainer>
      <ContactContainer
        id="contact"
        data-aos="fade"
        data-aos-offset="1"
        data-aos-easing="ease-in-cubic"
        data-aos-anchor-placement="top-center"
      >
        <h2>Contact me!</h2>
        <ContactForm />
      </ContactContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Main>
  );
}

export default App;
