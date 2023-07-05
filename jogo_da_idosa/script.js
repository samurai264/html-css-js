console.log('Carregou Com Sucesso!!!');

//vamos configurar o evento de click dos tds jogaveis

var tds_jogaveis = document.querySelectorAll('tbody td');
var n = 0;
for (var n = 0; n < tds_jogaveis.length; n++) {
    var td = tds_jogaveis[n];
    td.indice = n;
    td.addEventListener("click", clicou_no_td);

}


//placar
var pontos_jogador = 0;
var pontos_bot = 0;


//posições do jogo
var posicoes_jogo = [
    "", "", "",
    "", "", "",
    "", "", ""
]

//popular posiçoes ja preenchidas
function popular_posicoes() {
    for (var n = 0; n < posicoes_jogo.length; n++) {
        var jogada = posicoes_jogo[n];
        var cor_jogada = "";
        if (jogada == "X") {
            cor_jogada = "vermelho";
        }
        if (jogada == "O") {
            cor_jogada = "verde";
        }
        tds_jogaveis[n].innerHTML =
            "<div class='" + cor_jogada + "'>" + jogada + "</div>";
    }
}
//popular_posicoes();

//reiniciar partida
function reiniciar() {
    //pontos_jogador = 0;
    //pontos_bot = 0;
    posicoes_jogo = [
        "","","",
        "","","",
        "","",""];
    popular_posicoes();
    mostrar_placar();
}

//mostrar placar atual
function mostrar_placar() {
    var pjogador = document.querySelector('#pontos_jogador');
    var pbot = document.querySelector('#pontos_bot');
    pjogador.innerText = pontos_jogador;
    pbot.innerText = pontos_bot;
}


//definindo funções
function clicou_no_td(event) {
    var indice = event.currentTarget.indice;
    if (posicoes_jogo[indice] == "") {
        //event.target.innerHTML = "<div class='verde'>O</div>";
        posicoes_jogo[indice] = "O";

    }
    console.log(posicoes_jogo);
    popular_posicoes();
    //verificar se tem ganhador ou empate
    var tem_ganhador = verifica_ganhador();
    if (tem_ganhador == true) {
        return;
    }


    //chamar aqui a função da jogada do bot
    jogada_bot();
}

function verifica_ganhador() {
    var retorno = false;
    var espacos_vazios = posicoes_jogo.filter(item => item == "");
    console.log(espacos_vazios.length);


    //começa a verificar ganhador
    var linha1coluna1 = posicoes_jogo[0];
    var linha1coluna2 = posicoes_jogo[1];
    var linha1coluna3 = posicoes_jogo[2];
    var linha2coluna1 = posicoes_jogo[3];
    var linha2coluna2 = posicoes_jogo[4];
    var linha2coluna3 = posicoes_jogo[5];
    var linha3coluna1 = posicoes_jogo[6];
    var linha3coluna2 = posicoes_jogo[7];
    var linha3coluna3 = posicoes_jogo[8];


    //condições de Vitoria do jogador nas linhas
    if (linha1coluna1 == "O" && linha1coluna2 == "O" && linha1coluna3 == "O") {
        pontos_jogador++;
        mostrar_placar();
        retorno =  true;
    }
    if (linha2coluna1 == "O" && linha2coluna2 == "O" && linha2coluna3 == "O") {
        pontos_jogador++;
        mostrar_placar();
        retorno =  true;
    }
    if (linha3coluna1 == "O" && linha3coluna2 == "O" && linha3coluna3 == "O") {
        pontos_jogador++;
        mostrar_placar();
        retorno = true;
    }


    //condiçoes de vitoria do jogador nas colunas
    if (linha1coluna1 == "O" && linha2coluna1 == "O" && linha3coluna1 == "O") {
        pontos_jogador++;
        mostrar_placar();
        retorno =  true;
    }
    if (linha1coluna2 == "O" && linha2coluna2 == "O" && linha3coluna2 == "O") {
        pontos_jogador++;
        mostrar_placar();
        retorno =  true;
    }
    if (linha1coluna3 == "O" && linha2coluna3 == "O" && linha3coluna3 == "O") {
        pontos_jogador++;
        mostrar_placar();
        retorno =  true;
    }

    //condições de vitoria do jogador nas DIAGONAIS
    if (linha1coluna1 == "O" && linha2coluna2 == "O" && linha3coluna3 == "O") {
        pontos_jogador++;
        mostrar_placar();
        retorno = true;
    }
    if (linha3coluna1 == "O" && linha2coluna2 == "O" && linha1coluna3 == "O") {
        pontos_jogador++;
        mostrar_placar();
        retorno =  true;
    }


    //condições de vitoria do Bot Nas Linhas
    if (linha1coluna1 == "X" && linha1coluna2 == "X" && linha1coluna3 == "X") {
        pontos_bot++;
        mostrar_placar();
        retorno = true;
    }
    if (linha2coluna1 == "X" && linha2coluna2 == "X" && linha2coluna3 == "X") {
        pontos_bot++;
        mostrar_placar();
        retorno = true;
    }
    if (linha2coluna1 == "X" && linha2coluna2 == "X" && linha2coluna3 == "X") {
        pontos_bot++;
        mostrar_placar();
        retorno = true;
    }
    //condições de vitoria do bot colunas

    if (linha1coluna1 == "X" && linha2coluna1 == "X" && linha3coluna1 == "X") {
        pontos_bot++;
        mostrar_placar();
        retorno =  true;
    }
    if (linha1coluna2 == "X" && linha2coluna2 == "X" && linha3coluna2 == "X") {
        pontos_bot++;
        mostrar_placar();
        retorno =  true;
    }
    if (linha1coluna3 == "X" && linha2coluna3 == "X" && linha3coluna3 == "X") {
        pontos_bot++;
        mostrar_placar();
        retorno =  true;
    }

    //condições de vitoria do bot em diagonais

    if (linha1coluna1 == "X" && linha2coluna2 == "X" && linha3coluna3 == "X") {
        pontos_bot++;
        mostrar_placar();
        retorno = true;
    }
    if (linha3coluna1 == "X" && linha2coluna2 == "X" && linha1coluna3 == "X") {
        pontos_bot++;
        mostrar_placar();
        retorno =  true;
    }

    if (espacos_vazios.length == 0) {
        retorno =  true;
    }
    
    if(retorno == true){
        alert('O Jogo Finalizou');
        reiniciar();
    }


    return retorno
}


function numero_aleatorio(minimo, maximo) {
    var numero_sorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return numero_sorteado
}

function jogada_bot() {
    var posicao_possivel = numero_aleatorio(0, 8);
    if (posicoes_jogo[posicao_possivel] == "") {
        posicoes_jogo[posicao_possivel] = "X";
        verifica_ganhador();
    } else {
        jogada_bot();
    }
    popular_posicoes();
}











//no final de tudo 
reiniciar();