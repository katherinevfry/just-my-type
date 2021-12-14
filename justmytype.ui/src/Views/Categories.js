import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import FontCard from '../Components/FontCard';
import { BasicBtn } from '../Components/styles';
import { deleteCategory, getCategoryFonts } from '../data/categoryData';

export default function Categories({ user }) {
  const { name, id } = useParams();
  const [catFonts, setCatFonts] = useState([]);
  const [updateSwitch, setUpdateSwitch] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    getCategoryFonts(id).then(setCatFonts);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[updateSwitch]);
;

const deleteCat = () => {
  deleteCategory(id).then(history.push(`/myfonts`))
}

  return (
    <div>
      <h1>{name}</h1>
      {catFonts
      ? catFonts.map((font) => (
        <FontCard id={font.id} styledText={font.name} fontFamily={font.name} isUserFont fontId={font.id} setUpdateSwitch={setUpdateSwitch} handleShow={() => {}} />
      ))
      : null
      }
      <BasicBtn role="button" color="blue" onClick={deleteCat}>Delete Category</BasicBtn>
    </div>
  )
}
