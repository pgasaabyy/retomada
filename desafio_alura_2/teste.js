// Desafio 1 - Dia da semana

let dia = prompt('Digite o dia da semana:');

if (dia === 'sábado') {
    alert('Bom final de semana!');
} 
else if (dia === 'domingo') {
    alert('Bom final de semana!');
}
else {
    alert('Boa semana!');
}

// Desafio 2 - Verificar se o número é positivo ou negativo

let numero = prompt("Digite um número:");

if (numero > 0) {
    alert('O número é positivo!');
}
else if (numero < 0) {
    alert('O número é negativo!');
}

// Desafio 3 - Pontuação de um jogo

let pontuacao = prompt("Digite a pontuação do jogo:");

if (pontuacao >= 100){
    alert('Parabéns, você ganhou!');
}
else if (pontuacao < 100){
    alert('Tente novamente para ganhar!')
}

//Desafio 4 - Verificar saldo em conta

let saldo = prompt('digite o saldo da conta:');

alert('O saldo em sua conta é de: ' + saldo);

// Desafio 5 - Boas vindas personalizada

let nome = prompt('Digite seu nome:');
alert('Bem-vindo, ' + nome + '!');