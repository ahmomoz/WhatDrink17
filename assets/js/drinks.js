//飲料資訊頁----------------------------------------------------------------------

//變數命名
const drinkList = document.querySelector("#drinkList"); //卡片列表
let teaTypeSelect = document.querySelector("#teaTypeSelect"); //茶種篩選
let ingredientsSelect = document.querySelector("#ingredientsSelect"); //配料篩選
let drinkData = [];
let drinkTagAry = [];

//茶種、配料tag組合函式----------------------------------------
const drinkTagPush = () => {  //合併茶種、配料成一個陣列
  const drinkTag = drinkData.map(item => {
    if (!item || !item.TeaType) {    //防呆
      return ''; 
    };
    if(item.Ingredients.length===0){
      return `${item.TeaType}`   //如果沒有配料就只推入茶種
    }else{
      return `${item.TeaType},${item.Ingredients}` //推入茶種,配料
    };
  });
  const drinkTag2=[]; //去掉逗點
  for(let i = 0 ; i<drinkTag.length ; i++){
    drinkTag2.push(drinkTag[i].split(','));
  };

  let tagStr = '';
  let partialTags = [];   //保存部分標籤
  drinkTag2.forEach(tags => {
    tags.forEach((i, index) => {
        tagStr += `<li class="drinks-tag">${i}</li>`;
        if (index === tags.length - 1) {
            // 將完整字串推入drinkTagAry
            partialTags.push(tagStr);
            tagStr = ''; // 清空tagStr以便推入下一個標籤組，避免重複
        }
    });
    drinkTagAry.push(partialTags);
    partialTags = []; // 清空partialTags，避免重複推入
  });
};

