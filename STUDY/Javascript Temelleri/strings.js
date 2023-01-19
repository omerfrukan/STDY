
let ad = "Mücahit";
let soyad = "Kaya";
let yas = 24;
let sehir = "İstanbul";

// let mesaj = "Benim adım " + ad + " soyadım " + soyad + ". " + sehir + "'da yaşıyorum. " + "Emekliliğe " + (65 - yas) + " yılım kaldı.";


// backtick
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'da yaşıyorum. Emekliliğe ${65 - yas} yılım kaldı.`


// ternary operators
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65 - yas) + " yıl kaldı." : "Zaten emekli oldunuz."
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'da yaşıyorum. ${emeklilik}`;

console.log(mesaj);




