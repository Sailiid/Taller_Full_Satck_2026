# 🌐 Taller Full Stack 2026  
**Aplicación Web: Frontend + Backend + MySQL**

---

## 📌 Descripción

Este proyecto corresponde a una aplicación web full stack donde:

- El frontend captura datos desde un formulario  
- El backend (Node.js + Express) procesa la información  
- La base de datos (MySQL) almacena los datos  

---

## 🧱 Stack tecnológico

| Componente     | Tecnología                 |
|---------------|---------------------------|
| Frontend      | HTML, CSS, JavaScript     |
| Backend       | Node.js + Express         |
| Base de datos | MySQL                     |
| Comunicación  | Fetch API (HTTP - JSON)   |

---

## 📁 Estructura del proyecto

```
TALLER_FULL_STACK_2026/
├── backend/
│ ├── package.json
│ ├── package-lock.json
│ ├── server.js
│ └── node_modules/ (NO incluido en Git)
├── frontend/
│ ├── index.html
│ ├── contacto.html
│ ├── ayuda.html
│ ├── css/
│ ├── js/
│ ├── img/
│ └── video/
├── .gitignore
├── Documentacion.pdf
└── README.md

---

## ⚙️ Requisitos previos

Antes de iniciar, el estudiante debe tener instalado:

- Node.js (incluye npm)  
- MySQL (Workbench recomendado)  
- Visual Studio Code  
- Extensión Live Server  
- Git (opcional)  

---

## 🔧 Instalación
### 1. Clonar el repositorio

```bash
git clone https://github.com/USUARIO/TALLER_FULL_STACK_2026.git
cd TALLER_FULL_STACK_2026


### Backend

```
cd backend
npm install
node server.js
```
Resultado esperado:

Servidor en: http://localhost:3000

---

### Base de datos

```
CREATE DATABASE contactos_db;
USE contactos_db;

CREATE TABLE contactos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100),
  mensaje TEXT
);
```



##  Configurar conexión en Node.js
Archivo: backend/server.js

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", // Ajustar según configuración local
  database: "contactos_db"
});
---

### Frontend

Ejecutar el frontend
Abrir carpeta frontend en Visual Studio Code
Abrir archivo index.html
Ejecutar con Live Server
Abrir `frontend/index.html` con Live Server.

---

## 🔄 Flujo

Formulario → JS → Backend → MySQL → Respuesta

---

## 🧪 Prueba

1. Llenar formulario  
2. Enviar datos  
3. Verificar en MySQL  

```
SELECT * FROM contactos;
```

---

## 📚 Flujo

Formulario (HTML)
↓
JavaScript (fetch)
↓
Backend (Node.js)
↓
MySQL
↓
Respuesta al usuario



⚠️ Problemas comunes

| Problema                | Solución                      |
| ----------------------- | ----------------------------- |
| Error de conexión MySQL | Revisar usuario y contraseña  |
| Puerto ocupado          | Cambiar puerto en `server.js` |
| Error CORS              | Verificar uso de `cors()`     |
| No guarda datos         | Revisar consola del backend   |
| node_modules subido     | Verificar `.gitignore`        |

