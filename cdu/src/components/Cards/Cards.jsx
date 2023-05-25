import React from 'react'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'


function Cards() {

const datosguardados = useSelector((state)=>state.resultados);

  return (
    <div>
        <Card datosguardados = {datosguardados}/>
    </div>
  )
}

export default Cards