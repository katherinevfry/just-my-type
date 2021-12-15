import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import FontCard from '../Components/FontCard';
import { BasicBtn, FlexyDiv, GradBtn, StyledH2 } from '../Components/styles';
import { createCategory, getUserCategories } from '../data/categoryData';
import { getUserFonts } from '../data/fontData';
import { getUserByFBKey } from '../data/userData';

export default function UserPage({ user }) {
  const [myInfo, setMyInfo] = useState({});
  const [myFonts, setMyFonts] = useState([]);
  const [myCategories, setMyCategories] = useState([]);
  const [newCat, setNewCat] = useState({
    title: "",
    userId: "",
  })
  const [updateSwitch, setUpdateSwitch] = useState(false);



const history = useHistory();

useEffect(() => {
  getUserByFBKey(user?.multiFactor?.user?.uid).then((resp) => {
    setMyInfo(resp);
    getUserFonts(resp.id).then(setMyFonts);
    getUserCategories(resp.id).then(setMyCategories);
    setNewCat({userId: resp.id});
  });
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [updateSwitch])


const handleSubmit = (e) => {
  e.preventDefault()
  createCategory(newCat).then();
  setUpdateSwitch();
};

const handleInputChange = (e) => {
  setNewCat((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value
  }));
};


  return (
    <div>
      <StyledH2>My Categories</StyledH2>
      {myCategories
      ? myCategories.map((cat) => (
        <GradBtn id={cat.id} onClick={() => history.push(`/${cat.title}/${cat.id}`)}>{cat.title}</GradBtn>
      ))
      : <p>You have no categories. Why not create one?</p>
      }
      <form id='categoryForm'
         autoComplete='off'
         onSubmit={handleSubmit}>
           <input name='title'
           type='text'
           value={newCat.title}
           onChange={handleInputChange}
           >
           </input>
           <BasicBtn role="submit" color="#187783">Add Category</BasicBtn>
      </form>
      <StyledH2>My Fonts</StyledH2>
    {myFonts
    ? <FlexyDiv>
      {myFonts.map((font) => (
      <>
      <FontCard id={font.id} styledText={font.name} fontFamily={font.name} isUserFont fontId={font.id} setUpdateSwitch={setUpdateSwitch} user={user} showModalButton />
      </>
    ))}
    </FlexyDiv>
    : <p>You have no saved fonts</p>
    }
  
    </div>
  )
}
