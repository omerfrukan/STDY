
let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6"); // tam sayı
sonuc = parseFloat("10.6"); // ondalık
sonuc = parseInt("10a");
sonuc = parseInt("a10");

sonuc = isNaN("10a");

let sayi = 15.12355667;

sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(5);

sonuc = Math.round(2.4);
sonuc = Math.round(2.6);
sonuc = Math.ceil(2.2);
sonuc = Math.floor(2.6);
sonuc = Math.sqrt(25);
sonuc = Math.pow(2,3);
sonuc = Math.abs(-10);
sonuc = Math.min(4,6,8,3,9);
sonuc = Math.max(4,6,8,3,9);
sonuc = Math.random(); // 0-1 arasındadır.
sonuc = Math.random() * 10;
sonuc = Math.floor(Math.random() * 10) + 1;






console.log(typeof sonuc);
console.log(sonuc);




