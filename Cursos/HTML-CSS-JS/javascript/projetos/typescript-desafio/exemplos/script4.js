function printaValores(n1, n2) {
    console.log(n1 + n2);
}
;
function somarValoresNumericos(n1, n2, callback) {
    var resultado = n1 + n2;
    return callback(resultado);
}
function aoQuadrado(n) {
    return n * n;
}
console.log(somarValoresNumericos(1, 4, aoQuadrado));
