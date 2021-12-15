import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import FontCard from '../Components/FontCard';
import { BasicBtn, FlexyDiv, OuterDiv } from '../Components/styles';
import { getGoogleFonts } from '../data/categoryData';
import { saveFont } from '../data/fontData';
import { getUserByFBKey } from '../data/userData';



export default function Home({ user }) {
  const [resp, setResp] = useState([]);
  const [fontFamily, setFontFamily] = useState({
    family: "Germania One"
  });
  const [dbUser, setDbUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    getGoogleFonts().then((resp) => setResp(resp.items));
    getUserByFBKey(user?.multiFactor?.user?.uid).then(setDbUser);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

const getRandom = () => {
  const randomFont = resp[Math.floor(Math.random()*resp.length)];
  setFontFamily(randomFont);
}

const saveUserFont = () => {
  saveFont({
    Name: fontFamily.family,
    Style: fontFamily.category || "no style",
    UserId: dbUser?.id
  }).then(history.push(`myfonts`));
}

  return (
    <FlexyDiv>
    <OuterDiv>
      <div>
      <FlexyDiv>
        <FontCard fontFamily={fontFamily.family} addInfo={fontFamily.family} styledText="Just My Type." />
      </FlexyDiv>
      <FlexyDiv>
        <BasicBtn color="#ef7255" role="button" onClick={getRandom}>Random</BasicBtn>
        {user
        ? <BasicBtn color="#187783" role="button" onClick={saveUserFont}>Save</BasicBtn>
        : null
        }
      </FlexyDiv>
      </div>
    </OuterDiv>
    </FlexyDiv>
  )
};
