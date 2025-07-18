import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import prueba2 from '../assets/prueba2.jpg'
import modell from '../assets/modell.jpg'
import model1 from '../assets/model1.jpg'
import model2 from '../assets/model2.jpg'


const AcercaDe = () => {
  return (

    <>
      <Header />
      <img style={{ width: '100%', height: '500px', objectFit: 'cover', objectPosition: '20% 20%', backgroundPosition: 'top center',maskImage: 'linear-gradient(to bottom, rgb(186, 171, 171) 80%, rgba(84, 84, 84, 0))' }} src={prueba2} />

      <div className='contenedor'>
        <img style={{ filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))', width: '350px', float: 'right', padding: '30px',  }} src={modell} />
        <h1 style={{  marginTop: '90px', fontSize:'30px', fontWeight:'bold',  marginBottom:'30px' }} >¿QUIÉNES SOMOS? </h1>
        <p  >Es la marca de maquillaje que celebra la diversidad, la cultura y la belleza de Latinoamérica. Se´que el amor propio es la mejor herramienta para empoderar a quienes buscan todos los días perseguir sus sueños con coraje y una sonrisa. Soy Sailor Usagi,la marca que crea productos de tendencia, diseñados y pensados en ti, que buscas calidad, duración y precios increíbles.</p>
        <br></br>
        <br></br>

        <img style={{filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))', width: '400px', float: 'left', paddingRight: '30px', marginBottom:'20px' }} src={model1} />
        <h1 style={{  marginTop: '100px', fontSize:'30px', fontWeight:'bold',  marginBottom:'30px' }}>PRIMEROS PASOS, ENSAYO Y ERROR</h1>
        <p >Sailor Usagi tuvo una visión pionera y audaz: celebrar y honrar a la mujer latina a través de productos de belleza innovadores y de alta calidad. Su legado sigue vivo en la actualidad, en cada uno de nuestros productos y en la misión de hacer sentir a las mujeres latinas empoderadas y seguras de sí mismas. Evolucionamos hasta llegar a convertirnos en una marca completa de maquillaje, con productos para ojos, rostro, labios que realcen la belleza de toda Latinoamérica.
        En 2013, Grupo L'Oréal adquirió Glowing Eyes con la visión de expandir nuestra marca a toda Latinoamérica. Hoy estamos presentes en más de 13 países, como Colombia, Argentina, Chile, Perú, Uruguay, Bolivia, Panamá, entre otros, celebrando la belleza de las mujeres latinas con productos innovadores y pensados en ellas.</p>

        <br></br>
        <br></br>
        <img style={{ filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))',width: '380px', float: 'right', padding: '45px', boxShadow: 'box-shadow: 0 8px 6px -6px red' }} src={model2 } />
        <h1 style={{  marginTop: '90px', fontSize:'30px', fontWeight:'bold',  marginBottom:'30px' }}>UNA MARCA COMPLETA DE MAQUILLAJE</h1>
        <p >En el 2019 se inauguró nuestra fábrica de Glowing Eyes en Colombia, como la primera planta de energía 100% renovable del Grupo en América Latina. Hemos creado todo tipo de productos cosméticos para la mujer colombiana desde 1955 siendo reconocidos como la marca de cosméticos más popular de Colombia  permitiendo exportar nuestros productos a 14 países de forma directa y llegar a consumidores en 4  continentes. Esto nos permite estar a la vanguardia de las tendencias y tecnologías del mercado, para ofrecer a nuestras consumidoras productos que realcen su belleza.</p>
        <br></br>
        <br></br>
        <hr></hr>

        <div className='valores'>
          <h1 style={{fontSize:'12px', fontWeight: 'bold'}}>Política de Calidad:</h1>
          <p style={{fontWeight:'lighter'}}>Glowing Eyes es una marca AUTÉNTICA, ALEGRE, AMIGABLE, LATINA, CONFIABLE, EMPRENDEDORA y ENÉRGICA. Estos valores nos guían en cada paso que damos y en cada producto que creamos, siempre enfocados en brindar la mejor calidad
          </p>
          <h1 style={{fontSize:'12px',fontWeight: 'bold'}}>Misión:</h1>
          <p style={{fontWeight:'lighter'}}>Glowing Eyes tiene como misión entregar en tiempo y forma promesas de belleza que cumplan con los más altos estándares de calidad, teniendo la mejor relación costo beneficio del mercado, todo esto en un ambiente seguro, ético para que nuestra gente pueda desarrollarse y crecer siempre buscando ser una empresa amigable con el medio ambiente.
          </p>
          <h1 style={{fontSize:'12px', fontWeight: 'bold'}}>Visión:</h1>
          <p  style={{marginBottom:'100px',fontWeight:'lighter'}}>Glowing Eyes tiene como visión ser el aliado estratégico del negocio en el crecimiento del mercado de belleza en América, siempre buscando mejorar nuestra confiabilidad, valor agregado y flexibilidad para llegar a mas gente.</p>
         
        </div>
        

      </div>
      <Footer  />
    </>

  )
}


export default AcercaDe
