
alert('Sejam bem vindos ao jogo do número secreto!');

let numberSecret = 15;
console.log('Esse é o número secreto ' + numberSecret)

let chuteUser = prompt('Escolha um número entre 1 e 30');
console.log('Esse é o chute do usuário' + chuteUser);

console.log('Comparação = ' + chuteUser + ' e ' + numberSecret)

if(numberSecret == chuteUser){
    alert('Você acertou! Parabéns')
    console.log('O usuário acertou. O número era ' + numberSecret)
} 
else{
    alert('Você errou. O número secreto é ' + numberSecret + ', e você escolheu ' + chuteUser)
    console.log('O usuário errou. O número secreto é ' + numberSecret + ', e você escolheu ' + chuteUser)
}
