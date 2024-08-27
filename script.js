const textArea = document.querySelector("#input-text");
const mensaje = document.querySelector("#output-text");
const errorMessage = document.querySelector("#error-message");

function validarTexto(texto) {
    // Expresión regular para verificar letras con acentos y caracteres especiales
    const regex = /[^a-z\s]/; // Solo permite letras minúsculas y espacios
    console.log("Texto a validar:", texto);
    console.log("¿Texto válido?:", !regex.test(texto));
    return !regex.test(texto);
}

function btnEncriptar() {
    const texto = textArea.value;
    if (!validarTexto(texto)) {
        errorMessage.textContent = "El texto no debe contener letras con acentos, caracteres especiales ni mayúsculas.";
        return;
    }
    errorMessage.textContent = ""; // Limpiar mensaje de error
    const textoEncriptado = encriptar(texto);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    console.log("Texto encriptado:", textoEncriptado);
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar() {
    const texto = textArea.value;
    if (!validarTexto(texto)) {
        errorMessage.textContent = "El texto no debe contener letras con acentos, caracteres especiales ni mayúsculas.";
        return;
    }
    errorMessage.textContent = ""; // Limpiar mensaje de error
    const textoDesencriptado = desencriptar(texto);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    console.log("Texto desencriptado:", textoDesencriptado);
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function copiarAlPortapapeles() {
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}


