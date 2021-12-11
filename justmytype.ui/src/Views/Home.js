import React, { useEffect, useState } from 'react'
import { StyledH1 } from '../Components/styles';
import { getCategoryFonts } from '../data/categoryData';



export default function Home({user}) {
  const [resp, setResp] = useState([]);

  useEffect(() => {
    getCategoryFonts("81988b62-bea6-4600-b9c9-95b5d150541c").then(setResp);
  }, []);

console.warn(resp);

const fontFamily = "Germania One";

const header = () => (
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href={`https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`}rel="stylesheet" />
  </head>
);

  return (
    <>
    {header()}
    <div>
      <StyledH1 fontFamily={fontFamily}>Just My Type</StyledH1>
    </div>
    </>

  )
};
