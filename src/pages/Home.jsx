import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import { CartContext } from '../context/CartContext'
import model from '../assets/modelll.jpg'

const Home = () => {
  const { cargando } = useContext(CartContext)

  return (
    <>
      <Helmet>
        <title>Glowing Eyes - Maquillaje Profesional</title>
        <meta
          name="description"
          content="Descubrí los mejores productos de maquillaje en Glowing Eyes. Looks naturales o extravagantes, siempre con calidad e innovación."
        />
      </Helmet>

      <Header />

      <div style={{ position: 'relative' }}>
        <img
          src={model}
          alt="Modelo maquillada con estilo glowing"
          style={{
            maskImage: 'linear-gradient(to bottom, rgb(186, 171, 171) 80%, rgba(84, 84, 84, 0))',
            width: '100%',
            height: '500px',
            objectFit: 'cover',
            objectPosition: '50% 20%',
          }}
        />

        <main>
          <h1
            style={{
              fontSize: '40px',
              position: 'absolute',
              top: '20%',
              left: '18%',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            MAQUILLAJE GLOWING EYES: INNOVACIÓN Y ESTILO
          </h1>

          <section
            className="padre"
            aria-label="Descripción de la marca"
          >
            <p>
              Conseguí el look que buscabas con la amplia línea de maquillaje y productos para maquillarse de Glowing Eyes. Colores intensos, increíbles texturas y acabados de calidad, perfectos para acompañarte siempre en tus estilos tanto diarios como para ocasiones especiales. Looks naturales, sutiles, dramáticos o extravagantes. ¡Destacá tus rasgos y lucí radiante!
            </p>
          </section>

          <section aria-label="Listado de productos">
            {cargando ? (
              <img
                src="https://i.gifer.com/YGmj.gif"
                alt="Cargando productos"
                style={{ width: '50%', display: 'block', margin: '0 auto' }}
              />
            ) : (
              <ProductList />
            )}
          </section>
        </main>
      </div>

      <Footer />
    </>
  )
}

export default Home
