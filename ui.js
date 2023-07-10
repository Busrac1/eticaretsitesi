// sadece arayüz işlemlerini burda yap.

const categoryList = document.querySelector('.categories');
const productList = document.querySelector('.products');



// js arası haverleşmek veri fon göndermek için, export kullan.
// type modul ver

export function renderCategories (categories){
   
    // 1 her bir katgegori için kart basma işlemi
categories.forEach((category)=> {

    // 2 div oluşturma htmlden al
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category")

    // 3 div in içini belirleme
    categoryDiv.innerHTML = `
            <img src="${category.image}">
            <span>${category.name}</span>
   `
//   4  elemanı htmldeki categories divine ekleme
// html elemanını içine başka html ekleme , içine ekleme: appenchild
     categoryList.appendChild(categoryDiv);
});
}


export function renderProducts(products) {
    products
    // sadece bu kadar obje almak için
      .slice(0, 40)
      // dizideki her bir obje için çalışır
      .forEach((product) => {
        // div oluşturma
        const productCard = document.createElement('div');
        // gerekli class atamasını yapma
        // yukarıdakinin farklı bir yapılışı
        productCard.className = 'product';

        // kartın içeriğini belirleme
        // birden çok satır yazacağımız için ` ` kullan
        productCard.innerHTML = `
        
              <img src=${product.images[0]} />
              <p>${product.title}</p>
              <p>${product.category.name}</p>
              <div class="product-info">
                <p>${product.price} $</p>
                <button id="add-btn" data-id=${product.id}>Sepete Ekle</button>
              </div>      
        `;
// ***addbtn için , quearyselector ile alamazsın. çünkü js den gelmiş zaten
//  ! onun yerine body olay izleycisi ekleriz.


        // img dizi ve ilk resmi almak için 0
        //   elemanı html'e gönderme. altına göndermek için node:html kodu. node yaz
        productList.appendChild(productCard);
      });
  }

