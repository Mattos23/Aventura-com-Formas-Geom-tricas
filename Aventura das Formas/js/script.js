
function calcularArea() {
    var lado = parseFloat(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");

    if (!isNaN(lado)) {
        var area = lado * lado;
        resultado.innerHTML = "<h4><strong>A área do quadrado é: </strong></h4>" + area;
    } else {
        resultado.innerHTML = "<h4><strong>Por favor, insira um valor válido para o lado do quadrado.</strong></h4>";
    }
}

function calcularTriangulo() {
     var baseA = parseFloat(document.getElementById("baseA").value);
     var baseB = parseFloat(document.getElementById("baseB").value);
     var altura = parseFloat(document.getElementById("altura").value);
     var resultadoTriangulo = document.getElementById("resultadoTriangulo");

     
     var area = (baseA + baseB) * altura / 2
     resultadoTriangulo.innerHTML = "<h4><strong>A área do trapezoide Irregular é: </strong></h4>" + area;
   
}

function calcularPentagono(){
    var ladop = parseFloat(document.getElementById("ladop").value);
    var apotema = parseFloat(document.getElementById("apotema").value);
    var resultadoPentagono = document.getElementById("resultadoPentagono");

    var areap = ( 5 * ladop) * apotema
    resultadoPentagono.innerHTML = "<h4><strong>A área do pentágono é </strong></h4>" + areap;
}

function calcularHexagono() {
    var ladohe = parseFloat(document.getElementById("ladohe").value);
    var resultadoHexagono = document.getElementById ("resultadoHexagono");

    var areahex = (3 * Math.sqrt(3) * Math.pow(ladohe, 2)) / 2
    resultadoHexagono.innerHTML = "<h4><strong>A área do Hexagono é </strong></h4> " + areahex;

}

function calcularHeptagono() {
    var apotemaHeptagono = parseFloat(document.getElementById("apotemaHeptagono").value);
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var resultadoHeptagono = document.getElementById("resultadoHeptagono");

    var areahep = (apotemaHeptagono * comprimento) / 2;
    resultadoHeptagono.innerHTML = "<h4><strong>A área do Heptágono é </strong></h4>" + areahep;

}

function mostrarformas(forma){
     document.getElementById("pentagono").style.display = "none";
     document.getElementById("hexagono").style.display = "none";
     document.getElementById("heptagono").style.display = "none";
     document.getElementById(forma).style.display = "block";
}

function calcularCirculo(){
    var angulo = parseFloat(document.getElementById("angulo").value);
    var raio = parseFloat(document.getElementById("raio").value);
    var resultadoCirculo = document.getElementById("resultadoCirculo");

    var anguloSetorRadianos = (angulo * Math.PI) / 180;
    var areaSetor = (anguloSetorRadianos / (2 * Math.PI)) * Math.PI * Math.pow(raio, 2);
    resultadoCirculo.innerHTML = "<h4><strong>A área do circulo é </strong></h4>" + areaSetor;

}