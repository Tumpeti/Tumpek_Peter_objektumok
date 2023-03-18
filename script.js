window.addEventListener("load", init);

const kutyaLista = [
{nev:"kutya1",kor:12,fajta:"foxterrier"},
{nev:"kutya2",kor:12,fajta:"kuvasz"},
{nev:"kutya3",kor:12,fajta:"puli"} ,
{nev:"kutya4",kor:12,fajta:"agár"} ,
{nev:"kutya5",kor:12,fajta:"újfullandi"},
{nev:"kutya6",kor:12,fajta:"keverék"}
];

const ARTICLE = document.querySelectorAll("article")[0];


function init() {

    
    //gombletrehoz();
    //gombesemeny();
    //let szoveg = osszzeallit();
    const ARTICLE =document.querySelectorAll("article")[0];
    //ARTICLE.innerHTML = szoveg;
    const kutyaszoveg= kutyakiir();
    ARTICLE.innerHTML = kutyaszoveg;

    gombfigyelo();

    //let TABLAZAT = tablazatbakiir();
    //ARTICLE.innerHTML += TABLAZAT;

    
}

function tablazatbakiir(){
    let szoveg ="<table>";
    for (let i =0;i<kutyaLista.length;i++){
        //console.log(i,".i")
        szoveg+= "<tr>"
        for(let k in kutyaLista[i]){
            //console.log(k,".k")
            szoveg+="<th>"+k+": "+kutyaLista[i][k]+"</th>";
            //szoveg+=kutyaLista[i][k]
        }
        szoveg+= "</tr>"
    }
    szoveg =+"</table>";
    console.log(szoveg)
    return(szoveg);
    };

function gombfigyelo(){
    const TORLESGOMB = document.querySelectorAll("div button");
    console.log("törlés nem indul")
    console.log(TORLESGOMB.length)
    for(let i=0;i<TORLESGOMB.length;i++){
        TORLESGOMB[i].addEventListener("click",function(){
  torles(i);
  console.log("törlés indul")
})

};
}

function torles(i){
    const DIVEK = document.querySelectorAll("div");
    DIVEK[i].innerHTML = "";
}

function kutyakiir(){
let szoveg ="";
for (let i =0;i<kutyaLista.length;i++){
    //console.log(i,".i")
    szoveg+= "<div> <button>Törlés</button>"
    for(let k in kutyaLista[i]){
        //console.log(k,".k")
        szoveg+="<p>"+k+": "+kutyaLista[i][k]+"</p>";
        //szoveg+=kutyaLista[i][k]
    }
    szoveg+= "</div>"
}

return(szoveg);
};

function osszzeallit(){
    let szoveg = "";
    for (let i = 0;i<kutyaLista.length;i++){
        szoveg += `<div>
                        <p>${kutyaLista[i]}</p>
                    </div>`;

    }
    //console.log(szoveg);
    return szoveg;
}


function gombletrehoz() {
    const article = document.querySelectorAll("article")[0];
    article.innerHTML = "<button>Kutya</button>";
};

function gombesemeny() {
    const kutyagomb = document.querySelectorAll("button")[0];
    kutyagomb.addEventListener("click", function () {
        lenoymta();
    });
};

function lenoymta() {
    const article = document.querySelectorAll("article")[0];
        article.innerHTML += `<p>${kutyaLista[2]}</p>`;
};