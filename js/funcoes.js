var movimento = 0;
var valor = 'X';
function principal() {
    jogo(casa);
}

function jogo(casa){


     elementoClicado = document.getElementById(casa).innerHTML;
        if(elementoClicado == 'X' || elementoClicado == 'O'){
            alert('Casa já preenchida');
        } else {
            document.getElementById(casa).innerHTML = valor;
            if (valor == 'X') {
                valor = 'O';
            } else {
                valor = 'X';
            }
        }
}


function verificar(){
    l1c1 = document.getElementById('l1c1').innerHTML;
    l1c2 = document.getElementById('l1c2').innerHTML;
    l1c3 = document.getElementById('l1c3').innerHTML;
    l2c1 = document.getElementById('l2c1').innerHTML;
    l2c2 = document.getElementById('l2c2').innerHTML;
    l2c3 = document.getElementById('l2c3').innerHTML;
    l3c1 = document.getElementById('l3c1').innerHTML;
    l3c2 = document.getElementById('l3c2').innerHTML;
    l3c3 = document.getElementById('l3c3').innerHTML;

    if (
        // Verifica linha
        ((l1c1 != '') && (l1c2 != '') && (l1c3 != '') && (l1c1 == l1c2) && (l1c2 == l1c3)) ||
        ((l2c1 != '') && (l2c2 != '') && (l2c3 != '') && (l2c1 == l2c2) && (l2c2 == l2c3)) ||
        ((l3c1 != '') && (l3c2 != '') && (l3c3 != '') && (l3c1 == l3c2) && (l3c2 == l3c3)) ||
        // Verifica coluna
        ((l1c1 != '') && (l2c1 != '') && (l3c1 != '') && (l1c1 == l2c1) && (l2c1 == l3c1)) ||
        ((l1c2 != '') && (l2c2 != '') && (l3c2 != '') && (l1c2 == l2c2) && (l2c2 == l3c2)) ||
        ((l1c3 != '') && (l2c3 != '') && (l3c3 != '') && (l1c3 == l2c3) && (l2c3 == l3c3)) ||
        // Verifica diagonal
        ((l1c1 != '') && (l2c2 != '') && (l3c3 != '') && (l1c1 == l2c2) && (l2c2 == l3c3)) ||
        ((l1c3 != '') && (l2c2 != '') && (l3c1 != '') && (l1c3 == l2c2) && (l2c2 == l3c1))) {
          if  (valor == 'O') {
              document.getElementById('mostradorVencedor').innerHTML = 'X';
          } else {
            document.getElementById('mostradorVencedor').innerHTML = 'O';
          }
        resetar()
    }
}


function resetar() {
     for (i = 1; i < 4; i++){
         for(j = 1; j < 4; j++) {
             idCasa = `l${i}c${j}`;
             document.getElementById(idCasa).innerHTML = '';
         }
     }
}
