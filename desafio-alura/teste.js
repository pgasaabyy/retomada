/*
alert('Boas vindas ao nosso site!');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert('Erro! Preencha todos os campos');

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);
*/ 

alert('Bem vindo ao nosso site!')

let nome = prompt('Digite um nome'); 
let idade = prompt ('Digite uma idade');

if (nome == 'Lua' && idade == 18) {
    alert('Parabéns Lua! Pode tirar a habilitação!')
}
else{
    alert('Seu nome não é Lua e sua idade é inválida!')
}
