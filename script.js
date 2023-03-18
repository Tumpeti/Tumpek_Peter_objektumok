window.addEventListener("load", init);
function init(){
    const kutyaLista=["foxterrier","kuvasz",
    "puli","agár","újfullandi","keverék"];
    gombletrehoz();
    gombesemeny(kutyaLista);
};

function gombletrehoz(){
    const article = document.querySelectorAll("article")[0];
    article.innerHTML = "<button>Kutya</button>";
};

function gombesemeny(kutyaLista){
    const kutyagomb = document.querySelectorAll("button")[0];
    kutyagomb.addEventListener("click",function(){
        lenoymta(kutyaLista);
    });
};

function lenoymta(kutyaLista){
    const article = document.querySelectorAll("article")[0];
    article.innerHTML += kutyaLista[2];
};