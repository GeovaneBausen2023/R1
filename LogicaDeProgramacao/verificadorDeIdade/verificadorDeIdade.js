var data = new Date();
var ano = data.getFullYear();
var fano = document.getElementById("inAno");
var res = document.getElementById("res");
var btVerificar = document.getElementById("btVerificar");
var fsex = document.getElementsByName("radioSex");

btVerificar.addEventListener("click", verificar);


function verificar() {

    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1913) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)

    } else {

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
                else if (idade >= 18 && idade < 50) {
                    //jovem/adulto
                    img.setAttribute("src", "adultoHomem.png");
                }
                else if (idade > 50 && idade < 115) {
                    //idoso
                    img.setAttribute("src", "HomemIdoso.png");
                }
        } else if (fsex[1].checked) {
            genero = "mulher";
                if (idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute("src", "criancaMenina.png");
                }
                else if (idade >= 18 && idade < 50) {
                    //jovem
                    img.setAttribute("src", "adultaMulher.png");
                }
                else if (idade > 50 && idade < 115) {
                    //idoso
                    img.setAttribute("src", "idosaMulher.png");
                }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade}   anos`;
        res.appendChild(img);

    }
}

/*very importante:
Separar o evento `onclick` do HTML e em vez disso adicionar event listeners dinamicamente via JavaScript é uma prática recomendada por várias razões:

1. **Separação de Responsabilidades:** Mantém a estrutura do HTML focada em exibição e conteúdo, enquanto o JavaScript lida com a lógica e interatividade. Isso torna o código mais organizado e fácil de manter.

2. **Reusabilidade:** Ao adicionar event listeners via JavaScript, você pode reutilizar o mesmo código para diferentes elementos sem duplicação. Isso é especialmente útil quando você tem vários elementos com a mesma funcionalidade.

3. **Flexibilidade e Dinamismo:** Adicionar event listeners dinamicamente permite que você ajuste a interatividade do seu aplicativo em tempo real. Você pode adicionar ou remover event listeners conforme necessário, por exemplo, em resposta a mudanças no estado do aplicativo.

4. **Carregamento Assíncrono:** Colocar seus scripts no final do `<body>` ou dentro de eventos como `DOMContentLoaded` assegura que os elementos HTML já estejam carregados quando o JavaScript é executado. Isso evita erros de referência a elementos que ainda não foram carregados.

5. **Manutenção e Depuração:** Separar o JavaScript do HTML simplifica a depuração. Você pode isolar problemas relacionados à lógica ou à interação sem a confusão do código HTML.

6. **Progressive Enhancement:** A separação permite que o conteúdo seja acessível mesmo para usuários que desativaram JavaScript. Você pode criar uma experiência básica no HTML e, em seguida, aprimorá-la com interatividade via JavaScript para usuários com suporte.*/