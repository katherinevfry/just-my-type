import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import FontCard from '../Components/FontCard';
import ModalComp from '../Components/Modal';
import { BasicBtn, FlexyDiv } from '../Components/styles';
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
  const [showModal, setShowModal] = useState(false);



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
      <h2>My Categories</h2>
      {myCategories
      ? myCategories.map((cat) => (
        <BasicBtn id={cat.id} color="black" onClick={() => history.push(`/category/${cat.id}`)}>{cat.title}</BasicBtn>
      ))
      : "You have no categories. Why not create one?"
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
           <BasicBtn role="submit" color="#A51080">Add Category</BasicBtn>
      </form>
      <h2>My Fonts</h2>
    {myFonts
    ? <FlexyDiv>
      {myFonts.map((font) => (
      <>
      <FontCard id={font.id} styledText={font.name} fontFamily={font.name} isUserFont fontId={font.id} setUpdateSwitch={setUpdateSwitch} handleShow={() => setShowModal(true)} />
      {showModal
        ? <ModalComp showModal={showModal} setShowModal={setShowModal} user={user} fontId={font.id}/>
        : null
        }
      </>
    ))}
    </FlexyDiv>
    : "You have no saved fonts"
    }
  
    </div>
  )
}
