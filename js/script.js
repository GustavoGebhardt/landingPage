function mover(){
    window.scroll({top: window.innerHeight, behavior: "smooth"})
}

console.log(window.innerHeight/2)

function moverCima(){
    window.scroll({top: 195, behavior: "smooth"})
}

function abrirFilme1() {
    var div = document.getElementById("filme1");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";

        fecharFilme2()
        fecharFilme3()
        fecharFilme4()
        fecharFilme5()
        mover()

    } else {
        moverCima()
        setTimeout(() => div.style.display = "none", 500)
    }
}

function abrirFilme2() {
    var div = document.getElementById("filme2");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";

        fecharFilme1()
        fecharFilme3()
        fecharFilme4()
        fecharFilme5()
        mover()

    } else {
        moverCima()
        setTimeout(() => div.style.display = "none", 500)
    }
}

function abrirFilme3() {
    var div = document.getElementById("filme3");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";

        fecharFilme2()
        fecharFilme1()
        fecharFilme4()
        fecharFilme5()
        mover()

    } else {
        moverCima()
        setTimeout(() => div.style.display = "none", 500)
    }
}

function abrirFilme4() {
    var div = document.getElementById("filme4");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";

        fecharFilme2()
        fecharFilme3()
        fecharFilme1()
        fecharFilme5()
        mover()

    } else {
        moverCima()
        setTimeout(() => div.style.display = "none", 500)
    }
}

function abrirFilme5() {
    var div = document.getElementById("filme5");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";

        fecharFilme2()
        fecharFilme3()
        fecharFilme4()
        fecharFilme1()
        mover()

    } else {
        moverCima()
        setTimeout(() => div.style.display = "none", 500)
    }
}

function fecharFilme1(){
    var div = document.getElementById("filme1");
    div.style.display = "none";
}
function fecharFilme2(){
    var div = document.getElementById("filme2");
    div.style.display = "none";
}
function fecharFilme3(){
    var div = document.getElementById("filme3");
    div.style.display = "none";
}
function fecharFilme4(){
    var div = document.getElementById("filme4");
    div.style.display = "none";
}
function fecharFilme5(){
    var div = document.getElementById("filme5");
    div.style.display = "none";
}

function fechar(){
    var div = document.getElementById("div-main");
    var div2 = document.getElementById("div-main-menu");
    div.style.display = "none";
    div2.style.display = "flex";
}

function abrir(){
    var div = document.getElementById("div-main");
    var div2 = document.getElementById("div-main-menu");
    div.style.display = "flex";
    div2.style.display = "none";
}

function paginaAbrir(){
    var div = document.getElementById("pagina-livro");
    var div2 = document.getElementById("div-main-menu");
    div.style.display = "flex";
    div2.style.display = "none";
}

function paginaFechar(){
    var div = document.getElementById("pagina-livro");
    var div2 = document.getElementById("div-main-menu");
    div.style.display = "none";
    div2.style.display = "flex";
}

function livroAbrir(){
    var div = document.getElementById("livro-escondido");
    var div2 = document.getElementById("div-main-menu");
    div.style.display = "flex";
    div2.style.display = "none";
}

function livroFechar(){
    var div = document.getElementById("livro-escondido");
    var div2 = document.getElementById("div-main-menu");
    div.style.display = "none";
    div2.style.display = "flex";
}

function painelAbrir(){
    var div = document.getElementById("painel-passagem");
    var div2 = document.getElementById("div-main-menu");
    div.style.display = "flex";
    div2.style.display = "none";
}

function painelFechar(){
    var div = document.getElementById("painel-passagem");
    var div2 = document.getElementById("div-main-menu");
    div.style.display = "none";
    div2.style.display = "flex";
}

function playAudio(){
    let audio = document.getElementById("audio")
    audio.play();
}

function verificar(){
    var div = document.getElementById("painel-passagem");
    var img = document.getElementById("img-fundo");
    var img2 = document.getElementById("img-fundo-2");
    let senha = document.getElementById("psw").value;

    console.log(senha)

    if(senha == "senha"){
        playAudio()
        div.style.display = "none";
        img.style.display = "none";
        img2.style.display = "block";
        setTimeout(function() {location.href = "/src/livrosFavoritos/passagemSecreta"}, 9000);
    } else{
        alert("Senha Invalida!")
    }
}

