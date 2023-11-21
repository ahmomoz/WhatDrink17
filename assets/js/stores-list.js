//店家資訊頁----------------------------------------------------------------------

//變數命名
const storeList = document.querySelector("#storeList");
let deliverySelect = document.querySelector("#deliverySelect"); //外送篩選
let CooperationSelect = document.querySelector("#CooperationSelect"); //合作活動篩選
let storeData=[];
let storeTagAry = [];

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
        <li class="stores-card">
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

//初始化預設飲料卡片函式--------------------------------------------
const storeRenderData = () => {
  storeRender();
  searchRender(storeData); //搜尋邏輯
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
  renderPagination(storeData); //頁碼邏輯
};
function displayFilteredData(data) {  //用於更新畫面的函數
  let str = '';
  data.forEach(item => {
    str += `
      <li class="stores-card">
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
  };
  
  function renderCards(data) {
    storeList.innerHTML = ""; // 清空容器
  
    let str='';
    data.forEach(item => {
      str+=`
          <li class="stores-card">
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
  
    buttonsContainer.innerHTML =`
      <li id="first-page-btn" class="page-item mx-4 d-none d-md-block">
        <a class="page-link ${preIsGray}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
        </a>
      </li>
  
      <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block">
        <a class="page-link ${preIsGray}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">chevron_left</span>
        </a>
      </li>
  
      ${str}
  
      <li id="next-page-btn" class="page-item mx-4 d-none d-md-block">
        <a class="page-link ${nextIsGray}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>
  
      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block">
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
        onPageButtonClick(1);
      });
  
      // 最後頁按鈕事件監聽器
      const lastPageBtn = document.getElementById("last-page-btn");
      lastPageBtn.addEventListener("click", (e) => {
        e.preventDefault();
        onPageButtonClick(totalPages);
      });
  };
  
  
  function onPageButtonClick(page) {
    // 頁面按鈕點擊事件
    currentPage = page;
    displayData(currentPage);
    window.scrollTo({      //讓頁面跑到最上方的語法
      top: 0,
      behavior: 'smooth', // 使用平滑的滾動效果
    });
  };
  // 初始化頁面顯示
  displayData(currentPage);
  
  };

//搜尋邏輯------------------------------------------------------
const searchRender = (data) => {
  const searchInput = document.querySelector("#searchStores");
  searchInput.addEventListener('keydown', e =>{
    if(e.keyCode===13){  //enter的keyCode是13
      let searchData = data;
        if (searchInput.value !== "") {  //搜尋
          searchData = searchData.filter(item => item.name.includes(searchInput.value));
        };
      displayFilteredData(searchData); //顯示搜尋後的數據
      renderPagination(searchData);  //更新搜尋後的頁碼
    }
  });
};

//將店家資料由外部寫入
axios.get('https://json-server-project-wtkt.onrender.com/shops')
.then(response => {
    storeData = response.data;
    storeTagPush()  //組合Tag陣列
    storeRenderData();   //載入預設店家卡片
    applyFilters();  //載入預設篩選器
    renderPagination(storeData); //頁碼邏輯
    isCollect(); ////收藏愛心CSS
})
.catch(error => {
  console.error('Error fetching data:', error);
});

