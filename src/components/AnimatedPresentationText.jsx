import React from "react";
import styled from "styled-components";
import Typed from 'react-typed';
const MyText = styled.div`
  position: absolute;
  padding: 5rem;
  top: 7rem;
  text-align: left;
  font-size: 5rem;
  color: #fff;
`;
/* Hi! My name is Marcos and I'm front end developer.  */
export const AnimatedPresentationText = () => {
  return <>
    <MyText> 

    <Typed
                strings={[
                    "Hi! My name is Marcos and I'm front end developer.",
                    "Hi! My name is Marcos and I'm React developer",
                    "Hi! My name is Marcos and I'm passionated about features "]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                    
                </Typed>
    </MyText>
    
  </>;
};
