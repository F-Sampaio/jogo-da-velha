var movimento = 0;
function principal() {

    regrasJogo();
    
}

function regrasJogo() {

    var elementoId = pegarElemento(event);
    var elementoTexto = document.getElementById(elementoId);
    

    if (movimento == 0){
            if (elementoTexto = document.getElementById(elementoId).innerHTML == "") {
                alert(`Casa já preenchida!`);
            } else {
                elementoTexto = document.getElementById(elementoId).innerHTML = 'X'
            }
            console.log('player 1');
    } else if(movimento == 1) {
            if (elementoTexto = document.getElementById(elementoId).innerHTML == ""){
                alert(`Casa já preenchida`);
            } else {
                elementoTexto = document.getElementById(elementoId).innerHTML = 'O';
            }
            console.log('player 2');
    }

   
  movimento = 1 - movimento;
}

function pegarElemento(event){
    event = event || window.event;
    event = event.target.id || event.srcElement.id;

    var eleId = event;
    return eleId;
}
