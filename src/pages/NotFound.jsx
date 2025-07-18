import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div style={{textAlign:'center', paddingTop:'200px'}}>
      <h1>404</h1>
      <p>Ups maquillaje no encontrado</p>
      <button><Link to='/'>Volver al inicio</Link></button>
    </div>
  )
}

export default NotFound

