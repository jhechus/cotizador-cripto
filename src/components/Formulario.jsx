import {useEffect} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// Diseñando estilos


//Estilo para el input
const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 30px;
    cursor: pointer;
    &:hover{
        background-color: #484acf;
        transition: .5s;
    }
`


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// Función principal del componente

function Formulario() {

    // Usando el hook 
    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
    
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            console.log(resultado.Data)
        }
        consultarAPI();
    }, [])

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// Funcion de la vista

  return (
    <form>

        <SelectMonedas />

        
        
        <InputSubmit
            type="submit"
            value="cotizar" 
        />
    </form>
  )
}

export default Formulario
