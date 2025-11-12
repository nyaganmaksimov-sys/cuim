// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
  console.log('ЦУИМ маркетплейс загружен!');
  
  // Временно отключи загрузку компонентов
  // loadComponent('header', 'components/header.html');
  // loadComponent('footer', 'components/footer.html');
  
  // Временно отключи модули
  // initHeader();
  // initProducts();
  // initSlider();
  // initMap();
  
  // Вместо этого запусти базовый функционал
  initBasicFunctionality();
});

function initBasicFunctionality() {
  console.log('Базовая функциональность запущена');
  
  // Добавь сюда базовые функции которые точно работают
  initShops();
  initProductsBasic();
}

function initShops() {
  const shops = [
    {id:1, name:"Свежий маркет", rating:4.8},
    {id:2, name:"Мясной двор", rating:4.9},
    {id:3, name:"Овощной ряд", rating:4.7},
  ];
  
  const container = document.getElementById('shopLogos');
  if (container) {
    container.innerHTML = shops.map(shop => `
      <div style="padding:10px; border:1px solid #ddd; border-radius:8px; text-align:center;">
        <strong>${shop.name}</strong><br>
        ⭐ ${shop.rating}
      </div>
    `).join('');
  }
}

function initProductsBasic() {
  const products = [
    {id:1, title:"Свежие огурцы", price:150},
    {id:2, title:"Молоко", price:89},
    {id:3, title:"Хлеб", price:45},
  ];
  
  const containers = ['productGrid', 'seasonGrid', 'saleGrid'];
  
  containers.forEach(containerId => {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = products.map(product => `
        <div class="product-card">
          <h3>${product.title}</h3>
          <p>${product.price} ₽</p>
          <button>В корзину</button>
        </div>
      `).join('');
    }
  });
}
