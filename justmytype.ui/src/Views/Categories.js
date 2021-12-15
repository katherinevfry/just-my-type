import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import FontCard from '../Components/FontCard';
import { BasicBtn, FlexyDiv, LongBtn, StyledH1 } from '../Components/styles';
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
      <StyledH1>{name}</StyledH1>
      {catFonts
      ? catFonts.map((font) => (
        <FlexyDiv>
        <FontCard id={font.id} styledText={font.name} fontFamily={font.name} isUserFont fontId={font.id} setUpdateSwitch={setUpdateSwitch} handleShow={() => {}} />
        </FlexyDiv>
      ))
      : <p>Nothing to see here.</p>
      }
      <LongBtn role="button" color="#187783" onClick={deleteCat}>Delete Category</LongBtn>
    </div>
  )
}
