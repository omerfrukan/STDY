
// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.

let meyveler = ["Elma","Armut","Muz","Çilek"];



// 2- Dizi kaç elamanlıdır?

console.log(meyveler.length);



// 3- Dizinin ilk ve son elemanı nedir ?

console.log(meyveler[0]);   // Elma
console.log(meyveler[meyveler.length - 1]);     // Çilek



// 4- Elma dizinin bir elemanı mıdır ?

console.log(meyveler.includes("Elma"));
console.log(meyveler.indexOf("Elma"));



// 5- Kiraz meyvesini listenin sonuna ekleyiniz.

// meyveler[meyveler.length] = "Kiraz";
// meyveler[meyveler.length] = "Kiraz";
meyveler.push("Kiraz")
console.log(meyveler);



// 6- Dizinin son 2 elamanını siliniz.

// meyveler.pop();
// meyveler.pop();

// meyveler.splice(meyveler.length - 2, 2)

console.log(meyveler);



// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not hesaplayınız.
    /*
        Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
        Öğrenci 2: Ada Bilgi 2012 (80,80,90)
        Öğrenci 3: Ahmet Turan 2009 (60,60,70)
    */

let ogr1 = [
    "Yiğit",
    "Bilgi",
    2010,
    [70,60,80]
];

let ogr2 = [
    "Ada",
    "Bilgi",
    2012,
    [80,80,90]
];

let ogr3 = [
    "Ahmet",
    "Turan",
    2009,
    [60,60,70]
];


let ogrenciler = [ ogr1, ogr2, ogr3];

let yigitYas = new Date().getFullYear() - ogrenciler[0][2];
let adaYas = new Date().getFullYear() - ogrenciler[1][2];
let ahmetYas = new Date().getFullYear() - ogrenciler[2][2];

let yigitNot = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) /3
let adaNot = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) /3
let ahmetNot = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) /3


console.log(yigitYas);
console.log(adaYas);
console.log(ahmetYas);

console.log(yigitNot.toFixed(1),adaNot.toFixed(1),ahmetNot.toFixed(1));