//載入預設飲料卡片函式------------------------------------------------
const drinkRender = () => {
    let str='';
    drinkData.forEach(item => {
        str+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${item.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${item.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${drinkTagAry[item.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${item.Description}</p>
              </div>
              <div class="d-flex justify-content-between align-items-end ms-16">
                <div class="d-flex align-items-center">
                  <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                  <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${item.StoreName}</p>
                </div>
                <a href="#" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
              </div>
          </li>
        `;
    });
    drinkList.innerHTML = str;
};

//初始化預設飲料卡片函式--------------------------------------------
const drinkRenderData = () => {
  drinkRender();
  searchRender(drinkData); //搜尋邏輯
};

//收藏愛心CSS樣式函式-----------------------------------------------
function isCollect(){
  const collectBtn = document.querySelectorAll(".collect-btn"); //抓按鈕class
  console.log(collectBtn);//驗證
    //跑 querySelectorAll 陣列
    collectBtn.forEach(function (item) {
        //監聽按鈕
        item.addEventListener("click", function (e) {
            //還沒收藏時，value 預設傳送 collected，點擊後改傳uncollect，並移除外框樣式class、新增填滿樣式class
            if (e.target.value == "collected") {
                item.value = "uncollect";
                item.classList.remove("fa-regular");
                item.classList.add("fa-solid");
            //已經收藏時，value 已改成傳送 uncollect，點擊後變為 collected，並移除填滿樣式class，新增外框樣式class
            } else if (e.target.value == "uncollect") {
                item.value = "collected";
                item.classList.add("fa-regular");
                item.classList.remove("fa-solid");
            }
            console.log("hi")//驗證
        });
    });
};


//飲料篩選器邏輯-----------------------------------------------------
teaTypeSelect.addEventListener('change', applyFilters); //監聽下拉變化事件
ingredientsSelect.addEventListener('change', applyFilters); //監聽下拉變化事件

function applyFilters() {  //條件篩選的函數
  let filteredData = drinkData;

  if (teaTypeSelect.value !== "") {  //茶種篩選
    filteredData = filteredData.filter(item => item.TeaType.includes(teaTypeSelect.value));
  };
  if (ingredientsSelect.value !== "") {   //配料篩選
    filteredData = filteredData.filter(item => item.Ingredients.includes(ingredientsSelect.value));
  };

  displayFilteredData(filteredData); //顯示篩選後的數據
  searchRender(filteredData);  //若於篩選條件中搜尋，顯示搜尋後的數據
  renderPagination(filteredData);  //更新篩選後的頁碼
};
function displayFilteredData(data) {  //用於更新畫面的函數
  let str = '';
  data.forEach(item => {
    str += `
      <li class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
          value="collected"></button>
        <img src="${item.ImageLink}" alt="drink image">
        <div class="w-100 d-flex flex-column justify-content-between">
          <div class="drinks-card-body ms-16">
            <h4 class="mb-8 mb-md-12">${item.DrinkName}</h4>
            <ul class="drinks-tag-group mb-8 mb-md-12">
              ${drinkTagAry[item.id-1]}
            </ul>
            <p class="drinks-card-content mb-24 mb-md-32">${item.Description}</p>
          </div>
          <div class="d-flex justify-content-between align-items-end ms-16">
                <div class="d-flex align-items-center">
                  <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                  <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${item.StoreName}</p>
                </div>
                <a href="#" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
          </div>
      </li>
    `;
  });
  drinkList.innerHTML = str;
};



//分頁邏輯------------------------------------------------------
const renderPagination = (pageData) =>{

const totalItems = pageData.length; //飲料卡片數量
const itemsPerPage = 10;  //每頁顯示十個卡片
const totalPages = Math.ceil(totalItems / itemsPerPage); //計算總頁數
let currentPage = 1;  //當前頁數，預設為第一頁

function displayData(page) {   //計算目前頁面顯示的卡片數量範圍
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // 獲取目前頁面的數據
  const currentPageData = pageData.slice(startIndex, endIndex);

  // 渲染當前頁面的數據
  renderCards(currentPageData);

  // 渲染分頁按鈕
  renderPaginationButtons();
};

function renderCards(data) {
  drinkList.innerHTML = ""; // 清空容器

  let str='';
  data.forEach(item => {
    str+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${item.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${item.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${drinkTagAry[item.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${item.Description}</p>
              </div>
              <div class="d-flex justify-content-between align-items-end ms-16">
                <div class="d-flex align-items-center">
                  <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                  <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${item.StoreName}</p>
                </div>
                <a href="#" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
              </div>
          </li>
        `;
    });
    drinkList.innerHTML = str;
};

//渲染分頁按鈕的邏輯，根據前頁和總頁數產生分頁按鈕
function renderPaginationButtons() {
  const buttonsContainer = document.getElementById("pagination");
  buttonsContainer.innerHTML = ""; // 清空按鈕容器

  // 生成頁碼按鈕
  let str='';
  for (let i = 1; i <= totalPages; i++) {
    const isActive = i === currentPage ? 'active' : ''; // 檢查是否為當前頁面，是的話加上active樣式
    str += `
      <li class="page-item mx-4 ${isActive}">   
        <a class="page-link" href="#" data-page="${i}">${i}</a>
      </li>
    `;
  };
  const preIsGray = currentPage === 1 ? 'text-gray' : ''; //檢查當前頁面是否為1，是的話加上灰色樣式
  const nextIsGray = currentPage === totalPages ? 'text-gray' : ''; //檢查當前頁面是否為最後一頁，是的話加上灰色樣式

  const firstPageDisabled = currentPage === 1 ? 'disabled' : ''; // 如果當前頁面為第一頁，添加disabled屬性
  const previousPageDisabled = currentPage === 1 ? 'disabled' : ''; // 如果當前頁面為第一頁，添加disabled屬性
  const nextPageDisabled = currentPage === totalPages ? 'disabled' : ''; // 如果當前頁面為最後一頁，添加disabled屬性
  const lastPageDisabled = currentPage === totalPages ? 'disabled' : ''; // 如果當前頁面為最後一頁，添加disabled屬性

  buttonsContainer.innerHTML =`
    <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${firstPageDisabled}">
      <a class="page-link ${preIsGray}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
      </a>
    </li>

    <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${previousPageDisabled}">
      <a class="page-link ${preIsGray}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">chevron_left</span>
      </a>
    </li>

    ${str}

    <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${nextPageDisabled}">
      <a class="page-link ${nextIsGray}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">chevron_right</span>
      </a>
    </li>

    <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${lastPageDisabled}">
      <a class="page-link ${nextIsGray}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
      </a>
    </li>`;

    // 設定切頁按鈕事件監聽
    const pageLinks = document.querySelectorAll(".page-link");
    pageLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); //取消a連結效果
        const pageNumber = parseInt(link.dataset.page);
        onPageButtonClick(pageNumber);
      });
    })

    const page=[currentPage]; //存放目前頁面數字

    // 前一頁按鈕事件監聽器
    const previousPageBtn = document.getElementById("previousPageBtn");
    previousPageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (page[0]> 1) {
        onPageButtonClick(page[0] - 1);
      }
    });

    // 後一頁按鈕事件監聽器
    const nextPageBtn = document.getElementById("next-page-btn");
    nextPageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (page[0]!==totalPages) {
        onPageButtonClick(page[0] + 1);
      }
    });

    // 最前頁按鈕事件監聽器
    const firstPageBtn = document.getElementById("first-page-btn");
    firstPageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (page[0]> 1) {
      onPageButtonClick(1);
      };
    });

    // 最後頁按鈕事件監聽器
    const lastPageBtn = document.getElementById("last-page-btn");
    lastPageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (page[0]!==totalPages) {
      onPageButtonClick(totalPages);
      };
    });
};


function onPageButtonClick(page) {
  // 頁面按鈕點擊事件
  currentPage = page;
  displayData(currentPage);
  window.scrollTo(0,400);   //讓頁面跑到最上方的語法
};
// 初始化頁面顯示
displayData(currentPage);

};


//搜尋邏輯------------------------------------------------------
const searchRender = (data) => {
  const searchInput = document.querySelector("#searchDrinks");
  const handleSearch = () => {                     //搜尋邏輯函式
    let searchData = data.filter(item =>
    item.DrinkName.includes(searchInput.value));
    displayFilteredData(searchData);
    renderPagination(searchData);
  };

  searchInput.addEventListener('keydown', e =>{   //ENTER按下觸發
    if (e.keyCode === 13) {
      handleSearch();
    }
  });
  searchInput.addEventListener('blur', e =>{  //輸入框失焦觸發
    handleSearch();
  });
};



//將飲料資料由外部寫入----------------------------------------
axios.get('https://json-server-project-wtkt.onrender.com/drinks')
.then(response => {
    drinkData = response.data;
    drinkTagPush();  //組合Tag陣列
    drinkRenderData(); //載入預設飲料卡片
    applyFilters();  //載入預設篩選器
    renderPagination(drinkData); //頁碼邏輯
    isCollect(); //收藏愛心CSS
})
.catch(error => {
  console.error('Error fetching data:', error);
});


