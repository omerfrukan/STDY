
var name = "Ahmet";     // Global Scope
const adress = "İstanbul"



function yazdir() {
    var name = "Ayşe";
    var yas = 20;
    console.log("function scope", name, yas);
}

if (true) {
    let cinsiyet = "Kadın"
    let name = "Zeynep";
    console.log(name, cinsiyet);
}

// console.log(cinsiyet);
console.log(name)

yazdir();
// console.log(name);
// console.log(yas); 



// Fonksiyonlar kendi scope alanlarını oluşturur.
// block içerisinde yeni bir scope oluşmaz. (let, const)

