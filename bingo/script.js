console.log("carregou");


var numeros_sorteados = [];

function sortear() {

 
    var minimo = 1;
    var maximo = 75;
    var random = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    if(numeros_sorteados.length == maximo){
        alert('ja sorteou todos os numeros')
        return
    }


    if(numeros_sorteados.includes(random)){
        return sortear();
    }


    numeros_sorteados.push(random);
    console.log(numeros_sorteados);
    pintar_numeros_sorteados();
    return random;
}

function pintar_numeros_sorteados() {
    var divs_numeros_disponiveis = document.querySelectorAll("div#numeros_sorteio div");

    for(var div of divs_numeros_disponiveis){
        div.removeEventListener
    }






    for (var numero of numeros_sorteados) {
        for (var div of divs_numeros_disponiveis) {
            if (numero == div.innerText) {
                div.setAttribute("class", "sorteado");
            }
        }
    }
    console.log(divs_numeros_disponiveis);
    mostrar_numeros_sorteados();
}

function mostrar_numeros_sorteados() {
    var div_ultimos_sorteados = document.querySelector("div#ultimos_sorteados");
    var ultimos_5 = [];
    var total_sorteio = numeros_sorteados.length;
    if (total_sorteio > 5) {
        for(var x = total_sorteio - 5; x < total_sorteio + 5; x++){
            ultimos_5.push(numeros_sorteados[x]);
        }
        div_ultimos_sorteados.innerText = ultimos_5.join(" - ");
    } else {
        div_ultimos_sorteados.innerText = numeros_sorteados.join(" - ");

    }
}

function novo_jogo(){
    var confirmou = confirm("Tem Certeza Que Quer Um Jogo Novo?")
    if(confirmou == true){
        console.log("Resetar O Jogo");
        numeros_sorteados = [];

        pintar_numeros_sorteados();
    }else{
        console.log("Não Resetar O Bingo")
    }
}