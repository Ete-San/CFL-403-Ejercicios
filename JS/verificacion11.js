function verifyName() {
    let name = document.getElementById("name").value
    if (name.includes(" ")) {
        console.log("No se permiten espacios en el nombre")
    } else {
        console.log("Perfecto!")
    }
}

function verifyContraseña() {
    let clave = document.getElementById("password").value
    if (clave.includes(document.getElementById("confirm").value)) {
        console.log("La clave es correcta")
    } else {
        console.log("La Clave no coincide")
    }
}

