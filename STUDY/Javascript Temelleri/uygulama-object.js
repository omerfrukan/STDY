/*
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv:%18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler:
        ürün id: 5
        ürün başlığı: Iphone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000

        ürün id: 6
        ürün başlığı: Iphone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
    
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

    sipariş id:102
    sipariş tarihi: 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler:
        
        ürün id: 6
        ürün başlığı: Iphone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
    
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

*/

let siparis1 = {
    "siparisId": 101,
    "siparisTarihi": "30.12.2022",
    "odemeSekli": "kredi kartı",
    "kargoAdresi": {
        "mahalle": "yahya kaptan",
        "ilce": "izmit",
        "sehir": "kocaeli",
    },
    "urunler": [
        {
            "urunId": 5,
            "urunAdi": "Iphone 13 Pro",
            "urunUrl": "http://abc.com/iphone-13-pro",
            "urunFiyati": 22000
        },
        {
            "urunId": 6,
            "urunAdi": "Iphone 13 Pro Max",
            "urunUrl": "http://abc.com/iphone-13-pro-max",
            "urunFiyati": 25000
        },
    ]
};


let siparis2 = {
    "siparisId": 102,
    "siparisTarihi": "30.12.2022",
    "odemeSekli": "kredi kartı",
    "kargoAdresi": {
        "mahalle": "yahya kaptan",
        "ilce": "izmit",
        "sehir": "kocaeli",
    },
    "urunler": [
        {
            "urunId": 6,
            "urunAdi": "Iphone 13 Pro Max",
            "urunUrl": "http://abc.com/iphone-13-pro-max",
            "urunFiyati": 25000
        },
    ]
};

let siparis1Toplam = (siparis1.urunler[0].urunFiyati + siparis1.urunler[1].urunFiyati) * 1.18;
let siparis2Toplam = (siparis2.urunler[0].urunFiyati) * 1.18;

let toplamSiparisUcreti = siparis1Toplam + siparis2Toplam;

console.log("sipariş 1: " + siparis1Toplam);
console.log("sipariş 2: " + siparis2Toplam);

console.log("toplam ödenen miktar: ", toplamSiparisUcreti);

let siparisler = [siparis1,siparis2];



