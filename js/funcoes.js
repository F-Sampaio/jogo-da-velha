function principal() {

    regrasJogo();
    
}

function regrasJogo() {

    var elementoId = pegarElemento(event);

    console.log(elementoId);
    // var elementoFilho = document.getElementById(elementoId).hasChildNodes();



    // console.log(elementoFilho);

    // var elementoFilho = document.getElementById(elementoId).hasChildNodes();
    
  //Corrigir
    // vez();
    // vez() == 0 ? console.log('Play 1') : console.log('Play 2');
}

function pegarElemento(event){
    event = event || window.event;
    event = event.target.id || event.srcElement.id;

    var eleId = event;
    return eleId;
}

function vez(){
    //0 = X & 1 = O
    var movimento = 0;
    movimento = 1 - movimento;
    return movimento;
}