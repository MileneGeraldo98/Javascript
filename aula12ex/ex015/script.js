function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') // Ano que o usuário digitar.
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(' [ERRO] Verifique os dados e tente novamente!') // Se o ano digitado for 0 ou então fano for > que o ano atual 
    } else  {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value) // Ano atual - ano que o usuário digitar 
        var genero = ''
        var img = document.createElement('img') //Criar uma imagem
        img.setAttribute('id', 'foto') // Criei um img com id foto
        if(fsex[0].checked) { // Se o sex checado for masc
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', './imagens/crianca-menino.jpg')
            } else if (idade >=10 && idade <21){
                //Jovem
                img.setAttribute('src', './imagens/jovem-homem.jpg')
            } else if (idade >21 && idade <50){
                // Adulto
                img.setAttribute('src', './imagens/adulto-homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/idoso-homem.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', './imagens/crianca-menina.jpg')
            } else if (idade >=10 && idade <21){
                //Jovem
                img.setAttribute('src', './imagens/jovem-mulher.jpg')
            } else if (idade >21 && idade <50){
                // Adulto
                img.setAttribute('src', './imagens/adulto-mulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/idosa-mulher.jpg')
            }
        }
        res.style.textAlign = 'center' // Alinhar
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // Adicionar um elemento
    }


}