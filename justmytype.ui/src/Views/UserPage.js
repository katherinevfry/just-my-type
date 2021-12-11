import React, { useEffect, useState } from 'react'
import FontCard from '../Components/FontCard';
import { FlexyDiv } from '../Components/styles';
import { deleteFont, getUserFonts } from '../data/fontData';
import { getUserByFBKey } from '../data/userData';

export default function UserPage({ user }) {
  const [myInfo, setMyInfo] = useState({});
  const [myFonts, setMyFonts] = useState([]);
  const [myCategories, setMyCategories] = useState([]);
  const [updateSwitch, setUpdateSwitch] = useState(false);

useEffect(() => {
  getUserByFBKey(user?.multiFactor?.user?.uid).then((resp) => {
    setMyInfo(resp);
    getUserFonts(resp.id).then(setMyFonts);
  });
}, [updateSwitch])

console.warn(myFonts);

  return (
    <div>
      <h1>User Page</h1>
    {myFonts
    ? <FlexyDiv>
      {myFonts.map((font) => (
      <FontCard id={font.id} styledText={font.name} fontFamily={font.name} isUserFont fontId={font.id} setUpdateSwitch={setUpdateSwitch}/>
    ))}
    </FlexyDiv>
    : "You have no saved fonts"
    }
    </div>
  )
}
