var movimento = 0;
function principal() {
    regrasJogo();
}

function regrasJogo() {

    var elementoId = pegarElemento(event);
    var elementoTexto = document.getElementById(elementoId);
    console.log(elementoTexto);

    

    if (movimento == 0){
            elementoTexto.innerHTML = 'X';


    } else if (movimento == 1) {
            elementoTexto.innerHTML = 'O';
    }

    movimento = 1 - movimento;
   console.log(movimento);
}

function pegarElemento(event){
    event = event || window.event;
    event = event.target.id || event.srcElement.id;

    var eleId = event;
    return eleId;
}
// FIX ME
function resetar(){
    // var limparElementos = document.querySelectorAll('div.container, div.row, div.col');
    // return limparElementos.innerHTML = "";
}
