function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("InAno");
    var res = document.getElementById("res");

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName("radioSex")
        var idade = ano - Number(fano.value)
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if (fsex[0].checked) {
            var genero = "homem";
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "criancaMenino.png");
            }
            else if (idade > 21 && idade <50) {
                //jovem
                img.setAttribute("src", "adultoHomem.png");
            }
            else if (idade < 50 && idade < 115){
                //idoso
                img.setAttribute("src", "HomemIdoso.png");
            }else{
                window.alert(`[ERRO] Verifique os dados e tente novamente!`)
                var res ="";
            }
        } else if (fsex[1].checked) {
            genero = "mulher";
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "criancaMenina.png");
            }
            else if (idade > 21 && idade < 50) {
                //jovem
                img.setAttribute("src", "adultaMulher.png");
            }
            else if (idade < 50 ){
                //idoso
                img.setAttribute("src", "idosaaMulher.png");
            }else {
                window.alert(`[ERRO] Verifique os dados e tente novamente!`)
                var res ="";
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade}   anos`;
        res.appendChild(img);
    }
}