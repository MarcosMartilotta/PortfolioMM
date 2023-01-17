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
  }

  @media (max-width: 767px) {
    padding: 2rem 14rem;
    p {
      padding: 2rem 0rem;
    }
  }
`;

const AboutMe = () => {
  return (
    <Container>
      <h2>About me</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
        voluptate dicta repudiandae nam corrupti? Expedita, officiis provident
        quae nobis iusto totam quis voluptate nisi eum voluptates ad,
        consequatur nostrum nam. Atque ipsam quibusdam necessitatibus soluta
      </p>
    </Container>
  );
};

export default AboutMe;
