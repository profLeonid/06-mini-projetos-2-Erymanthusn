'use strict'

function gerarTabela() {
 
  const valorTotal = Number(document.getElementById('valor').value)
  const taxaJuros = Number(document.getElementById('juros').value)
  const numParcelas = Number(document.getElementById('numero').value)
  const corpoTabela = document.getElementById('tabela')

  
  if (!valorTotal || !taxaJuros || !numParcelas) {
    alert('Preencha todos os campos corretamente!')
    return
  }

  corpoTabela.textContent = ''

 
  const parcelaFixa = valorTotal / numParcelas
  let saldoDevedor = valorTotal

  const listaMes = []
  const listaParcela = []
  const listaJuros = []
  const listaTotalMes = []
  const listaSaldo = []

  for (let mes = 1; mes <= numParcelas; mes++) {
    const jurosMes = saldoDevedor * (taxaJuros / 100)
    const totalMes = parcelaFixa + jurosMes
    saldoDevedor -= parcelaFixa
    if (saldoDevedor < 0) saldoDevedor = 0

    listaMes.push(mes)
    listaParcela.push(parcelaFixa.toFixed(2))
    listaJuros.push(jurosMes.toFixed(2))
    listaTotalMes.push(totalMes.toFixed(2))
    listaSaldo.push(saldoDevedor.toFixed(2))
  }

  const listas = [
        listaMes,
        listaParcela,
        listaJuros,
        listaTotalMes,
        listaSaldo
    ]

    for (let i = 0; i < numParcelas; i++) {
      const tr = document.createElement('tr')
  
      listas.forEach((lista, index) => {
        const td = document.createElement('td')
  
        if (index === 0) {
          td.textContent = listaMes[i]
        } else {
          td.textContent = `R$ ${lista[i]}`
  
          if (index === 1) td.classList.add('col-parcela')
          if (index === 2) td.classList.add('col-juros')
          if (index === 3) td.classList.add('col-total')
          if (index === 4) td.classList.add('col-saldo')
        }
  
        tr.appendChild(td)
      })

    corpoTabela.appendChild(tr)
  }
}



document.getElementById('gerar').addEventListener('click', gerarTabela)