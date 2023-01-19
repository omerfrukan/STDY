
// 1- Bir sayının 10-50 arasında olup olmadığını kontrol edinizç
// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.
// 3- x, y, z sayılarının büyüklük karşılaştırmalarını yapınız. (else if ' i araştırınız.)
// 4- 2 vize(40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;
    // a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
    // b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
    // c- Finalden 70 alındığında ortalama 50'nin altında olsa bile dersten geçilsin.



// 1-

// let sayi1 = 10;

// if (sayi1 > 10 && sayi1 < 50) {
//     console.log("sayı 10 ile 50 arasındadır.");
// }else {
//     console.log("sayı 10 ile 50 arasında değildir.");
// }



// 2-  (pozitif ya da tek sayı)

let sayi = -21;

if (sayi % 2 == 1 && sayi > 0) {
    console.log("sayı pozitif tek sayıdır.");
}

// if (Math.abs(sayi % 2) == 1 || sayi > 0) {
//     console.log("sayı pozitif ya da tek sayıdır.");
// }



// 3- 

// let x = 10;
// let y = 20;
// let z = 30;

// if (x > y && x > z) {
//     console.log("x en büyüktür.");
// }else if (y > x && y > z) {
//     console.log("y en büyüktür.");
    
// }else if (z > x && z > y) {
//     console.log("z en büyüktür.");
// }else {
//     console.log("sayılar eşit.");
// }



// 4-

let vize1 = 10;
let vize2 = 10;
let final = 70;

let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6);


console.log("ortalamanız: " + ortalama);

// a-
// if (ortalama >= 50) {
//     console.log("geçtiniz.");

// }else {
//     console.log("kaldınız.")
// }


// b-
// if (ortalama >= 50 && final >= 50) {
//     console.log("geçtiniz.");

// }else {
//     console.log("kaldınız.");
// }


//c-
if (ortalama >= 50 || final >= 70) {
    console.log("geçtiniz.");
}else {
    console.log("kaldınız.");
}



