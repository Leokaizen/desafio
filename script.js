let textoOriginal = document.getElementById('textoOriginal');
let textoEncriptado = document.getElementById('textoEncriptado');
let btnEncriptar = document.getElementById('btnEncriptar');
let btnDesencriptar = document.getElementById('btnDesencriptar');
let btnCopiar = document.getElementById('btnCopiar');

// Agrega eventos a los botones
btnEncriptar.addEventListener('click', encriptarTexto);
btnDesencriptar.addEventListener('click', desencriptarTexto);
btnCopiar.addEventListener('click', copiarTexto);

function encriptarTexto() {
    let texto = textoOriginal.value.toLowerCase();
    let textoEncriptadoValor = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    textoEncriptado.value = textoEncriptadoValor;
    textoEncriptado.classList.add('activo'); // Mostrar el textarea de resultado
    textoOriginal.value = ""; // Limpiar el textarea original
}

function desencriptarTexto() {
    let textoEncriptadoValor = textoEncriptado.value;
    let textoOriginalValor = textoEncriptadoValor
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    textoOriginal.value = textoOriginalValor;
    textoEncriptado.value = "";
    textoEncriptado.classList.remove('activo'); // Ocultar el textarea de resultado
}

function copiarTexto() {
    textoEncriptado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
}