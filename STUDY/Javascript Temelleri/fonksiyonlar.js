
function selamlama(msg) {
    console.log(msg);
}

selamlama("selam");
selamlama("merhaba");
selamlama("iyi günler");
selamlama();



function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili;
}

let yasAhmet = yasHesapla(1985);
let yasAyse = yasHesapla(1987);

console.log(yasAhmet,yasAyse);


function emekliligeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let kalanSene = 65 - yas;

    if (kalanSene > 0) {
        console.log(`${isim} emekli olmanıza ${kalanSene} yıl kaldı.`)
    }else {
        console.log("zaten emekli oldunuz.")
    }
}


emekliligeKacYilKaldi(1980, "Ali");
emekliligeKacYilKaldi(1950, "Ayşe");



