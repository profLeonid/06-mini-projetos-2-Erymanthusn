'use strict'

function criarListaN() {
    let lista = []
    for (let i = 1; i <= 10; i++) {
      lista.push(i)
    }
    return lista
  }
  
  function criarListaAdicao(n) {
    let lista = []
    for (let i = 1; i <= 10; i++) {
      lista.push(`${n}+${i} = ${n + i}`)
    }
    return lista
  }
  
  function criarListaSub(n) {
    let lista = []
    for (let i = 1; i <= 10; i++) {
      lista.push(`${n}-${i} = ${n - i}`)
    }
    return lista
  }
  
  function criarListaMult(n) {
    let lista = []
    for (let i = 1; i <= 10; i++) {
      lista.push(`${n}×${i} = ${n * i}`)
    }
    return lista
  }
  
  function criarListaDiv(n) {
    let lista = []
    for (let i = 1; i <= 10; i++) {
      lista.push(`${n}÷${i} = ${(n / i).toFixed(2)}`)
    }
    return lista
  }

function gerarTabela() {
    const numero = Number(document.getElementById('qtde').value)
    const corpoTabela = document.getElementById('tabela')
  
    corpoTabela.innerHTML = ''
  
    if (!numero) {
      alert('Digite um número válido!')
      return
    }

    const listas = [
        criarListaN(),
        criarListaAdicao(numero),
        criarListaSub(numero),
        criarListaMult(numero),
        criarListaDiv(numero)
    ]
  
    for (let i = 0; i < 10; i++) {
      const tr = document.createElement('tr')
  
      listas.forEach((lista) => {
        const td = document.createElement('td')
        td.textContent = lista[i]
        tr.appendChild(td)
      })
  
      corpoTabela.appendChild(tr)
    }
  }

  document.getElementById("gerar").addEventListener("click", gerarTabela)