const token = sessionStorage.getItem("jwtToken");

// 確認是否登入
function isAuthenticated() {
  if (!token) {
    console.log("無權限: 沒有找到 Token");
    redirectToLogin();
    return false;
  }
  getDrinks();
  return true;
}
isAuthenticated();

// 導回登入頁
function redirectToLogin() {
  console.log("重新導回登入頁");
  window.location.href = "logIn.html";
}

// 依權限取得資料
function getDrinks() {
  axios
    .get("https://drinkpicker-nclv.onrender.com/660/drinks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log("飲料資料:", response.data);
    })
    .catch((error) => {
      console.error(
        "錯誤:",
        error.response ? error.response.data : "無法連接到伺服器"
      );
    });
}

// 登出後 清空 Session Storage
const logoutButton = document.querySelector("#logout-button");
if (logoutButton) {
  logoutButton.addEventListener("click", function () {
    sessionStorage.clear();
    redirectToLogin();
  });
}

// 修改密碼
// 獲取修改密碼按鈕
const modifyPasswordButton = document.querySelector("#modifyPasswordButton");
modifyPasswordButton.addEventListener("click", function (event) {
  event.preventDefault(); // 防止表單提交
  window.location.href = "modifyPassword.html"; // 導航到修改密碼頁面
});

//頂部使用者資料
const userDataArea = document.querySelector(".userData");

//下方飲料收藏列表
const drinkCollectionsArea = document.querySelector(".drinkCollections");

//下方的店家收藏列表
const shopCollectionsArea = document.querySelector(".shopCollectionsArea");

// 渲染使用者資料
// 目前還沒結合登入，暫時寫死userId=1的地方
function renderUserData(data) {
  const user_email = sessionStorage.getItem("user_email");
  const user_id = sessionStorage.getItem("user_id");
  const user_nickname = sessionStorage.getItem("user_nickname");
  userDataArea.innerHTML = `
    <img src="../assets/images/member.png" class="rounded-circle mb-8" style="width: 80px;" alt="user image">
    <p class="fs-32 text-white">${user_nickname}</p>
    <p class="fs-20 text-white">${user_email}</p>
    
    `;
}

// 渲染飲料列表資料
// 飲料標籤渲染待補
function renderUserDrinkCollections(data) {
  let text = "";
  for (let i = 0; i < data.length; i++) {
    text += `<li class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-solid fa-heart fs-24" value="uncollect"></button>
        <img src="${data[i].ImageLink}" alt="drink image">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${data[i].DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            <li class="drinks-tag">奶茶</li>
            <li class="drinks-tag">牛奶</li>
          </ul>
          <p class="drinks-card-content mb-24 mb-md-32">${data[i].Description}</p>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>`;
  }
  drinkCollectionsArea.innerHTML = text;
}

// 渲染收藏店家列表資料
// 店家標籤&查看店家資訊待補
function renderUserShopCollections(data) {
  let text = "";
  for (let i = 0; i < data.length; i++) {
    text += `<li class="stores-card px-16 py-24 px-md-24">
    <button type="button" class="collect-btn border-0 text-primary fa-solid fa-heart fs-24" value="uncollect"></button>
    <img src="${data[i].logo}" class="mb-8" alt="store image">
    <div class="stores-card-body">
      <div class="d-flex justify-content-between">
        <h5 class="mb-8 mb-md-12">${data[i].name}</h5>
        <ul class="d-flex text-primary">
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-regular fa-star"></i></li>
        </ul>
      </div>
      <p class="stores-card-content mb-16">
      ${data[i].Description}</p>
      <ul class="stores-tag-group mb-16">
        <li class="stores-tag">uber eat</li>
        <li class="stores-tag">food panda</li>
        <li class="stores-tag">合作活動</li>
      </ul>
      <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
    </div>
  </li>`;
  }
  shopCollectionsArea.innerHTML = text;
}

/**-------------------------------頁碼邏輯--------------------------------**/
//店家頁頁碼邏輯------------------------------------------------------
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
    shopCollectionsArea.innerHTML = ""; // 清空容器
  
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
            <a href="stores-info.html?id=${item.id}" class="stores-card-btn">查看店家資訊</a>
          </div>
        </li>
          `;
      });
      shopCollectionsArea.innerHTML = str;
  };
  
  //渲染分頁按鈕的邏輯，根據前頁和總頁數產生分頁按鈕
  function renderPaginationButtons() {
    const storeButtonsContainer = document.getElementById("storePagination");
    storeButtonsContainer.innerHTML = ""; // 清空按鈕容器
  
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
  
    storeButtonsContainer.innerHTML =`
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



/**-------------------------------資料寫入--------------------------------**/
//自server取得使用者資料後執行renderUserData
axios
  .get("https://json-server-project-wtkt.onrender.com/users?id=1")
  .then((response) => {
    let userData = response.data;
    renderUserData(userData);
  });

//自server取得該使用者收藏清單的drinkId列表並轉化成飲料資料的矩陣
axios
  .get(
    `https://json-server-project-wtkt.onrender.com/userDrinkCollections?userId=1`
  )
  .then((response) => {
    const userDrinkCollections = response.data;
    // 抓取全部DrinkId
    const drinkIds = userDrinkCollections.map((item) => item.drinkId);
    // 組成取得飲料資料的URL
    const drinksUrl = `https://json-server-project-wtkt.onrender.com/drinks?id=${drinkIds.join(
      "&id="
    )}`;

    // 取得飲料資料
    axios.get(drinksUrl).then((response) => {
      console.log(response.data);
      renderUserDrinkCollections(response.data);
    });
  })
  .catch((error) => {
    console.error("發生錯誤:", error);
  });

//自server取得該使用者收藏清單的storeId列表並轉化成飲料資料的矩陣
axios
  .get(
    `https://json-server-project-wtkt.onrender.com/userShopCollections?userId=1`
  )
  .then((response) => {
    const usershopCollections = response.data;
    // 抓取全部shopId
    const shopIds = usershopCollections.map((item) => item.shopId);
    // 組成取得店家資料的URL
    const shopsUrl = `https://json-server-project-wtkt.onrender.com/shops?id=${shopIds.join(
      "&id="
    )}`;

    // 取得店家資料
    axios.get(shopsUrl).then((response) => {
      console.log(response.data);
      renderUserShopCollections(response.data);
    });
  })
  .catch((error) => {
    console.error("發生錯誤:", error);
  });
