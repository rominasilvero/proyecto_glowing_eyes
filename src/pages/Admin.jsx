import React, { useState, useEffect, useContext } from "react";
import FormularioProducto from "../components/admin/FormularioProducto";
import FormularioEdicion from "../components/admin/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";


const Admin = () => {

    const { setIsAuth } = useContext(CartContext)

    const {
        productos,
        loading,
        open,
        setOpen,
        openEditor,
        setOpenEditor,
        seleccionado,
        setSeleccionado,
        agregarProducto,
        actualizarProducto,
        eliminarProducto,
    } = useContext(AdminContext)

    const navigate = useNavigate()

    return (
        <div >
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <nav>
                        <ul >
                            <li style={{ paddingLeft: '30%' }}>
                                <button onClick={() => {
                                    setIsAuth(false);
                                    navigate('/');
                                    localStorage.removeItem('isAuth');
                                }}>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </li>
                            <li style={{
                                paddingRight: '35%',
                                position: 'absolute',
                                top: '3%',
                                right: '-20px',

                            }}>
                                <a className="lia" href="/admin">Admin</a>
                            </li>
                        </ul>
                    </nav>

                    <h1 style={{ marginBottom: '90px', marginTop: '90px', paddingLeft: '18%', fontSize: '30px', fontWeight: 'bold', }}>Panel Administrativo</h1>
                    <div style={{
                        justifyContent: 'center',
                        margin: 'auto', gap: '80px 30px', display: 'grid',
                        gridTemplateColumns: '300px 300px 300px',
                    }}>

                        {productos.map((product) => (
                            <li style={{ listStyleType: 'none' }} key={product.id} >
                                <img style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    margin: 'auto',
                                    display: 'grid',
                                    gridTemplateColumns: '300px 350px 350px', textAlign: 'center', alignItems: 'center',
                                    borderRadius: '10px', objectFit: 'cover',
                                }}
                                    src={product.imagen}
                                    alt={product.nombre}

                                />
                                <span style={{ gridTemplateColumns: '300px 300px 300px', textAlign: 'center', margin: 'auto ', display: 'grid', lineHeight: '50px' }}>{product.nombre}

                                </span>
                                <span style={{ gridTemplateColumns: '300px 300px 300px', textAlign: 'center', margin: 'auto', display: 'grid' }}>${product.precio}</span>
                                <div style={{ textAlign: 'center', margin: 'auto ', justifyContent: 'center', marginLeft: '5px', }}>
                                    <button onClick={() => {
                                        setOpenEditor(true)
                                        setSeleccionado(product)
                                    }}>Editar</button>

                                    <button onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                                </div>
                            </li>
                        ))}

                    </div>
                </>
            )
            }

            <button style={{
                justifyContent: 'center',
                margin: 'auto', display: 'flex', marginBottom: '90px', marginTop: '200px'
            }} onClick={() => setOpen(true)}>Agregar producto nuevo</button>
            {open && (<FormularioProducto onAgregar={agregarProducto} />)}
            {openEditor && (<FormularioEdicion productoSeleccionado={seleccionado} onActualizar={actualizarProducto} />)}


        </div >
    );
};

export default Admin;
