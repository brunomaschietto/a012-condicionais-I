let idade = Number(prompt('Digite sua idade:'))
let isMaiorIdade = confirm('Você terminou o ensino médio?')
let isCursandoOutraFaculdade;

if(idade >= 18){
    console.log('Você é maior de idade')
}else{
	console.log('Você é menor de idade')
}

if (isMaiorIdade === true){
    console.log('Você terminou o ensino médio')
    isCursandoOutraFaculdade = confirm('Você está cursando alguma faculdade?')
    if (isCursandoOutraFaculdade) {
        console.log('Parabéns, você está cursando uma faculdade')
    } else{
        console.log('Não cursa nenhuma faculdade')
    }
} else {
    console.log('Você não terminou o ensino médio')
}

if (idade >= 18 && isMaiorIdade === true && isCursandoOutraFaculdade === false){
    console.log('Afirmação verdadeira')
} else {
    console.log('Afirmação falsa')
}
