import React from 'react'
import styled from 'styled-components';

const Image = styled.div`
    width: 5rem;
    height: 5rem;
    background: url('../../../public/icons8-leon-100.png');
    background-repeat: no-repeat;
`
export const Logo = () => {
  return (
    <Image/>
    )
}
