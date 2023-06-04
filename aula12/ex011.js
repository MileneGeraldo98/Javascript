var idade = 16
console.log(`Voce tem ${idade} anos.`)
if (idade < 16) {
    console.log('Menor de idade')
} else if (idade <18 || idade >65) {
        console.log('Voto opcional')
} else if (idade >=18) {
    console.log('Voto obrigatório !')
}