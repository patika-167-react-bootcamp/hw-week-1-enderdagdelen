/* 

Ödev Sahibi: Ender Dagdelen

Bootcamp: Patika 167. ECözüm React 

// ______________________________________________________________________ ÖDEV 2 ______________________________________________________________________


/*      DİKKAT EDİLECEK HUSUSLAR

    Bence bu fonksiyonlar tanımlanırken 2 farklı şekilde hareket edilmeli. 
        * İlk yol, prototype olarak fonksyonlar tanımlanmalı. Çünkü böylece farklı array'ler için de bu fonksiyon kullanılabilir. 
        Çünkü fonksiyonlar normal tanımlandığında sadece folders ismindeki array üzerinde işlem gerçekleştirebiliyor olacaktır. 
        Her ne kadar bu ödev egzersiz amacıyla array metotları konusunu pekiştirmek amacıyla verilmiş olsa da bence farklı array'ler 
        için uygulanabiliyor olması daha iyi olacaktır.
        * fonksiyonlar tanımlanırken 2 veya 3. parametre olarak da üzerinde değişiklik gerçekleştireceği array'i almalıdır. 
        Böylece yine sadece folders ismindeki array yerine farklı array'ler de işlenebilsin. 
        
        Ben prorotype metodu ile ilgili uygulamayı diğer ödevde yapmış olduğumuz için, 
        array'i de bir parametre olacak şekilde fonksiyonların çözümlerini yapmaya karar verdim. 

  
*/
   


const folders1 = []
const files = []
const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
      ],
    },
    {
      id: 6,
      name: 'Klasör 2',
      files: [
        { id: 21, name: 'foto.png' },
        { id: 22, name: 'dosya.xls' },
      ],
    },
    {
      id: 7,
      name: 'Klasör 3',
    },
  ]



  //__________________________________________________________________________________MOVE______________________
  /*
 

    a- Üzerinde işlem yapılacak array'in boş olup olmadığının kontrol edilmesi. 
    Boşsa mesaj return etmesi
    b- fileIDToMove ve destinationFolderId parametrelerine veri girilip girilmediğinin kontrolü ve 
    ona göre mesaj return edilmesi
    c- Klasör ve varsa dosya id'leri ile array oluşturmak. Bu sayede değiştirilmek istenen dosya ve 
    klasörler kontrol edilebilecek.
    d- Taşınmak istenen dosyanın varolup olmadığının kontrolü. Yoksa mesaj return edilmesi
    e- Taşınmak istenen klasörün varolup olmadığının kontrolü. Yoksa mesaj return edilmesi

  */
  move = (arr=[], fileIdToMove="empty", destinationFolderId="empty") => {


    let fileIdS=[]
    let folderIdS = []
    let dataToMove;
    let index;

    if(arr.length === 0){ // a

        return "İşlem Yapmak İstediğiniz Klasörün İçi Boş veya Gerekli Array Parametresini Girmediniz."

    }else if(fileIdToMove === "empty"){ // b
        
        return "Taşımak İstediğiniz Dosya Id'sini Giriniz"

    }else if(destinationFolderId === "empty"){ // b

        return "Dosyayı Taşımak İstediğiniz Klasör Id'sini Giriniz."

    }else{
        arr.map((folder)=>{ // c 
    
            folderIdS.push(folder.id)
    
            if(folder.files){
                folder.files.map((file)=>{
                    fileIdS.push(file.id)
                })
            }
    
        })

        if(!fileIdS.includes(fileIdToMove)){ // d

            return `Aradığınız ${fileIdToMove} Id ile Bir Dosya Bulunmamaktadır`

        }else if(!folderIdS.includes(destinationFolderId)){ // e

            return `Dosyayı taşımak istediğiniz ${destinationFolderId} Numaralı Bir Klasör Bulunmamaktadır.`

        }else{

            arr.map((folder)=>{
                folder.files?.map((file)=>{
                    if(file.id === fileIdToMove){
                        dataToMove = file
                    }
                    folder.files = folder.files.filter((file_)=>{ return file_.id != fileIdToMove})
                })
            })

            index = arr.findIndex((folder)=>{
                if(folder.id === destinationFolderId){
                    return true
                }
            })

            if(arr[index].files){
                arr[index].files.push(dataToMove)
            }else{
                arr[index].files = [dataToMove]
            } 
            

        }
    }

    return arr
  }

  //console.log(move(folders, 17, 6));



//_________________________________________________________________________________COPY__________________________
/* 
    a- Taşınamk istenen dosyanın varlığının kontrolü
    b- Taşınacak kalsörün olup olmaması
    c- Taşıanacak Klasörde halihazırda files isminde bir file var mı yok mu kontrol edilip ona göre 
    kopyalam işleminin gerçekleştirilmesi
*/
copy = (arr, fileId, folderId) => {

    let copi;
    let index;

    arr.forEach((folder)=>{
        //console.log(folder);
        if(folder.files){
            folder.files.forEach((file)=>{
                if(file.id === fileId){
                    copi = file
                }
            })
        }
    })

    if(copi === undefined){
        return "Taşımak İçin Aradığınız Dosya Bulunamadı"
    }else{
        index = arr.findIndex((folder)=>{
            return folder.id === folderId && true
        })

        if(index === -1){
            return "Dosyanın Kopyalanacağı Klasör Bulunamadı"
        }else{

            if(arr[index].files){
                arr[index].files.push(copi)
            }else{
                arr[index].files = [copi]
            }
            
        }
    }

    return arr
}

//copy(folders,18,6)

//________________________________________________________________________________________REMOVE_______________________
remove = (arr, fileId) => { // remove a file

    arr.filter((folder)=>{
        if(folder.files){
            folder.files.map((file)=>{
               console.log(file);
               if(file.id === fileId){
                    folder.files = folder.files.filter((dosya)=>{return dosya.id != fileId})
               }
            })
        }
    })

    return arr

}

//remove(folders, 19)

//__________________________________________________________________________________REMOVE FOLDER_____________________________
// Hata olarak fonksiyonun hata vermesi yenrine bir hata return etmesi
  removeFolder=(arr,no)=>{
    const index = arr.findIndex((folder)=>{
        if(folder.id === no){
            return true
        }
    })

    if(index != -1){
        arr.splice(index,1)
        return arr    
    }else{
        return "İşlem Gerçekleştirilemedi"
    }
    
  }

  //removeFolder(folders,4)

//____________________________________________________________________________________PARENT FOLDER_________________________
// Hata olarak fonksiyonun hata vermesi yenrine bir hata return etmesi

  function parentFolderOf(arr, no){
      let k;
      arr.map((folder)=>{
        if(folder.files){
            folder.files.forEach((file)=>{
                if(file.id === no){
                    k= folder.id
                }
            })
        }
      })
      
      return k === undefined ? "Aradığınız Dosya Numarasına Ait Bir Üst Klasör Yok":k
      
  }

  //parentFolderOf(folders,22)
  

