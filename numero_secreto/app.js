alert('Sejam bem vindos ao jogo do número secreto!');

let numberSecret = parseInt(Math.random() * 100); // gera um número aleatório entre 1 e 100
let chuteUser;
let tentativas = 1;

// enquanto o chute do usuário for diferente do número secreto, continue pedindo para ele chutar um número entre 0 e 20

while(chuteUser != numberSecret) {
    chuteUser = prompt('Digite um número entre 0 e 100:');

    //aq ele para pq o chute do user foi certo, ou seja, igual ao número secreto 
    if(numberSecret == chuteUser){
        break;
    } 

    else{
    alert('Você errou');
        if (chuteUser > numberSecret){
        alert('O número secreto é menor do que ' + chuteUser);
        }
        else if (chuteUser < numberSecret){
        alert('O número secreto é maior do que ' + chuteUser);
        }  
    }
    // tentativas = tentativas + 1;
        tentativas++;       
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert('Você acertou com ' + tentativas + ' ' + palavraTentativa + '! Parabéns!');
