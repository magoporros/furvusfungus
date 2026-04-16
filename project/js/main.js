document.getElementById("postForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    const imagenInput = document.getElementById("imagen");

    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const header = document.createElement("div");
    header.classList.add("post-header");

    header.innerHTML = `
        <span class="nombre">${usuario}</span> 
        <span class="email">(${email})</span>
    `;

    postDiv.appendChild(header);

    if (imagenInput.files.length > 0) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(imagenInput.files[0]);
        postDiv.appendChild(img);
    }

    const texto = document.createElement("div");
    texto.classList.add("mensaje");
    texto.textContent = mensaje;

    postDiv.appendChild(texto);

    const divider = document.createElement("div");
    divider.classList.add("divider");

    document.getElementById("posts").prepend(postDiv);
    document.getElementById("posts").prepend(divider);

    document.getElementById("postForm").reset();
});
document.addEventListener("DOMContentLoaded", () => {
    const threadForm = document.getElementById("threadForm");
    const hilosContainer = document.getElementById("hilos");

    // Escuchar el evento de envío del formulario
    threadForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Obtener los valores del formulario
        const titulo = document.getElementById("titulo").value.trim();
        const contenido = document.getElementById("contenido").value.trim();
        const imagenInput = document.getElementById("imagen");

        // Validar que el título y el contenido no estén vacíos
        if (!titulo || !contenido) {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        // Crear un nuevo hilo
        const hiloDiv = document.createElement("div");
        hiloDiv.classList.add("hilo");

        // Agregar el título
        const hiloTitulo = document.createElement("h3");
        hiloTitulo.textContent = titulo;
        hiloDiv.appendChild(hiloTitulo);

        // Agregar el contenido
        const hiloContenido = document.createElement("p");
        hiloContenido.textContent = contenido;
        hiloDiv.appendChild(hiloContenido);

        // Agregar la imagen si se subió una
        if (imagenInput.files.length > 0) {
            const img = document.createElement("img");
            img.src = URL.createObjectURL(imagenInput.files[0]);
            img.alt = "Imagen del hilo";
            hiloDiv.appendChild(img);
        }

        // Agregar el hilo al contenedor de hilos
        hilosContainer.prepend(hiloDiv);

        // Limpiar el formulario
        threadForm.reset();
    });
});
