import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/make-ups.gif'
import { CartContext } from '../context/CartContext'
import prueba from '../assets/prueba.jpg'


const GaleriaDeProductos = () => {

  const { cargando } = useContext(CartContext)
  return (
    <>
      <Header />

      <img
        style={{
          width: '100%',
          height: '500px',
          objectFit: 'cover',
          objectPosition: '25% 25%',
          backgroundPosition: 'top center',
          maskImage: 'linear-gradient(to bottom, rgb(186, 171, 171) 80%, rgba(84, 84, 84, 0))'
        }}
        src={prueba}
        alt="imagen principal"
      />

      <div style={{  marginTop: '90px', marginBottom: '100px', marginLeft:'200px' }}>
        <h1
          style={{
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '30px',
           
          }}
        >
          PRODUCTOS<br />DESTACADOS
        </h1>

        <p
          style={{
            color: 'violet',
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '30px',
            marginBottom: '70px',
          }}
        >
          ¡Descubrí los favoritos que Glowing Eyes tiene para vos!
        </p>
      </div>

      {cargando ? (
        <img
          src={loading}
          alt="Cargando productos"
          style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}
        />
      ) : (
        <ProductList />
      )}

      <Footer />
    </>

  )
}

export default GaleriaDeProductos
