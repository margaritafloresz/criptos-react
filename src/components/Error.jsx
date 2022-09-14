import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div `
    background-color: #B7322C;
    color: white;
    padding:12px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight:700;
    text-align:center;
    margin-bottom:15px;

`


const Error = ({children}) => {
  return (
    <Texto>
      {children}

   
    </Texto>
  )
}

export default Error
