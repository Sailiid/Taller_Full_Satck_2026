const API_URL = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", () => {
    const formProducto = document.getElementById("formProducto");
    const tablaProductos = document.getElementById("tablaProductos");
    const catalogoProductos = document.getElementById("catalogoProductos");

    if (catalogoProductos) {
        listarProductosCatalogo(catalogoProductos);
    }

    // Evita errores si este archivo se carga en una pagina que no sea admin-productos.html.
    if (!formProducto || !tablaProductos) {
        return;
    }

    const cuerpoTabla = tablaProductos.querySelector("tbody");
    const botonGuardar = formProducto.querySelector("button[type='submit']");
    let idProductoEditar = null;

    const mensaje = document.createElement("div");
    mensaje.className = "alert d-none";
    formProducto.parentNode.insertBefore(mensaje, formProducto);

    function mostrarMensaje(texto, tipo) {
        mensaje.textContent = texto;
        mensaje.className = `alert alert-${tipo}`;
        console.log(texto);
    }

    function obtenerDatosFormulario() {
        return {
            nombre: document.getElementById("nombre").value.trim(),
            descripcion: document.getElementById("descripcion").value.trim(),
            precio: document.getElementById("precio").value,
            categoria: document.getElementById("categoria").value.trim(),
            stock: document.getElementById("stock").value,
            imagen: document.getElementById("imagen").value.trim()
        };
    }

    function limpiarFormulario() {
        formProducto.reset();
        idProductoEditar = null;
        botonGuardar.textContent = "Guardar producto";
    }

    function crearCelda(texto) {
        const celda = document.createElement("td");
        celda.textContent = texto;
        return celda;
    }

    function mostrarProductos(productos) {
        cuerpoTabla.innerHTML = "";

        if (productos.length === 0) {
            const fila = document.createElement("tr");
            const celda = document.createElement("td");

            celda.colSpan = 7;
            celda.className = "text-center";
            celda.textContent = "No hay productos registrados";

            fila.appendChild(celda);
            cuerpoTabla.appendChild(fila);
            return;
        }

        productos.forEach((producto) => {
            const fila = document.createElement("tr");

            fila.appendChild(crearCelda(producto.nombre));
            fila.appendChild(crearCelda(producto.descripcion));
            fila.appendChild(crearCelda(`$${producto.precio}`));
            fila.appendChild(crearCelda(producto.categoria));
            fila.appendChild(crearCelda(producto.stock));
            fila.appendChild(crearCelda(producto.imagen));

            const celdaAcciones = document.createElement("td");
            const botonEditar = document.createElement("button");
            const botonEliminar = document.createElement("button");

            botonEditar.type = "button";
            botonEditar.className = "btn btn-warning btn-sm me-2";
            botonEditar.textContent = "Editar";
            botonEditar.addEventListener("click", () => cargarProductoEnFormulario(producto));

            botonEliminar.type = "button";
            botonEliminar.className = "btn btn-danger btn-sm";
            botonEliminar.textContent = "Eliminar";
            botonEliminar.addEventListener("click", () => eliminarProducto(producto.id));

            celdaAcciones.appendChild(botonEditar);
            celdaAcciones.appendChild(botonEliminar);
            fila.appendChild(celdaAcciones);

            cuerpoTabla.appendChild(fila);
        });
    }

    async function listarProductos() {
        try {
            const respuesta = await fetch(`${API_URL}/productos`);
            const productos = await respuesta.json();

            mostrarProductos(productos);
        } catch (error) {
            console.error("Error al listar productos:", error);
            mostrarMensaje("No se pudieron cargar los productos", "danger");
        }
    }

    async function guardarProducto(producto) {
        const url = idProductoEditar
            ? `${API_URL}/productos/${idProductoEditar}`
            : `${API_URL}/productos`;

        const metodo = idProductoEditar ? "PUT" : "POST";

        const respuesta = await fetch(url, {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });

        if (!respuesta.ok) {
            throw new Error("No se pudo guardar el producto");
        }
    }

    function cargarProductoEnFormulario(producto) {
        document.getElementById("nombre").value = producto.nombre;
        document.getElementById("descripcion").value = producto.descripcion;
        document.getElementById("precio").value = producto.precio;
        document.getElementById("categoria").value = producto.categoria;
        document.getElementById("stock").value = producto.stock;
        document.getElementById("imagen").value = producto.imagen;

        idProductoEditar = producto.id;
        botonGuardar.textContent = "Actualizar producto";
        mostrarMensaje("Producto listo para editar", "info");
    }

    async function eliminarProducto(id) {
        const confirmar = confirm("Deseas eliminar este producto?");

        if (!confirmar) {
            return;
        }

        try {
            const respuesta = await fetch(`${API_URL}/productos/${id}`, {
                method: "DELETE"
            });

            if (!respuesta.ok) {
                throw new Error("No se pudo eliminar el producto");
            }

            mostrarMensaje("Producto eliminado correctamente", "success");
            listarProductos();
        } catch (error) {
            console.error("Error al eliminar producto:", error);
            mostrarMensaje("Error al eliminar el producto", "danger");
        }
    }

    formProducto.addEventListener("submit", async (event) => {
        event.preventDefault();

        const producto = obtenerDatosFormulario();

        if (
            !producto.nombre ||
            !producto.descripcion ||
            !producto.precio ||
            !producto.categoria ||
            !producto.stock ||
            !producto.imagen
        ) {
            mostrarMensaje("Todos los campos son obligatorios", "warning");
            return;
        }

        try {
            await guardarProducto(producto);
            mostrarMensaje("Producto guardado correctamente", "success");
            limpiarFormulario();
            listarProductos();
        } catch (error) {
            console.error("Error al guardar producto:", error);
            mostrarMensaje("Error al guardar el producto", "danger");
        }
    });

    listarProductos();
});

async function listarProductosCatalogo(catalogoProductos) {
    try {
        const respuesta = await fetch(`${API_URL}/productos`);
        const productos = await respuesta.json();

        mostrarCatalogo(productos, catalogoProductos);
    } catch (error) {
        console.error("Error al cargar el catalogo:", error);
        catalogoProductos.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger text-center">
                    No se pudieron cargar los productos.
                </div>
            </div>
        `;
    }
}

function mostrarCatalogo(productos, catalogoProductos) {
    catalogoProductos.innerHTML = "";

    if (productos.length === 0) {
        catalogoProductos.innerHTML = `
            <div class="col-12">
                <div class="alert alert-info text-center">
                    No hay productos registrados.
                </div>
            </div>
        `;
        return;
    }

    productos.forEach((producto) => {
        const columna = document.createElement("div");
        const imagen = producto.imagen || "https://via.placeholder.com/600x400?text=Producto";

        columna.className = "col-12 col-md-6 col-lg-4";
        columna.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${imagen}" class="card-img-top img-card-producto" alt="${producto.nombre}">
                <div class="card-body d-flex flex-column">
                    <span class="badge text-bg-primary align-self-start mb-2">${producto.categoria}</span>
                    <h2 class="h5 card-title">${producto.nombre}</h2>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="mb-1"><strong>Precio:</strong> $${producto.precio}</p>
                    <p class="mb-3"><strong>Stock:</strong> ${producto.stock}</p>
                    <button type="button" class="btn btn-primary mt-auto">Ver producto</button>
                </div>
            </div>
        `;

        catalogoProductos.appendChild(columna);
    });
}
