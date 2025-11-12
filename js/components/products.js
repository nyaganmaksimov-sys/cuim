const products = {
  popular: [
    {id:1, title:"Свежие огурцы (1 кг)", price:150, image:"...", rating:4.5},
    // ... остальные товары
  ],
  season: [
    // ... товары хиты сезона
  ],
  sale: [
    // ... товары со скидками
  ]
};

function initProducts() {
  renderProductGrid('productGrid', products.popular, 'product');
  renderProductGrid('seasonGrid', products.season, 'season');
  renderProductGrid('saleGrid', products.sale, 'sale');
  
  initWishlist();
  initQuickView();
  initCart();
}

function renderProductGrid(containerId, products, type) {
  const container = document.getElementById(containerId);
  
  container.innerHTML = products.map(product => `
    <div class="${type}-card">
      <!-- шаблон карточки товара -->
    </div>
  `).join('');
}
