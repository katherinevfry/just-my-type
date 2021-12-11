import React, { useEffect, useState } from 'react'
import FontCard from '../Components/FontCard';
import { BasicBtn, FlexyDiv } from '../Components/styles';
import { getGoogleFonts } from '../data/categoryData';
import { saveFont } from '../data/fontData';
import { getUserByFBKey } from '../data/userData';



export default function Home({ user }) {
  const [resp, setResp] = useState([]);
  const [fontFamily, setFontFamily] = useState({
    family: "Germania One"
  });
  const [dbUser, setDbUser] = useState({});

  useEffect(() => {
    getGoogleFonts().then((resp) => setResp(resp.items));
    getUserByFBKey(user?.multiFactor?.user?.uid).then(setDbUser);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.warn(dbUser);

const getRandom = () => {
  const randomFont = resp[Math.floor(Math.random()*resp.length)];
  setFontFamily(randomFont);
}

const saveUserFont = () => {
  saveFont({
    Name: fontFamily.family,
    Style: fontFamily.category || "no style",
    UserId: dbUser?.id
  }).then(console.warn(resp));
}

  return (
    <>
    <div>
      <FontCard fontFamily={fontFamily.family} addInfo={fontFamily.family} styledText="Just My Type." />
      <FlexyDiv>
      <BasicBtn color="#A51080" role="button" onClick={getRandom}>Get Random Font</BasicBtn>
      <BasicBtn color="#FF2ECC" role="button" onClick={saveUserFont}>Save Font</BasicBtn>
      </FlexyDiv>
    </div>
    </>

  )
};
