
/* 

     1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

          Öğrenci 1:
               isim                : ada bilgi
               doğum tarihi        : 2012
               matematik notları   : 70, 70, 80

          Öğrenci 2:
               isim                : yiğit bilgi
               doğum tarihi        : 2010
               matematik notları   : 40, 40, 50

     2- Öğrencilerin yaş bilgilerini değişkende tutunuz.
     3- Öğrencilerin ders ortalama notunu değişkende saklayınız.
     4- Öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/


let ogr1_ad = "ada";
let ogr1_soyad = "bilgi";
let ogr1_dogumTarihi = "2012";
let ogr1_matematik1 = 70;
let ogr1_matematik2 = 70;
let ogr1_matematik3 = 80;
let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3) /3;
console.log(parseFloat(ogr1_ortalama)); // ondalık kısmı için
console.log(ogr1_ortalama >= 50);

let ogr2_ad = "yiğit";
let ogr2_soyad = "bilgi"
let ogr2_dogumTarihi = "2010";
let ogr2_matematik1 = 40;
let ogr2_matematik2 = 40;
let ogr2_matematik3 = 50;
let ogr2_ortalama = (ogr2_matematik1 + ogr2_matematik2 + ogr2_matematik3) /3;
console.log(parseFloat(ogr2_ortalama)); // ondalık kısmı için
console.log(ogr2_ortalama >= 50);

let suankiYil = new Date().getFullYear();

let ogr1_yas = suankiYil - parseInt(ogr1_dogumTarihi); // tam sayı için
let ogr2_yas = suankiYil - parseInt(ogr2_dogumTarihi); // tam sayı için

console.log(ogr1_yas);
console.log(ogr2_yas);







