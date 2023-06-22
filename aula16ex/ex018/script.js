let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // Para analisar os dados


function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false 
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}

function adicionar() {   // Só irá adicionar se a condição for verdadeira.
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
    }  else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
}