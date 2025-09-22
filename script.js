// Array para almacenar los amigos secretos
// Función para agregar + un amigo
let amigos = [];

function agregarAmigo() {
    let input = document.querySelector("input");
    let nombre = input.value.trim();

    if (nombre !== "") {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indice = Math.floor(Math.random() * amigos.length);
        document.getElementById("resultado").textContent = 
            "🎉 Tu amigo secreto es: " + amigos[indice];
    } else {
        alert("No hay amigos para sortear 😅");
    }
}

function reiniciarJuego() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").textContent = "";
}
