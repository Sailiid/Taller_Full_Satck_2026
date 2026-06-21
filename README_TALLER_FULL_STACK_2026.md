# 🛒 Tecnohogar

## 1. Nombre de la tienda virtual
**Tecnohogar**

## 2. Integrantes del grupo
- Neymar Sailid Mendoza Moro (desarrolladora única)

## 3. Descripción de la tienda
Tecnohogar es una tienda virtual básica y funcional dedicada a la venta de productos tecnológicos como teclados, computadores, mouse, cables y accesorios.  
El diseño utiliza una paleta de colores **azules y grises**, con una estructura simple y páginas esenciales para la navegación; como el inicio ayuda, productos, contato y login administrativo. 

## 4. Objetivo del proyecto
Este proyecto corresponde a la **Entrega final del Técnico en Programación de Software**.  
El objetivo es dsarrollar una tienda virtual funcional y responsiva, aplicando los conocimientos adquiridos en programación Full Stack mediante el uso de HTML, CSS, JavaScript, Node.js, MySQL y Bootstrap, con el fin de integrar en un solo sistema el diseño de interfaz, la lógica de negocio y la gestión de datos. Este proyecto busca simular un entorno real de comercio electrónico, fortaleciendo las competencias técnicas como estudiante en la construcción de aplicaciones web completas, con el fin de prepararme para enfrentar retos profesionales en el ámbito del desarrollo de software y el emprendimiento digital.

## 5. Tecnologías utilizadas
- **Frontend:** HTML5, CSS3, Bootstrap  
- **Backend:** Node.js con Express  
- **Base de datos:** MySQL  
- **Entorno de desarrollo:** Visual Studio Code  

## 6. Estructura del proyecto
TALLER_FULL_SATCK_2026/
├── backend/
│   ├── node_modules/
│   ├── server.js
│   ├── package-lock.json
│   └── package.json
│
├── database/
│   └── script_base_datos.sql
│
├── frontend/
│   └────── index.html
│       │── ayuda.html
│       │── contacto.html
│       │── login.html
│       │── productos.html
│       ├── css/
│       │   └──estilos.css
│       ├── js/
│       │   ├──auth.js
│       │   ├──login.js
│       │   ├──productos.js
│       │   └──script.js
│       └── img/
│
├── .gitattributes
├── .gitignore
├── AGENTS.md
└── README.md
## 7. Instrucciones de instalación y ejecución
1. Clonar el repositorio:
   ```bash
   git clone <URL-del-repositorio>
2. Instalar dependencias en el backend:
  bash
    cd backend
    npm install
3. Configurar la base de datos en MySQL ejecutando:
   ```sql
   source database/script_base_datos.sql;
4. Iniciar el servidor:
   ```bash
   node server.js
5. Abrir index.html en el navegador para visualizar la tienda.

## 8. Funcionalidades implementadas

- Página principal con productos destacados.
- Sección de ayuda y contacto con formulario.
- Página de login para usuarios.
- Listado de productos con categorías y precios.
- Conexión a base de datos MySQL para gestión de productos/contactos.

## 9. Flujo de información
- El frontend solicita datos al backend mediante fetch.
- El backend procesa las solicitudes y consulta la base de datos MySQL.
- Los resultados se devuelven al frontend, que renderiza la información en las páginas HTML.

## 10. Pruebas realizadas
- Validación de formularios (contacto, login).
- Conexión correcta entre frontend, backend y base de datos.
- Visualización de productos en diferentes dispositivos (responsive con Bootstrap).
## 11. Enlace del video de sustentación
