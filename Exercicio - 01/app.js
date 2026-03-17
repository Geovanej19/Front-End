'use strict'

const teste = function(tempo){

    if(tempo <= 14.0){
        return 'Não Apto'
    }else{
        return 'Apto'
    }
}

const escolherCor = function(tempo){

    if(tempo === 'Não apto'){
        return 'tempo1'
    }else{
        return 'tempo2'
    }
}

const handleClick = function(){
    const avaliar = Number(document.getElementById('tempo').value)
    const resultado = document.getElementById('resultado')

    const resultadoFinal = teste(avaliar)
    const cor = escolherCor(resultadoFinal)


    resultado.textContent = `${avaliar} - ${resultadoFinal}`
    resultado.classList.remove('tempo1', 'tempo2')
    resultado.classList.add(cor)

}