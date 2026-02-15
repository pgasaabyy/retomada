
alert('Sejam bem vindos ao jogo do número secreto!');

let numberSecret = 40;
let chuteUser = prompt('Escolha um número entre 1 e 27');

if(numberSecret == chuteUser){
    console.log('Você acertou! Parabéns')
} 
else{
    alert('Você errou, tente novamente')
}