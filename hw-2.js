/* 

Ödev Sahibi: Ender Dagdelen

Bootcamp: Patika 167. ECözüm React 

// ______________________________________________________________________ ÖDEV 1 ______________________________________________________________________


/*      DİKKAT EDİLECEK HUSUSLAR

    a- Parametrenin boş bırakılması durumunda false ver.
    b- Parametreye içi boş string yazılması durumunda false  ver.
    c- Parametre String tipinde değilse false ver.
    d- Eğer arama gerçekleştirilen array boş ise false ver.
    e- Arama yapılan array içinde eğer string tipi dışında veri varsa toLowerCase() hata verir. Bu yüzden .map ile kontrol ederek sadece string verileri küçük harf yap.
    f- Array içerisindeki string değerleri trim et öyle array'e ekle
    g- Arama kelimesinin önünde ve arkasındaki boşlukları temizle ve öyle arama yap.

*/

// Array.prototype işleminde fonksiyonu en başta arrow function ile oluşturmaya çalıştım ancak sistem arraw function'a müsade etmedi.


// TEST İÇİN KULLANILAN ARRAY'LER
const arrOfNames = ["eliF","KemAl","mERT","vEli","MichelE","RamAzAn",45, 12343,{ad:"Gattuso", yas:46}, ["kedi","kus","kopek"], true, false]
const arrOfCars = ["merCEDEs","bMW","AUdi","VolVo", " ",55, 580983,{ad:"otomobil", yas:4}, ["balik","tavuskusu","fil"], true, false]
const bos = []


Array.prototype.includesCi = function(search){
    
    if(typeof search === "undefined"){ //a

        return false

    } else if(typeof search === "string" && search.trim().length === 0){ //b

        return false

    } else if (typeof search != "string"){ // c

        return false

    }else if(this.length === 0){ // d

        return false

    }else {

        let newArr = this.map((item)=>{
            if(typeof item != "string"){
                return item
            }else{
                return item.trim().toLowerCase() // e ve f
            }
        })

        return newArr.includes(search.trim().toLowerCase()) // g
    }
        
    
}


//_______________________________________________________________________ TESTLER _______________________________________
/* 
console.log("Test_1: " + arrOfCars.includesCi("BMW")); // true
console.log("Test_2: " + arrOfNames.includesCi("vELI")); // true
console.log("Test_3: " + arrOfNames.includesCi("Ceyda")); // false
console.log("Test_4: " + arrOfCars.includesCi("citroen")); // false
console.log("Test_5: " + arrOfNames.includesCi(["elif"])); // false
console.log("Test_6: " + arrOfCars.includesCi({arama:"citroen"})); // false
console.log("Test_7: " + arrOfCars.includesCi(" ")); // false
console.log("Test_8: " + arrOfNames.includesCi()); // false
*/
