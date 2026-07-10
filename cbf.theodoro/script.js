let escuro = false;





document.getElementById("modo-escuro").onclick = function () {

    if (escuro == false){

        document.getElementById("rodape").style.backgroundColor = "black";
        document.getElementById("pagina").style.backgroundColor = "black";
        document.getElementById("pagina").style.color = "white";
        document.getElementById("cards").style.color = "black";

    escuro = true;
    }
    else {
        document.getElementById("pagina").style.backgroundColor = "white";
        document.getElementById("pagina").style.color = "black";
        
    }

}