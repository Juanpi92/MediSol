/*Código responsável por verificar se os botões para fechar e abrir o Chat da Juliette estão sendo clicados e processando o resultado esperado

AUTOR: LUCAS A C M LOPES

*/

setTimeout(aparecerdiv, 500);

const fechar = document.getElementById("fechar");
const abrir = document.getElementById("abrir");

const chat = document.getElementById("chat");
const chatFechado = document.getElementById("chat-fechado");

function aparecerdiv() {
    chat.style.display = 'block';
    lista.innerHTML += '<div class="listaELement"><img src="img/veronica.jpg" class="icone"><li class="msgs">Olá! Em que posso ajudá-lo?</li></div>';
}

fechar.addEventListener ("click", 
function fechar() {
    chat.style.display = "none";
    chatFechado.style.display = "block";

});

abrir.addEventListener ("click", 
function abrir() {
    chatFechado.style.display = "none";
    chat.style.display = "block";
});





/*Código responsável por verificar se os botões para fechar e abrir o Chat da Juliette estão sendo clicados e processando o resultado esperado 

*/

const mensagens = [];



const btn = document.getElementById('submit');
const input = document.querySelector('#input');
const lista = document.getElementById('lista-msgs');


btn.addEventListener('click', function (e) {
    /*var novo = document.createTExtNode(' <li class="msgs">Boa tarde! Como posso te ajudar?</li> ');
    lista.appendChild(input.value);*/
    if (input.value == '') {
        e.preventDefault();
    } else {
    lista.innerHTML += '<div class="listaELement"><img src="img/icone.jpg" class="icone"><div class="msgs">' + input.value + '</div></div>';
    setTimeout(julietteFalas, 1000);
    mensagens += input.value;
    }
    //localStorage.setItem("msgs", mensagens);
    
 })
//sessionStorage.setItem("msgs", mensagens);






/*function alertarMsgs () {
    let msgs = sessionStorage.getItem("msgs");


}*/


setTimeout(alertarMsgs, 50000);

function julietteFalas () {
    lista.innerHTML += '<div class="listaELement"><img src="img/veronica.jpg" class="icone"><li class="msgs">Não entendo ainda o que diz :(</li></div>';
}

