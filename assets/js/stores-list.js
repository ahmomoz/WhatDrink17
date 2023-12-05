//店家資訊頁----------------------------------------------------------------------
import { addUserShopCollection, deleteUserShopCollection } from "./api.js";
import { API_BASE_DB_URL } from "./config";

//變數命名
const storeList = document.querySelector("#storeList");  //卡片列表
let deliverySelect = document.querySelector("#deliverySelect"); //外送篩選
let CooperationSelect = document.querySelector("#CooperationSelect"); //合作活動篩選
let userShopCollections = [] ;
let storeData=[];
let storeTagAry = [];
const userId = sessionStorage.getItem("user_id");

//店家tag組合函式----------------------------------------
const storeTagPush = () =>{      //合併外送、合作活動成一個陣列
  const storeTag = storeData.forEach(item => {
    const tags = {
      uber: 'uber eat',
      foodpanda: 'food panda',
      hasEvent: '合作活動'
    };
    let tagStr = '';
    for (const key in tags) {
      if (item[key]) {
        tagStr += `<li class="stores-tag">${tags[key]}</li>`;
      }
    }
    storeTagAry.push(tagStr);
    tagStr=''; // 清空tagStr，避免重複推入
  });
};

//載入預設店家卡片函式------------------------------------------------
const storeRender = () => {
    let str='';
    storeData.forEach(item => {
        str+=`
        <li class="stores-card" data-shop-id="${item.id}">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${item.logo}" class="mb-8" alt="store image">
            <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
              <div class="d-flex justify-content-between">
                <h5 class="mb-8 mb-md-12">${item.name}</h5>
                <ul class="d-flex text-primary">
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-regular fa-star"></i></li>
                </ul>
              </div>
              <p class="stores-card-content mb-16">
                ${item.Description}</p>
              <ul class="stores-tag-group mb-16">
                ${storeTagAry[item.id-1]}
              </ul>
              <a href="stores-info.html?id=${item.id}" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `;
    });
    storeList.innerHTML = str;
};

//初始化預設店家卡片函式--------------------------------------------
const storeRenderData = () => {
  storeRender();
  searchRender(storeData); //搜尋邏輯
};

//預設愛心函式------------------------------------------------------
const heartCheck = () => {
  // 獲取卡片元素的函數
  const getCardElement = (shopId) => {
    return document.querySelector(`.stores-card[data-shop-id="${shopId}"] .collect-btn`);
  };
  // 根據用戶店家收藏數據為已收藏的卡片添加樣式
  userShopCollections.forEach(collection => {
    const cardElement = getCardElement(collection.shopId);
    if (cardElement) {
      cardElement.value = "collected";
      cardElement.classList.remove("fa-regular");
      cardElement.classList.add("fa-solid");
    }
  });
};

/**收藏愛心CSS樣式直接加在卡片監聽邏輯-------------------------------------------**/
storeList.addEventListener("click", function (e) {
  const btn = e.target.closest('.collect-btn');
  if (btn) {
    if (!userId) { //確認是否為會員，不是的話導向會員頁
      redirectToLogin(); //導向登入頁函數
    } else { //是會員，可執行收藏功能
      if (e.target.classList.contains("collect-btn")) {
        const btn = e.target;
        const card = btn.closest('.stores-card');  // 找到包含按鈕的卡片元素
        const shopId = card.dataset.shopId;  // 從卡片元素的自定義屬性中獲取店家ID

        // 檢查收藏 API 的 URL
        const checkCollectionUrl = `${API_BASE_DB_URL}/userShopCollections?userId=${userId}&shopId=${shopId}`;

        // 發送 GET 請求檢查店家是否已經被收藏
        axios.get(checkCollectionUrl)
          .then(response => {
            const isCollected = response.data.length > 0; // 如果查詢結果的數組長度大於 0，表示已經收藏

            // 根據收藏狀態切換樣式
            if (isCollected) {
              // 店家已被收藏，設定為未收藏狀態
              deleteUserShopCollection(userId, shopId); // 發送 DELETE 請求刪除收藏
              btn.value = "uncollect";
              btn.classList.remove("fa-solid");
              btn.classList.add("fa-regular");
              Swal.fire("已取消收藏");
              return
            } else {
              // 店家未被收藏，設定為已收藏狀態
              addUserShopCollection(userId, shopId); ////根據收藏狀態發送 POST 請求更新收藏
              btn.value = "collected";
              btn.classList.remove("fa-regular");
              btn.classList.add("fa-solid");
              Swal.fire("收藏成功");
            };
          })
          .catch(error => {
            console.error('Error checking collection status:', error);
          });
      }
    }
  };
});
//導回登入頁函數-------------------------------------------------------
function redirectToLogin() {
  Swal.fire("登入後即可使用收藏功能"); 
  window.location.href = "logIn.html";
};

