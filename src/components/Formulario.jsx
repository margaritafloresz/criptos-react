import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMoneda from '../hooks/useSelectMoneda'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
  background-color: #9497ff;
  border:none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight:700;
  font-size:150%;
  text-transform: uppercase;
  border-radius: 10px;
  transition: background-color .3s ease;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: #7A7DFE;
    
  }


`
const Formulario = ({setMoneda}) => {

    const [ cripto, setCripto] = useState([])
    const [ error, setError] = useState(false)

    const [ moneda, SelectMoneda] = useSelectMoneda("Select Currency", monedas)
    const [  criptomoneda, SelectCriptomoneda] = useSelectMoneda("Select Criptocurrencies", cripto)
    

    useEffect(() =>{
        const consultarAPI = async () =>{
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const respuesta = await fetch (url)
            const resultado = await respuesta.json()
            

            const arrayCriptos = resultado.Data.map( criptos =>{
              
              const objeto =  {
                id: criptos.CoinInfo.Name,
                nombre: criptos.CoinInfo.FullName

              }
              return(objeto)
            
            })
              setCripto(arrayCriptos)
        }
        consultarAPI();
    },[])

    const handleSubmint = e =>{
      e.preventDefault()

      if ([moneda, criptomoneda].includes('')){
        setError (true)

        return
      }
        setError(false)
        setMoneda({
          moneda,
          criptomoneda
        })
    }
    
  return (
      <>
    {error && <Error> All fields are required </Error>}

    <form
      onSubmit={handleSubmint}
    >

    <SelectMoneda/>
    <SelectCriptomoneda/>
    
   

      <InputSubmit
       type="submit" 
       value= "Quote"
      />
     
    </form>
    </>
  )
}

export default Formulario
