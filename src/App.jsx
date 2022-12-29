import { NavBar } from "./components/NavBar";
import styled from "styled-components";
import theme from "./theme/Theme";
import { AnimatedPresentationText } from "./components/AnimatedPresentationText";

const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${theme.dark.black};
`;

const PresentationContainer = styled.div`
  position: absolute;
  top: 6.5rem;
  width: 100%;
  letter-spacing: 1rem;
  text-align: left;

`

function App() {
  return (
    <Main>
      <NavBar />
      <PresentationContainer>
        <AnimatedPresentationText />
      </PresentationContainer>
    </Main>
  );
}

export default App;
