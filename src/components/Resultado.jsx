import React from 'react'
import styled from '@emotion/styled'

function Resultado({resultado}) {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <div>
      <p> El precio es de:           <span > { PRICE }           </span></p>
      <p> El precio mas alto fue:    <span>  { HIGHDAY }         </span></p>
      <p> El precio mas bajo fue de: <span>  { LOWDAY }          </span></p>
      <p> Variacion ultimas 24hr:    <span > { CHANGEPCT24HOUR } </span></p>
      <p> Ultima actualizacion:      <span > { LASTUPDATE }      </span></p>
    </div>
  )
}

export default Resultado
