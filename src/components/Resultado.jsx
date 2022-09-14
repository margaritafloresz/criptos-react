import styled from '@emotion/styled'

  const Resultados = styled.div`
    color: #f4f4f4;
    font-family: 'Lato', sans-serif;
    align-items: center;
    display:flex;
    gap: 1rem;
    margin-top:30px;
  `

  const Texto = styled.p`
    font-size:20px;

span{
  font-weight: 700;
}

  `

const Precio = styled.p`
  font-size:24px;

  span{
    font-weight: 700;
  }

  
`
const Imagen = styled.img`
  display:block;
  width: 150px;


`



const Resultado = ({resultado}) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado 
  return (
    <Resultados>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`}
       alt="Imagen cripto"
       
       />

      <div>
        <Precio>The price is : <span>{PRICE}</span></Precio>
        <Texto>The Higday is : <span>{HIGHDAY}</span></Texto>
        <Texto>The Lowday is : <span>{LOWDAY}</span></Texto>
        <Texto>Variation last 24 hours is : <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>The last update is  : <span>{LASTUPDATE}</span></Texto>
        </div>
    </Resultados>
  )
}

export default Resultado
