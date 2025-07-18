import React, { useContext } from 'react'
import './styleCart.css'
import { CartContext } from '../context/CartContext'

const Cart = ({ isOpen, onClose }) => {
    const { cart, handleDeleteFromCart, clearCart } = useContext(CartContext);
    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2 style={{ color: 'black', fontFamily: 'sans-serif', fontSize: '19px', paddingLeft: '20px' }}>Carrito de Compras</h2>
                <button onClick={onClose} className='close-button'>X</button>
            </div>
            <div className='cart-content'>
                {cart.length === 0 ? (<p style={{ color: 'red', margin: 'auto center', textAlign: 'center' }}>El carrito de compras esta vacío</p>) :
                    (<><ul className='cart-item'>
                        {cart.map((item, index) => (
                            <li key={item.id} style={{ color: 'black' }}>
                                {item.nombre} - ${item.precio} - {item.cantidad}
                                <button style={{ padding: '6px' }} onClick={() => handleDeleteFromCart(item)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                        <div className='cart-footer'>
                            <p style={{ color: 'blue' }}>Total: ${cart.reduce((total, item) => total + (item.precio * item.cantidad), 0)}</p>
                            <button style={{color: 'black'}} className='btnCheckout' onClick={() => clearCart()}>Finalizar Compra</button>
                        </div>
                    </>)}
            </div>
        </div>
    )
}

export default Cart
