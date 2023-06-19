const criptografia = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'U',
    'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '&', '*'];
const botao = document.querySelector(".btn");
const paragraph =document.querySelector("#p1");
let senhaEscrita =[];
let senha = [];
    let i=0;
    while(senha.length !=20) {
        let numeroRandom = Math.round(Math.random() * 100);
        console.log(numeroRandom);
        if (numeroRandom < criptografia.length) {
            senha.push(criptografia[numeroRandom]);
        }
        i++;
    }
    for(i =0 ;i<20;i++){
         senhaEscrita += senha[i];
    }
  
    botao.addEventListener('click',function capturaClick(){
        paragraph.textContent = senhaEscrita;   
    });