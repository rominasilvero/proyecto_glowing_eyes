# 💄 Glowing Eyes - E-commerce React

_E-commerce de productos de maquillaje desarrollado con React, Vite y Bootstrap._

Glowing Eyes ofrece una experiencia de compra simple, visual y moderna, con carrito persistente y un diseño moderno.

## Tecnologías Utilizadas

- Node 18
- React 19 + React DOM
- Vite
- React Router DOM 7
- Bootstrap 5 + React Bootstrap
- React Helmet (SEO)
- React Toastify (notificaciones)
- SweetAlert2 (alertas personalizadas)
- Context API (manejo de productos y carrito)
- ESLint (análisis de código)

## Estructura del Proyecto

```
src/
├── assets/           # Imágenes y recursos
├── components/       # Componentes reutilizables
├── context/          # Manejo global (cart, admin, auth)
├── pages/            # Vistas (Home, Galería de productos, etc.)
├── App.jsx           # Rutas principales
└── main.jsx          # Entrada de React

public/
└── data/             # Datos de ejemplo de usuarios y backup de productos
```

## Funcionalidades Principales

- Listado de productos destacados
- Detalle de producto individual
- Carrito de compras persistente
- Notificaciones con React Toastify
- Alertas con SweetAlert2
- Mejora SEO con React Helmet
- Accesibilidad: imágenes con alt, aria-labels, formularios etiquetados
- Diseño responsive con Bootstrap

## Scripts disponibles

``` bash
   npm run dev       # Servidor local para desarrollo  
```
``` bash
   npm run build     # Compilación para producción
```
``` bash
   npm run preview   # Previsualización del build
```
``` bash
   npm run lint      # Análisis del código con ESLint
```


## Instalación

1. Clonar el repositorio:
   git clone https://github.com/tu-usuario/pre-entrega-proyecto-ecommerce.git

2. Instalar dependencias:
   cd pre-entrega-proyecto-ecommerce
   npm install

3. Iniciar en modo desarrollo:
   npm run dev
