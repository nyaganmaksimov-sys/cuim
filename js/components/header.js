function initHeader() {
  initMarketplaceSwitcher();
  initCitySelector();
  initSearch();
}

function initMarketplaceSwitcher() {
  const switcherOptions = document.querySelectorAll('.switcher-option');
  
  switcherOptions.forEach(option => {
    option.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      
      switcherOptions.forEach(opt => opt.classList.remove('active'));
      this.classList.add('active');
      
      if (target === 'opt') {
        window.location.href = 'https://nyaganmaksimov-sys.github.io/ciuim-opt/';
      }
    });
  });
}

function initCitySelector() {
  const locationPicker = document.getElementById('locationPicker');
  const cityModal = document.getElementById('cityModal');
  
  // ... код выбора города
}

function initSearch() {
  const searchInput = document.querySelector('.search-bar input');
  
  searchInput.addEventListener('input', debounce(function(e) {
    console.log('Поиск:', e.target.value);
  }, 300));
}
