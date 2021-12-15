import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { BasicBtn, CardDiv, InnerDiv, StyledH1, StyledH2 } from './styles'
import { deleteFont } from '../data/fontData';
import ModalComp from './Modal';
import { removeFontFromCategory } from '../data/categoryData';
  

export default function FontCard({ styledText, addInfo, fontFamily, isUserFont, fontId, setUpdateSwitch, user, showModalButton }) {
  const [showModal, setShowModal] = useState(false);
  const header = () => (
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href={`https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`}rel="stylesheet" />
      </head>
    );

    const deleteUserFont = () => {
      deleteFont(fontId).then(setUpdateSwitch);
    }

    const removeFromCat = () => {
      removeFontFromCategory(fontId).then(setUpdateSwitch);
    };

  return (
    <>
      {header()}
    <CardDiv>
      <InnerDiv>
      {isUserFont
      ? <StyledH1 fontFamily={fontFamily}>{styledText}</StyledH1>
      : <StyledH1 fontFamily={fontFamily}>{styledText}</StyledH1>
      }
      {addInfo
      ? <p>{addInfo}</p>
      : null
      }
      {isUserFont
      ? <div>
          <BasicBtn role="button" color="#187783" onClick={deleteUserFont}>Delete</BasicBtn>
          {showModalButton
          ? <BasicBtn role="button" color="#ef7255" onClick={() => setShowModal(true)}>Category</BasicBtn>
          : <BasicBtn role="button" color="#ef7255" onClick={removeFromCat}>Remove</BasicBtn>
          }
        </div>
      : null
      }
      {isUserFont && showModal
        ? <ModalComp showModal={showModal} setShowModal={setShowModal} user={user} fontId={fontId} />
        : null
      }
      </InnerDiv>
      </CardDiv>
    </>
  )
}

FontCard.propTypes = {
  styledText: PropTypes.string.isRequired,
  addInfo: PropTypes.string,
  fontFamily: PropTypes.string.isRequired,
  isUserFont: PropTypes.bool,
  deleteUserFont: PropTypes.func,
  setUpdateSwitch: PropTypes.func
};

FontCard.defaultProps = {
  addInfo: undefined,
  isUserFont: false,
  deleteUserFont: () => {},
  setUpdateSwitch: () => {}
};
