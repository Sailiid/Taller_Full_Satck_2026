const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// Permitir comunicación con frontend
app.use(cors());
app.use(express.json());

// Configuración de conexión
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Lianestefania15*",
    database: "contactos_db"
});

// Conectar a MySQL
db.connect((err) => {
    if (err) {
        console.error("Error de conexión:", err);
    } else {
        console.log("Conectado a MySQL");
    }
});

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Servidor conectado a MySQL");
});


// ✅ RUTA PARA GUARDAR DATOS
app.post("/guardar", (req, res) => {

    const { nombre, correo, asunto, mensaje } = req.body;

    console.log("Datos recibidos:", req.body);

    if (!nombre || !correo || !asunto || !mensaje ) {
        return res.status(400).send("Datos incompletos");
    }

    const sql = "INSERT INTO contactos (nombre, correo, asunto, mensaje) VALUES (?, ?, ?, ?)";

    db.query(sql, [nombre, correo, asunto, mensaje], (err, result) => {
        if (err) {
            console.error("Error SQL:", err);
            return res.status(500).send("Error en servidor");
        }

        console.log("Registro insertado:", result);
        res.send("Datos guardados correctamente");
    });
});

// Validar campos obligatorios para productos
function validarProducto(producto) {
    const { nombre, descripcion, precio, categoria, stock, imagen } = producto;

    if (
        !nombre ||
        !descripcion ||
        precio === undefined ||
        precio === null ||
        precio === "" ||
        !categoria ||
        stock === undefined ||
        stock === null ||
        stock === "" ||
        !imagen
    ) {
        return false;
    }

    return true;
}

// Listar productos
app.get("/productos", (req, res) => {
    const sql = "SELECT * FROM productos";

    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error al listar productos:", err);
            return res.status(500).send("Error en servidor");
        }

        res.json(result);
    });
});

// Registrar producto
app.post("/productos", (req, res) => {
    const { nombre, descripcion, precio, categoria, stock, imagen } = req.body;

    if (!validarProducto(req.body)) {
        return res.status(400).send("Todos los campos del producto son obligatorios");
    }

    const sql = "INSERT INTO productos (nombre, descripcion, precio, categoria, stock, imagen) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(sql, [nombre, descripcion, precio, categoria, stock, imagen], (err, result) => {
        if (err) {
            console.error("Error al registrar producto:", err);
            return res.status(500).send("Error en servidor");
        }

        res.status(201).json({
            mensaje: "Producto registrado correctamente",
            id: result.insertId
        });
    });
});

// Actualizar producto
app.put("/productos/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, categoria, stock, imagen } = req.body;

    if (!validarProducto(req.body)) {
        return res.status(400).send("Todos los campos del producto son obligatorios");
    }

    const sql = "UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, categoria = ?, stock = ?, imagen = ? WHERE id = ?";

    db.query(sql, [nombre, descripcion, precio, categoria, stock, imagen, id], (err, result) => {
        if (err) {
            console.error("Error al actualizar producto:", err);
            return res.status(500).send("Error en servidor");
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("Producto no encontrado");
        }

        res.send("Producto actualizado correctamente");
    });
});

// Eliminar producto
app.delete("/productos/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM productos WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Error al eliminar producto:", err);
            return res.status(500).send("Error en servidor");
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("Producto no encontrado");
        }

        res.send("Producto eliminado correctamente");
    });
});


// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});