function playMusica1(){
    let audio = document.getElementById("musica1")

    stopMusica2()
    stopMusica3()
    stopMusica4()
    stopMusica5()

    restartMusica2()
    restartMusica3()
    restartMusica4()
    restartMusica5()

    audio.play();

    let play = document.getElementById("play1")
    let pause = document.getElementById("pause1")

    play.style.display = "none";
    pause.style.display = "block";
}

function stopMusica1(){
    let audio = document.getElementById("musica1")
    audio.pause()

    let play = document.getElementById("play1")
    let pause = document.getElementById("pause1")

    play.style.display = "block";
    pause.style.display = "none";
}

function playMusica2(){
    let audio = document.getElementById("musica2")

    stopMusica1()
    stopMusica3()
    stopMusica4()
    stopMusica5()

    restartMusica1()
    restartMusica3()
    restartMusica4()
    restartMusica5()

    audio.play();

    let play = document.getElementById("play2")
    let pause = document.getElementById("pause2")

    play.style.display = "none";
    pause.style.display = "block";
}

function stopMusica2(){
    let audio = document.getElementById("musica2")
    audio.pause()

    let play = document.getElementById("play2")
    let pause = document.getElementById("pause2")

    play.style.display = "block";
    pause.style.display = "none";
}

function playMusica3(){
    let audio = document.getElementById("musica3")

    stopMusica2()
    stopMusica1()
    stopMusica4()
    stopMusica5()

    restartMusica2()
    restartMusica1()
    restartMusica4()
    restartMusica5()

    audio.play();

    let play = document.getElementById("play3")
    let pause = document.getElementById("pause3")

    play.style.display = "none";
    pause.style.display = "block";
}

function stopMusica3(){
    let audio = document.getElementById("musica3")
    audio.pause()

    let play = document.getElementById("play3")
    let pause = document.getElementById("pause3")

    play.style.display = "block";
    pause.style.display = "none";
}

function playMusica4(){
    let audio = document.getElementById("musica4")

    stopMusica2()
    stopMusica3()
    stopMusica1()
    stopMusica5()

    restartMusica2()
    restartMusica3()
    restartMusica1()
    restartMusica5()

    audio.play();

    let play = document.getElementById("play4")
    let pause = document.getElementById("pause4")

    play.style.display = "none";
    pause.style.display = "block";
}

function stopMusica4(){
    let audio = document.getElementById("musica4")
    audio.pause()

    let play = document.getElementById("play4")
    let pause = document.getElementById("pause4")

    play.style.display = "block";
    pause.style.display = "none";
}

function playMusica5(){
    let audio = document.getElementById("musica5")

    stopMusica2()
    stopMusica3()
    stopMusica4()
    stopMusica1()

    restartMusica2()
    restartMusica3()
    restartMusica4()
    restartMusica1()

    audio.play();

    let play = document.getElementById("play5")
    let pause = document.getElementById("pause5")

    play.style.display = "none";
    pause.style.display = "block";
}

function stopMusica5(){
    let audio = document.getElementById("musica5")
    audio.pause()

    let play = document.getElementById("play5")
    let pause = document.getElementById("pause5")

    play.style.display = "block";
    pause.style.display = "none";
}

function restartMusica1(){
    let audio = document.getElementById("musica1")
    audio.currentTime = 0
}

function restartMusica2(){
    let audio = document.getElementById("musica2")
    audio.currentTime = 0
}

function restartMusica3(){
    let audio = document.getElementById("musica3")
    audio.currentTime = 0
}

function restartMusica4(){
    let audio = document.getElementById("musica4")
    audio.currentTime = 0
}

function restartMusica5(){
    let audio = document.getElementById("musica5")
    audio.currentTime = 0
}

function respostaAbrir(){
    location.href = "/src/livrosFavoritos/passagemSecreta/"
}

function respostaFechar(){
    let div = document.getElementById("resposta-div")
    div.style.display = "none";
}

function respostaMenu(){
    let div = document.getElementById("resposta-div")
    div.style.display = "flex";
}