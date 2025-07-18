import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(()=>{
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : []
    })
    
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    const [isAuthenticated, setIsAuth] = useState(false)
    const [busqueda, setBusqueda]= useState("")


    useEffect(() => {
        fetch('https://68229096b342dce8004ea704.mockapi.io/makeupRomina/makeUp')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setTimeout(() => {
                    setProductos(datos)
                    setCargando(false)
                }, 2000)
            })
            .catch(error => {
                console.log('Error', error)
                setCargando(false)
                setError(true)
            })
    }, [])

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    const productosFiltrados = productos.filter((producto)=> producto?.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    const handleAddToCart = (product) => {

        const productInCart = cart.find((item) => item.id === product.id);

        if (productInCart) {
            setCart(cart.map((item) => item.id === product.id ? { ...item, cantidad: product.cantidad } : item));
        } else {
            setCart([...cart, { ...product, cantidad: product.cantidad }]);
        }
        toast.success(`El producto ${product.nombre} agregado al carrito`);
    };

    const handleDeleteFromCart = (product) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === product.id) {
                    if (item.cantidad > 1) {
                        return { ...item, cantidad: item.cantidad - 1 };
                    } else {
                        return null;
                    }
                } else {
                    return item;
                }
            }).filter(item => item !== null);
        });
    };

    const clearCart = () => {
        setCart([])
        localStorage.removeItem("cart");
        toast.info('Compra finalizada!');
    }

    return (
        <CartContext.Provider
            value={

                { cart, productos, cargando, error, handleAddToCart, handleDeleteFromCart, isAuthenticated,setIsAuth, productosFiltrados, busqueda, setBusqueda, clearCart }
            }>
            {children}
        </CartContext.Provider>
    )
}