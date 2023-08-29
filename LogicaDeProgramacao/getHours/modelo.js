function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //dia 
        img.src = "../getHours/imagens/manha.png"
        document.body.style.background = "yellow"
    } else if (hora > 12 && hora <= 18) {
        // tarde
        img.src = "../getHours/imagens/tarde.png"
        document.body.style.background = "green"
    } else {
        //Boa noite
        img.src = "../getHours/imagens/noite.png"
        document.body.style.background = "purple"
    }
}