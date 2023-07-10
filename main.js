// diğer dosyalardan gelene
import { 
  renderCategories, 
  renderProducts,  

 } from './ui.js';


// tüm sayfayı izlemek için.

document.addEventListener('DOMContentLoaded' , () => {
  fetchCategories();
  fetchProducts();
});

// temel url yaz, aşağıdada detay vererek yaz.bu şekilde kod kalabalığı olmaz.
const baseUrl = 'https://api.escuelajs.co/api/v1';

// katgori bilg çeker.
// api ye istek atarız ve kategorileri çekeriz.

function fetchCategories() {
  //  **yada const baseurl taımlamadan api linkini aşağı yazabilrisin
    fetch(`${baseUrl}/categories`)
   
      // eğer ki veri gelirse çalışır
    //   json veriyi kullanılabilir hale getirmek için
      .then((response) => response.json())
      // veri json formatına dönünce çalışır
      .then((data) => renderCategories(data))
      // hata oluşursa çalışır
      .catch((error) => console.log(error));
  }

  
let globalData= [];

  // istek atmanın iki yolu var; .then diğeri asycn await

  async function fetchProducts() {
    try {
      // veri çekme isteği at
      const res = await fetch(`${baseUrl}/products`);
      // gelen veriyi işle
      const data = await res.json();

      // veriyi bütün dosay tarafında erişilebilir yapma
      globalData.data;

      // bu veriyi ekrana bas
      renderProducts(data);
    } catch (err) {
      //TODO eğer hata olursa hatayı yönet
      console.log(err);
    }
    console.log(globalData);
  }

 
  

  // .then ve await aynı şey ancak thende kendisi hatayı bulur 
  // ancak diğerinmde hatayı biz kendimiz yazarak buluruz.

// sepete eklenenleri tutacağımız dizi
let basket= [];

  // sepet işlemelri
  const modal = document.querySelector('.modal-wrapper');
  const sepetBtn = document.querySelector('#sepet-btn');
  const closeBtn = document.querySelector('#close-btn');

 // sepete basılma olayını izleme
sepetBtn.addEventListener('click', () => {
  
  // modalı görünür yapma
  modal.classList.add('active');
  // modalın içerisine sepetteki ürünleri listeleme
  
});

closeBtn.addEventListener('click', ()=> {
   modal.classList.remove('active');

    });

    // sepet ve close dışındaki herhangi bir yere tıklayınca sepet kapansın
    // tıklanma olayı : event
    // sepet dışındaki yere bak - modalwrapper
    document.addEventListener("click" , (e) =>{
     var clickEl=e.target;
    //  eleman içerip içermediğini kontrol etmek=contains
     if(clickEl.classList.contains("modal-wrapper")){
          modal.classList.remove('active')
     }
     });


   // bütün tıklanma olaylarını izleme
  // *** hangi elemena tıkladığmıza dair bilgi verir: e.target
document.body.addEventListener('click', findItem);

function findItem(e){
const ele= e.target;
if(ele.id === 'add-btn'){
  // data daki id al
 const selected=globalData.find(
  (product) => product.id == ele.dataset.id
 );
  console.log(ele);
//  miktar değeri yoksa 1 eşitlenir.
// verileri tutmak için dizi kullanırız.
if(!selected.amount){
  selected.amount= 1;
   console.log(selected);
}
 addToBasket(selected);
}
}



function addToBasket(product){
 // sepet'te bu elemandan var mı kontrol etme
 const foundItem = basket.find((item) => item.id == product.id);

 if (foundItem) {
   // eğer ürün sepette varsa bulanan ürünün miktarını artır
   foundItem.amount++;
 } else {
   // eğer ürün sepette yoksa  sepete ekleme
   basket.push(product);
 }
}