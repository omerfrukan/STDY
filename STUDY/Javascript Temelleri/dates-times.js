
let simdi = new Date(); // şimdi ki tarih - saat bilgisi

// Get Methods

sonuc = simdi;
sonuc = simdi.getDate();        // gün
sonuc = simdi.getDay();         // 0: pazar ise 6: cumartesi
sonuc = simdi.getFullYear();    // yıl
sonuc = simdi.getHours();       // saat
sonuc = simdi.getTime();        // milisecond cinsinden şu an ki saatini gösteriyor


// Set Methods

//simdi.setFullYear(2025);
//simdi.setMonth(0);              // 0: ocak
//simdi.setDate(15);

sonuc = simdi;

let dogumTarihi = new Date(1990, 5, 15);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000;         //saniye
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;

sonuc = gun;


console.log(sonuc);
console.log(typeof sonuc);





