var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  loop: true,
  autoHeight: true
});

const productColor = document.querySelectorAll('.product__color')
if (productColor) {
  productColor.forEach((item) => {
    item.addEventListener('click', () => {
      productColor.forEach((i) => {
        i.classList.remove('active')
      })
      item.classList.add('active')
    })
  })
}

const productSize = document.querySelectorAll('.product__size')
if (productSize) {
  productSize.forEach((item) => {
    item.addEventListener('click', () => {
      productSize.forEach((i) => {
        i.classList.remove('active')
      })
      item.classList.add('active')
    })
  })
}

const tabsBtn = document.querySelectorAll('.pay__tabs-btn');
const tabsItems = document.querySelectorAll('.pay__tabs-content');


if (tabsBtn && tabsItems) {
  tabsBtn.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);
  
      if( ! currentBtn.classList.contains('active') ){
  
        tabsBtn.forEach(function(item){
          item.classList.remove('active');
        });
    
        tabsItems.forEach(function(item){
          item.classList.remove('active');
        });
    
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      };
    });
  }
}

if (document.querySelector('.pay__tabs-btn')) {
  document.querySelector('.pay__tabs-btn').click();
}

const filterBtn = document.querySelector('.filter__btn')
const filterInner = document.querySelector('.filter__inner')

if (filterBtn && filterInner) {
  filterBtn.addEventListener('click', () => {
    filterBtn.classList.toggle('active')
    filterInner.classList.toggle('active')
  })
}