import styled from "styled-components";

const Container = styled.div`
  padding: 2rem 18rem;

  h2 {
    font-size: 4rem;
    font-weight: 500;
    letter-spacing: 0.5rem;
    color: white;
  }
  p {
    padding: 2rem;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.5rem;
    color: white;
    text-align: left;
  }

  @media (max-width: 767px) {
    padding: 2rem 0rem;
    p {
      padding: 2rem 2rem;
    }
  }
`;

const AboutMe = () => {
  return (
    <Container>
      <h2>About me</h2>
      <p>
        I am currently looking for my first professional experience in the IT
        world. I was self-taught in front end technologies and Every day I carry
        out projects to reinforce my knowledge. Also, I meeting collaborating in
        the development and growth of the web "El valor justo", where you can
        see rental analytics in Buenos Aires. I look forward to meeting you!
      </p>
    </Container>
  );
};

export default AboutMe;
