import React, { useEffect, useState } from 'react'
import ScriptTag from 'react-script-tag';
import styled from 'styled-components';
import { getCategoryFonts, getUserCategories } from '../data/categoryData';


export default function Home({user}) {
  const [resp, setResp] = useState([]);

  useEffect(() => {
    getCategoryFonts("81988b62-bea6-4600-b9c9-95b5d150541c").then(setResp);
  }, []);

console.warn(resp);

const fontFamily = "Redacted Script";

const StyledH1 = styled.h1`
font-family: ${fontFamily}
`;

  return (
    <>
    <head><link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href={`https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`}rel="stylesheet" /></head>
    <div>
      <StyledH1>Home</StyledH1>
    </div>
    </>
  )
};
