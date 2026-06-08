console.log("Script cargado correctamente");

// Capturar formulario
const formulario = document.getElementById("formulario");

if (formulario) {
  formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    const respuesta = document.getElementById("respuesta");

    if (!nombre || !correo || !asunto || !mensaje) {
      respuesta.textContent = "Todos los campos son obligatorios.";
      return;
    }

    fetch("http://localhost:3000/guardar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, correo, asunto, mensaje })
    })
    .then(res => res.text())
    .then(data => {
      respuesta.textContent = data; // muestra respuesta del servidor
      formulario.reset();
    })
    .catch(error => {
      console.error("Error:", error);
      respuesta.textContent = "Error al guardar los datos";
    });
  });
}
