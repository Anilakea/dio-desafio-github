var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var button = document.getElementById('button');
function adicionarNumero(n1, n2, printar, string) {
    var resultado = n1 + n2;
    if (printar) {
        console.log(string + resultado);
    }
    return n1 + n2;
}
;
var printar = true;
var string = 'O valor é: ';
if (button) {
    button.addEventListener('click', function () {
        if (input1 && input2) {
            adicionarNumero(Number(input1.value), Number(input2.value), printar, string);
        }
        ;
    });
}
;
//# sourceMappingURL=script.js.map