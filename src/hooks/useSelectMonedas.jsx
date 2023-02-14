import React from 'react'
import styled from '@emotion/styled'

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// Diseñando estilos

const Label = styled.label`
    color: #fff;
`


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// Función principal del componente

function useSelectMonedas(label, opciones) {
  
    const SelectMonedas = () => (
        <>
            <Label>  {label} </Label>
            <select name="" id="">
                <option value="">Seleccione</option>

                {opciones.map( opcion => (
                    <option
                        key={ opcion.id }
                        value={opcion.id}
                    >
                        {opcion.nombre}
                    </option>
                ))}
            </select>
        </>
    )

    return [ SelectMonedas]
}

export default useSelectMonedas
