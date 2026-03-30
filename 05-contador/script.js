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
    let potencia =1
    
    for(let i = 1; i<=quantidade; i++){
        listaPotencia.push(potencia)
        potencia *=2
    }
    return listaPotencia

}

function gerarTabela (){
    const quantidade = Number(document.getElementById('qtde').value)
    const corpoTabela = document.getElementById('tabela')

    corpoTabela.textContent = ''

    const listas = [
        criarListaNumeros(quantidade),
        criarListaPares(quantidade),
        criarListaImpares(quantidade),
        criarListaMultiplo(quantidade),
        criarListaPotencia(quantidade)
    ]

    if(quantidade == '' || quantidade == "0"){
        alert('O campo de quantidade não foi preenchido corretamente!')
    } else{

    for(let i = 0; i<=quantidade; i++){
       const tr = document.createElement('tr')

       listas.forEach(lista => {
            const td = document.createElement('td')
            td.textContent = lista[i]
            tr.appendChild(td)
       })

       corpoTabela.appendChild(tr)
    }
}
}

document.getElementById('gerar').addEventListener('click', gerarTabela)
