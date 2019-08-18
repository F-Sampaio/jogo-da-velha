
var movimento = 1;
var valor = 'X';
var vitoriaX = 0;
var vitoriaO = 0;
var empateXO = 0;
var empate = true;
var empateContador = 0;

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
            empateContador++;
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

    if ( //jogo normal
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
              vitoriaX++;
              document.getElementById('badgeX').innerHTML = vitoriaX;
              empateContador = 0;
              empate = false;
          } else {
              vitoriaO++;
                document.getElementById('badgeO').innerHTML = vitoriaO;
                empateContador = 0;
                empate = false;
          } 
          resetar()

        } else if(empate && empateContador == 9) {
            empateXO++;
            document.getElementById('badgeEmpate').innerHTML = empateXO;
            empateContador = 0;
        }
}


function resetar() {
     for (i = 1; i < 4; i++){
         for(j = 1; j < 4; j++) {
             idCasa = `l${i}c${j}`;
             document.getElementById(idCasa).innerHTML = '';
         }
     }
     empate = true;
}
