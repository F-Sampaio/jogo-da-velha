var movimento = 0;
function principal() {

    regrasJogo();
    
}

function regrasJogo() {

    var elementoId = pegarElemento(event);
    var elementoTexto = document.getElementById(elementoId);
    

    if (movimento == 0){
            if (elementoTexto = document.getElementById(elementoId).innerHTML != '') {
                 elementoTexto = document.getElementById(elementoId).innerHTML = 'X'
            } else {
                alert(`Casa já preenchida!`);
            }
    } else {
            if (elementoTexto = document.getElementById(elementoId).innerHTML != ''){
                elementoTexto = document.getElementById(elementoId).innerHTML = 'O';
            } else {
                alert(`Casa já preenchida`);
            }
    }

   
  movimento = 1 - movimento;
//   (movimento == 0) ? console.log('O') : console.log('X');
}

function pegarElemento(event){
    event = event || window.event;
    event = event.target.id || event.srcElement.id;

    var eleId = event;
    return eleId;
}
