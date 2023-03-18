window.addEventListener("load",init);

const KUTYAK = [
    {
        nev:"Bella",
        fajta:"bernipásztor",
        lab:4,
        marmagassag:60,
        nem:"szuka",
        kor:13
    },
    {
        nev:"Béla",
        fajta:"bernipásztor",
        lab:4,
        marmagassag:60,
        nem:"szuka",
        kor:13
    },

    {
        nev:"Marci",
        fajta:"öleb",
        lab:3,
        marmagassag:170,
        nem:"non-binary",
        kor:26
    }

]

console.log(KUTYAK);

function init(){


    const Bella = {
        nev:"Bella",
        fajta:"bernipásztor",
        lab:4,
        marmagassag:60,
        nem:"szuka",
        kor:13
    }
    //console.log(Bella)

    const Bela = {
        nev:"Béla",
        fajta:"bernipásztor",
        lab:4,
        marmagassag:60,
        nem:"szuka",
        kor:13
    }
    //console.log(Bela)
    Bela.nev = "Béluska"
    //console.log(Bela)

for (let index = 0; index < KUTYAK.length; index++) {
    console.log(index, ".kutya *******")
    for (const key in KUTYAK[index]) {
        console.log(key,KUTYAK[index][key]);
            
        }
    
}
    
    }