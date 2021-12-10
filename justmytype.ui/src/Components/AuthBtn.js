import React from 'react'
import styled from 'styled-components'
import { signInUser } from '../data/auth';

const StyledBtn = styled.button`
width: 10rem;
height: 1 rem;
border-radius: 25px;
color: pink;
`;

export default function AuthBtn() {
  return (
    <StyledBtn role="button" onClick={signInUser}>Log In</StyledBtn>
  )
}
