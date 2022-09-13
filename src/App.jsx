import { useState } from "react";
import styled from "@emotion/styled";
import ImagenCripto from './img/imagen-criptos.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width:90%;
  @media(min-width: 992px){
    display:grid;
    grid-template-columns: repeat(2, 1fr)
  }

`;

const Imagen = styled.img `
  max-width: 400px;
  width: 80%;
  width: 100px auto 0 auto;
  display: block;
`


const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #b5c9f8;
  text-align: center;
  font-weight: 700;
  margin-top:90px;
  margin-bottom: 50px;
  font-size:34px;

  &::after{
    content: '';
    width:100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
    margin: 10px auto 0 auto;
  }

`;

function App() {
  return (
      <Contenedor> 
        <Imagen
          src={ImagenCripto}
          alt="imagen de criptomonedas"
        />
            <div> 
               <Heading> Cotiza Criptomoneadas al Instante</Heading>
            </div>
      </Contenedor>
  
  )
}

export default App;
