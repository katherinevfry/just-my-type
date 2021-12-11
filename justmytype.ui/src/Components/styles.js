import styled from "styled-components";

export const StyledH1 = styled.h1`
font-family: ${props => props.fontFamily};
font-size: 3em;
margin-top: 40px;
`;

export const BasicBtn = styled.button`
width: 5rem;
height: 2rem;
border-radius: 5px;
background-color: ${props => props.color};
border: none;
color: white;
cursor: pointer;
margin: 10px;
`;
