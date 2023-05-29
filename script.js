const textarea = document.querySelector("textarea");
const btn_encriptar = document.getElementById("encriptar");
const btn_desencriptar = document.getElementById("desencriptar");
const resultado = document.getElementById("mensaje-respuesta");
const btn_copiar = document.getElementById("copiar");
const div_salvapantalla = document.querySelector(".salvapantalla");
const div_respuesta = document.querySelector(".respuesta");

let texto_value = "";
let texto_transformado = "";
let letras = ["e", "i", "a", "o", "u"];
let conversion = ["enter", "imes", "ai", "ober", "ufat"];

// // condición para ocultar el display
if (texto_transformado == "") {
    div_respuesta.style.display = "none";
}

// primero vamos a capturar el texto en el textarea

const capturar = (e) => {

    texto_value = e.target.value;

    return texto_value;

}

textarea.addEventListener("blur", capturar);

// ahora toca encriptarlo

const encriptar = () => {

    texto_transformado = texto_value;

    for (let i = 0; i < texto_transformado.length; i++) {
        texto_transformado = texto_transformado.replaceAll(letras[i], conversion[i]);
    }

    div_salvapantalla.style.display = "none";
    div_respuesta.style.display = "";
    resultado.innerHTML = texto_transformado

    console.log(texto_transformado);
    return texto_transformado;

}

btn_encriptar.addEventListener("click", encriptar);

// desencriptar

const desencriptar = () => {

    texto_transformado = texto_value;

    for (let i = 0; i < texto_transformado.length; i++) {
        texto_transformado = texto_transformado.replaceAll(conversion[i], letras[i]);
    }

    div_salvapantalla.style.display = "none";
    div_respuesta.style.display = "";
    resultado.innerHTML = texto_transformado

    console.log(texto_transformado);
    return texto_transformado;

}

btn_desencriptar.addEventListener("click", desencriptar);

// boton copiar

const copiar = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        return navigator.clipboard.writeText(texto_transformado);
    return Promise.reject("The Clipboard API is not available.");

}

btn_copiar.addEventListener("click", copiar);