//店家篩選器邏輯-----------------------------------------------------
deliverySelect.addEventListener('change', applyFilters); //監聽下拉變化事件
CooperationSelect.addEventListener('change', applyFilters); //監聽下拉變化事件

function applyFilters() {  //條件篩選的函數
  let filteredData = storeData;

  if (deliverySelect.value !== "") {  //外送篩選
    if (deliverySelect.value === "uber eat") {   //篩選uber
      filteredData = filteredData.filter(item => item.uber);
    } else if (deliverySelect.value === "food panda") {  //篩選food panda
      filteredData = filteredData.filter(item => item.foodpanda);
    };
  };
  if (CooperationSelect.value !== "") {   //合作活動篩選
    filteredData = filteredData.filter(item => item.hasEvent);
  };

  displayFilteredData(filteredData); //顯示篩選後的數據
  searchRender(filteredData);  //若於篩選條件中搜尋，顯示搜尋後的數據
  renderPagination(filteredData);  //更新篩選後的頁碼
  heartCheck();  //檢查是否為收藏，是的話預設愛心樣式
};
function displayFilteredData(data) {  //用於更新畫面的函數
  let str = '';
  data.forEach(item => {
    str += `
      <li class="stores-card" data-shop-id="${item.id}">
      <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
        value="collected"></button>
      <img src="${item.logo}" class="mb-8" alt="store image">
      <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
        <div class="d-flex justify-content-between">
          <h5 class="mb-8 mb-md-12">${item.name}</h5>
          <ul class="d-flex text-primary">
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-regular fa-star"></i></li>
          </ul>
        </div>
        <p class="stores-card-content mb-16">
          ${item.Description}</p>
        <ul class="stores-tag-group mb-16">
          ${storeTagAry[item.id-1]}
        </ul>
        <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
      </div>
    </li>
    `;
  });
  storeList.innerHTML = str;
};

//分頁邏輯------------------------------------------------------
const renderPagination = (pageData) =>{

  const totalItems = pageData.length; //卡片數量
  const itemsPerPage = 12;  //每頁顯示十個卡片
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

    //檢查是否為收藏，是的話預設愛心樣式
    heartCheck(); 
  };
  
  function renderCards(data) {
    storeList.innerHTML = ""; // 清空容器
  
    let str='';
    data.forEach(item => {
      str+=`
          <li class="stores-card" data-shop-id="${item.id}">
          <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
            value="collected"></button>
          <img src="${item.logo}" class="mb-8" alt="store image">
          <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
            <div class="d-flex justify-content-between">
              <h5 class="mb-8 mb-md-12">${item.name}</h5>
              <ul class="d-flex text-primary">
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
              </ul>
            </div>
            <p class="stores-card-content mb-16">
              ${item.Description}</p>
            <ul class="stores-tag-group mb-16">
              ${storeTagAry[item.id-1]}
            </ul>
            <a href="stores-info.html?id=${item.id}" class="stores-card-btn">查看店家資訊</a>
          </div>
        </li>
          `;
      });
      storeList.innerHTML = str;
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
  const searchInput = document.querySelector("#searchStores");
  const handleSearch = () => {                     //搜尋邏輯函式
    let searchData = data;
        if (searchInput.value !== "") {  //搜尋
          searchData = searchData.filter(item => item.name.includes(searchInput.value));
        };
    displayFilteredData(searchData); //顯示搜尋後的數據
    renderPagination(searchData);  //更新搜尋後的頁碼
    heartCheck();  //檢查是否為收藏，是的話預設愛心樣式
  };

  searchInput.addEventListener('keydown', e =>{   //ENTER按下觸發
    if (e.keyCode === 13) {
      handleSearch();
    }
  });
};

//將店家資料由外部寫入
Promise.all([
  axios.get(
    `${API_BASE_DB_URL}/userShopCollections?userId=${userId}`
  ),
  axios.get("https://json-server-project-wtkt.onrender.com/shops"),
])
  .then((responses) => {
    userShopCollections = responses[0].data;       //請求使用者收藏店家資料
    console.log(userShopCollections);
    storeData = responses[1].data;                 //請求店家資料

    
    storeTagPush()  //組合Tag陣列
    storeRenderData();   //載入預設店家卡片
    applyFilters();  //載入預設篩選器
    renderPagination(storeData); //頁碼邏輯

    heartCheck();  //檢查是否為收藏，是的話預設愛心樣式
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });