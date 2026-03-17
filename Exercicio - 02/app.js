'use strict'


//Função utilizando seta, uma forma diferente de criar função
const calcularValorEconimizado = (preco, desconto) => preco * desconto / 100

const calcularPrecoFinal = (preco, valorEconimizado) => preco - valorEconimizado


// function calculaValorEconimizado(preco, desconto){

//     return preco * desconto / 100
// }

// function calcularPrecoFinal(preco, valorEconomizado){
//     return preco - valorEconomizado
// }

const escolherCor = function(desconto){

    if(desconto <= 5){
        return 'desconto1'

    }else if(desconto <= 10){
        return 'desconto2'

    }else{
        return 'desconto3'
    }
}

const handleClick = function(){
    const preco = Number(document.getElementById('preco').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById('resultado')

    const valorEconimizado = calcularValorEconimizado(preco, desconto)
    const precoFinal = calcularPrecoFinal(preco, valorEconimizado)

    const cor = escolherCor(desconto)

    resultado.textContent = `${valorEconimizado} - ${precoFinal}`
    resultado.classList.remove('desconto1', 'desconto2', 'desconto3')
    resultado.classList.add(cor)
}