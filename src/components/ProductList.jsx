import React, { useContext } from 'react'
import Productos from './Productos'
import { CartContext } from '../context/CartContext'
import { GiPadlock } from "react-icons/gi";
import { RiBankCardLine } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";



const ProductList = () => {

    const { productos } = useContext(CartContext)

    return (
        <>
            <h2 style={{ paddingLeft: '18%', fontWeight: 'bold', fontSize: '14px', marginTop: '75px' }}>LO MÁS VENDIDOS</h2>
            '
            <div style={{
                justifyContent: 'center',
                margin: 'auto', gap: '40px 20px', display: 'grid',
                gridTemplateColumns: '300px 300px 300px'
            }}>
                {
                    productos.map(producto => (
                        <Productos key={producto.id} producto={producto} />
                    ))
                }
            </div>
            <hr style={{ marginTop: '100px' }}></hr>
            <div style={{
                justifyContent: 'center',
                margin: 'auto', display: 'grid',
                gridTemplateColumns: '300px 300px 300px', 
                textAlign: 'center', marginBottom: '10px'
            }}>

                <h1 className='h1r'><LiaShippingFastSolid size={18} />
                    ENVIO GRATIS A PARTIR DE $80.000</h1>
                <h1 style={{
                    fontWeight: 'bold',
                    fontSize: '14px', paddingLeft: '40px'
                }}><RiBankCardLine size={18} />3 Y 6 CUOTAS </h1>
                <h1 className='h1r'><GiPadlock size={18} /> COMPRA DE MANERA SEGURA </h1>
                <p style={{}}>En todas tus compras</p>
                <p style={{ paddingLeft: '40px' }}>Con tarjetas bancarias</p>
                <p>Protegemos tus datos</p>

            </div>

        </>
    )
}

export default ProductList
