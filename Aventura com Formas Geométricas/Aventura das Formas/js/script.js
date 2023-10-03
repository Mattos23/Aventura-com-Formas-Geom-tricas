function calcularQuadrado(){
    var numero = parseFloat(document.getElementById("numero").value);

    var quadrado = numero * numero;

    document.getElementById("resultado").textContent = quadrado;
}

