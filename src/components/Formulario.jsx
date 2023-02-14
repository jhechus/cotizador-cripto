import React from 'react'
import styled from '@emotion/styled'

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
  return (
    <form>
      <InputSubmit
        type="submit"
        value="cotizar" 
      />
    </form>
  )
}

export default Formulario
