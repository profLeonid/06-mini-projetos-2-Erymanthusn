'use strict'


function criarListaNumeros(quantidade){
    let listaNumeros = []
    for(let i=1; i<=quantidade; i++){
        listaNumeros.push(i)
    }
    return listaNumeros
}

function criarListaPares(quantidade){
    let listaPares = []
    let par =2
    for(let i = 1; i<=quantidade; i++){
        listaPares.push(par)
        par +=2
    }
    return listaPares

}

function criarListaImpares(quantidade){
    let listaImpares = []
    let impar =1
    for(let i = 1; i<=quantidade; i++){
        listaImpares.push(impar)
        impar+=2
    }
    return listaImpares

}

function criarListaMultiplo(quantidade){
    let listaMultiplo = []
    let multiplo =5
    for(let i = 1; i<=quantidade; i++){
        listaMultiplo.push(multiplo)
        multiplo+=5
    }
    return listaMultiplo
    
}

function criarListaPotencia(quantidade){
    let listaPotencia = []
    let potencia =2
    for(let i = 1; i<=quantidade; i++){
        listaPotencia.push(potencia)
        potencia *=2
    }
    return listaPotencia

}

function criarLinha (criarListaNumeros, criarListaPares, criarListaImpares, criarListaMultiplo, criarListaPotencia){
    
}

console.log(criarListaNumeros(12))
console.log(criarListaPares(12))
console.log(criarListaImpares(12))
console.log(criarListaMultiplo(12))
console.log(criarListaPotencia(12))
