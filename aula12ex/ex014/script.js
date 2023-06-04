function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <12) {
        img.src = '../ex014/imagens/manha.jpg'
        document.body.style.background = '#F2BC79'
    } else if (hora >= 12 && hora < 18) {
        img.src = '../ex014/imagens/tarde.jpg'
        document.body.style.background = '#F29985'
        
    } else {
        img.src = '../ex014/imagens/noite.jpg'
        document.body.style.background = '#327C8C'
    }

}

