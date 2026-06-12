const formLogin = document.getElementById("formLogin");
const inputPassword = document.getElementById("password");
const inputCorreo = document.getElementById("correo");
const mensajeLogin = document.getElementById("mensajeLogin");

function mostrarMensaje(tipo, texto) {
    mensajeLogin.className = `mt-3 text-center text-${tipo}`;
    mensajeLogin.textContent = texto;
}

formLogin.addEventListener("submit", async (event) => {
    event.preventDefault();

    const correo = inputCorreo.value.trim();
    const password = inputPassword.value.trim();

    mostrarMensaje("muted", "Validando datos...");
    mensajeLogin.textContent = "Validando datos...";

    try {
        const respuesta = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                correo: correo,
                password: password
            })
        });

        const datos = await respuesta.json();

        if (datos.ok) {
            localStorage.setItem("usuario", JSON.stringify(datos.usuario));

            mensajeLogin.className = "mt-3 text-center text-success";
            mensajeLogin.textContent = datos.mensaje;

            setTimeout(() => {
                window.location.href = "admin-productos.html";
            }, 1000);
        } else {
            mensajeLogin.className = "mt-3 text-center text-danger";
            mensajeLogin.textContent = datos.mensaje;
        }
    } catch (error) {
        console.error("Error al conectar con el servidor:", error);
        mensajeLogin.className = "mt-3 text-center text-danger";
        mensajeLogin.textContent = "No se pudo conectar con el servidor";
    }
});
