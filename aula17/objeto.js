let amigo = {nome:'Milene',
sexo:'F',
peso: '51.1',
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)