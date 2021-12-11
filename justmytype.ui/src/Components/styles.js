import styled from "styled-components";

export const StyledH1 = styled.h1`
font-family: ${props => props.fontFamily};
font-size: 3em;
margin-top: 40px;
`;

export const StyledH2 = styled.h1`
font-family: ${props => props.fontFamily};
font-size: 1.5em;
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

export const FlexyDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 20px;
`;

export const CardDiv = styled.div`
width: 20rem;
`
