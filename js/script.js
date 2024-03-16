function filme(){
    location.href = "/";
}

function abrirFilme() {
    var div = document.getElementById("filme1");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}