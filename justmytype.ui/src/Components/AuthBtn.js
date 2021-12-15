import React from 'react'
import { BasicBtn } from './styles'


export default function AuthBtn({ onClick, buttonText }) {
  return (
    <BasicBtn color="#187783" role="button" onClick={onClick}>{buttonText}</BasicBtn>
  )
}
