const usuarioGuardado = localStorage.getItem("usuario");
const btnCerrarSesion = document.getElementById("btnCerrarSesion");

if (!usuarioGuardado) {
    alert("Debe iniciar sesion para ingresar al panel administrativo");
    window.location.href = "login.html";
}

if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener("click", () => {
        localStorage.removeItem("usuario");
        window.location.href = "login.html";
    });
}
