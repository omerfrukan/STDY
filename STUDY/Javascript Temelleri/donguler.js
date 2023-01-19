// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
/// ...
// console.log(10);


// let toplam = 0;

// for (let i = 0; i<=10; i++ ) {
       // kod
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     toplam += i;
    // console.log(toplam);
// }

// console.log(toplam);



let sayilar = [1,4,5,8,4,3,12,5,3,5];

console.log(sayilar[0] + sayilar[1] + sayilar[2] + sayilar[3] + sayilar[4] + sayilar[5]);

// for (let i = 0; i < 6; i++) {
//     console.log(sayilar[i]);
// }

let toplam = 0;

// for (let i = 0; i < sayilar.length; i++) {
//     toplam += sayilar[i];
//     console.log(sayilar[i]);
// }


// for (let index in sayilar) {
//     toplam += sayilar[index];
//     console.log(index);
// }


for (let sayi of sayilar) {
    toplam += sayi;
    console.log(sayi);

}

console.log(toplam);



let user = {
    "name": "Sadık Turan",
    "username": "sadikturan",
    "password": "12345",
    "email": "info@sadikturan.com"
};

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}


