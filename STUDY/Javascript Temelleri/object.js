
// let user1 = ["Mucahit","Kaya",24,5000,"izmit"];
// let user2 = ["Sadık","Turan",38];


// dict, json

let user1 = {
    "name": "Mucahit",
    "last": "Kaya",
    "age": 24,
    "adress": {
        "city": "kocaeli",
        "ilce": "izmit"
    },
    "hobies": ["sinema","spor"],
}


let user2 = {
    "name": "Sadık",
    "last": "Çınar",
    "age": 28,
    "adress": {
        "city": "İstanbul",
        "ilce": "Kadıköy"
    },
    "hobies": ["sinema","spor"],
}

let sonuc;

sonuc = user1.name;
sonuc = user1.last;
sonuc = user1["age"];
sonuc = user1.adress.ilce;
sonuc = user1.hobies[0];
sonuc = user1.hobies[1];


let users = [
    user1,
    user2
]

sonuc = users[1].name;

let urunler = [
    {
        "urunAdi": "samsung s22",
        "urunFiyati": 13000
    },
    {
        "urunAdi": "samsung s23",
        "urunFiyati": 13000
    }
]

sonuc = urunler[0].urunAdi;



console.log(sonuc);
