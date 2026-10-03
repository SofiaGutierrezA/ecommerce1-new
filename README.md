# eCommerce Website Soleva

E-commerce de calzado deportivo. El proyecto utiliza una arquitectura separada entre frontend y backend. Elfrontend obtiene los productos mediante peticiones HTTP a la API, mientras que Express se comunica con la base de datos SQLite.
<img width="1911" height="912" alt="soleva1" src="https://github.com/user-attachments/assets/75f7a68e-21fa-46a4-bc8e-ada1ee35efa6" />

# Frontend
HTML
CSS
JavaScript
React
Vite
React Router
Font Awesome
# Backend
Node.js
Express
SQLite
better-sqlite3
CORS
# Funciones
- Catálogo de productos
- Productos separados por categoría
- Página de detalle de cada producto
- Selección de talla
- Carrito de compra
- Añadir y eliminar productos del carrito
- Gestión de productos mediante una API REST
- Persistencia de productos en SQLite
- Gestión de tallas y stock por producto
- Filtros y búsqueda de productos
- Navegación mediante React Router
# API REST
Implementa CRUD (GET, POST, PUT, DELETE) de los productos.

# Instalación
1. Clonar el repositorio
git clone <repository-url>
cd ecommerce1
2. Instalar las dependencias del frontend
npm install
3. Instalar las dependencias del backend
cd backend
npm install
4. Iniciar el backend
npm run dev
El servidor estará disponible en: http://localhost:3000
5. Iniciar el frontend
Desde la carpeta principal: npm run dev

ecommerce1\
├── backend\
│   ├── data\
│   ├── database.sqlite\
│   ├── migrate.js\
│   ├── server.js\
│   └── package.json\
│
├── src\
│   ├── assets\
│   ├── components\
│   ├── pages\
│   ├── App.jsx\
│   └── main.jsx\
│
├── package.json\
├── vite.config.js\
└── README.md\
