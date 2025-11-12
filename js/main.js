// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
  // Загрузка компонентов
  loadComponent('header', 'components/header.html');
  loadComponent('footer', 'components/footer.html');
  
  // Инициализация модулей
  initHeader();
  initProducts();
  initSlider();
  initMap();
  
  console.log('ЦУИМ маркетплейс загружен!');
});

// Функция загрузки компонентов
async function loadComponent(id, url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  } catch (error) {
    console.error('Ошибка загрузки компонента:', error);
  }
}
