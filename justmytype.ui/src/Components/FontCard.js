import React from 'react'
import PropTypes from 'prop-types';
import { BasicBtn, CardDiv, StyledH1, StyledH2 } from './styles'
import { deleteFont } from '../data/fontData';
  

export default function FontCard({ styledText, addInfo, fontFamily, isUserFont, fontId, setUpdateSwitch }) {
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

  return (
    <>
      {header()}
    <CardDiv>
      {isUserFont
      ? <StyledH2 fontFamily={fontFamily}>{styledText}</StyledH2>
      : <StyledH1 fontFamily={fontFamily}>{styledText}</StyledH1>
      }
      {addInfo
      ? <p>{addInfo}</p>
      : null
      }
      {isUserFont
      ? <div>
          <BasicBtn role="button" color="#FF2ECC" onClick={deleteUserFont}>Delete</BasicBtn>
        </div>
      : null
      }
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
