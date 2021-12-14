import React from 'react'
import { BasicBtn } from './styles'


export default function AuthBtn({ onClick, buttonText }) {
  return (
    <BasicBtn color="#A51080" role="button" onClick={onClick}>{buttonText}</BasicBtn>
  )
}
