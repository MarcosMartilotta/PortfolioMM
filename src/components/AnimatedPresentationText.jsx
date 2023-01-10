import React from "react";
import styled from "styled-components";
import Typed from "react-typed";

const MyText = styled.div`
  width: 90vw;
  height: 60rem;
  padding: 10rem;
  text-align: left;
  font-size: 5rem;
  color: #fff;

  span {
    height: 30rem;
  }
`;

export const AnimatedPresentationText = () => {
  return (
    <>
      <MyText>
        <Typed
          strings={[
            "Hi! I am Marcos and I'm front end developer.",
            "Hi! I am Marcos and I'm React developer.",
            "Hi! I am Marcos and I'm passionated about features. ",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        ></Typed>
      </MyText>
    </>
  );
};
