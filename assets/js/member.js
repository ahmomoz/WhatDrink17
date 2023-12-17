const token = sessionStorage.getItem("jwtToken");
const user_email = sessionStorage.getItem("user_email");
const user_id = sessionStorage.getItem("user_id");
const user_nickname = sessionStorage.getItem("user_nickname");
const user_picture = sessionStorage.getItem("user_picture");

import { addUserDrinkCollection, deleteUserDrinkCollection } from "./api.js";
import { addUserShopCollection, deleteUserShopCollection } from "./api.js";
import { API_BASE_DB_URL } from "./config";

// 確認是否登入
function isAuthenticated() {
  if (!token) {
    redirectToLogin();
    return false;
  }
  // getDrinks();
  return true;
}
isAuthenticated();

// 導回登入頁
function redirectToLogin() {
  window.location.href = "logIn.html";
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
function renderUserData() {
  // console.log(user_picture);
  const url_picture =
    user_picture == "undefined"
      ? "https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/member.png"
      : user_picture;
  userDataArea.innerHTML = `
    <img src="${url_picture}" class="rounded-circle mb-8" style="width: 80px;" alt="user image">
    <p class="fs-32 text-white">${user_nickname}</p>
    <p class="fs-20 text-white">${user_email}</p>
    `;
}

// 渲染飲料列表資料
// 飲料標籤渲染待補
// function renderUserDrinkCollections(data) {
//   let text = "";
//   for (let i = 0; i < data.length; i++) {
//     text += `<li class="drinks-card px-16 py-24 px-md-24">
//         <button type="button" class="collect-btn border-0 text-primary fa-solid fa-heart fs-24" value="uncollect"></button>
//         <img src="${data[i].ImageLink}" alt="drink image">
//         <div class="drinks-card-body ms-16">
//           <h4 class="mb-8 mb-md-12">${data[i].DrinkName}</h4>
//           <ul class="drinks-tag-group mb-8 mb-md-12">
//             <li class="drinks-tag">奶茶</li>
//             <li class="drinks-tag">牛奶</li>
//           </ul>
//           <p class="drinks-card-content mb-24 mb-md-32">${data[i].Description}</p>
//           <a href="#" class="d-block text-primary text-end"><span
//               class="material-symbols-outlined me-2s align-middle">
//               location_on
//             </span>搜尋店家</a>
//         </div>
//       </li>`;
//   }
//   drinkCollectionsArea.innerHTML = text;
// }
function renderUserDrinkCollections(data) {
  let text = "";
  for (let i = 0; i < data.length; i++) {
    // 合併 TeaType 和 Ingredients 陣列，並為每個標籤創建 HTML
    let tagsHtml = data[i].TeaType.concat(data[i].Ingredients)
      .map((tag) => `<li class="drinks-tag">${tag}</li>`)
      .join("");

    text += `<li class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-solid fa-heart fs-24" value="uncollect"></button>
        <img src="${data[i].ImageLink}" alt="drink image">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${data[i].DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            ${tagsHtml}
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
/**-------------------------------tag組合邏輯--------------------------------**/
//飲料tag組合函式----------------------------------------
let drinkTagAry = [];
const drinkTagPush = (data) => {
  //合併茶種、配料成一個陣列
  const drinkTag = data.map((item) => {
    if (!item || !item.TeaType) {
      //防呆
      return "";
    }
    if (item.Ingredients.length === 0) {
      return `${item.TeaType}`; //如果沒有配料就只推入茶種
    } else {
      return `${item.TeaType},${item.Ingredients}`; //推入茶種,配料
    }
  });
  const drinkTag2 = []; //去掉逗點
  for (let i = 0; i < drinkTag.length; i++) {
    drinkTag2.push(drinkTag[i].split(","));
  }

  let tagStr = "";
  let partialTags = []; //保存部分標籤
  drinkTag2.forEach((tags) => {
    tags.forEach((i, index) => {
      tagStr += `<li class="drinks-tag">${i}</li>`;
      if (index === tags.length - 1) {
        // 將完整字串推入drinkTagAry
        partialTags.push(tagStr);
        tagStr = ""; // 清空tagStr以便推入下一個標籤組，避免重複
      }
    });
    drinkTagAry.push(partialTags);
    partialTags = []; // 清空partialTags，避免重複推入
  });
};

//店家tag組合函式----------------------------------------
let storeTagAry = [];
const storeTagPush = (data) => {
  //合併外送、合作活動成一個陣列
  const storeTag = data.forEach((item) => {
    const tags = {
      uber: "uber eat",
      foodpanda: "food panda",
      hasEvent: "合作活動",
    };
    let tagStr = "";
    for (const key in tags) {
      if (item[key]) {
        tagStr += `<li class="stores-tag">${tags[key]}</li>`;
      }
    }
    storeTagAry.push(tagStr);
    tagStr = ""; // 清空tagStr，避免重複推入
  });
};

// 綁定飲料收藏按鈕
function bindCollectButtonDrinkEvents() {
  // 獲取所有收藏按鈕
  const collectButtons = document.querySelectorAll(".collect-drink-btn");

  // 為每個按鈕添加點擊事件
  collectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // 獲取飲料 ID
      const drinkId = this.getAttribute("data-drink-id");

      if (button.value === "uncollect") {
        // 收藏飲料
        addUserDrinkCollection(user_id, drinkId); // 假設 user_id 已定義

        button.value = "collect";
        button.classList.remove("fa-regular");
        button.classList.add("fa-solid");
      } else {
        // 取消收藏
        Swal.fire({
          title: "您確定要取消收藏嗎？",
          text: "此項目將會從收藏列表移除",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "YES",
        }).then((result) => {
          if (result.isConfirmed) {
            deleteUserDrinkCollection(user_id, drinkId); // 假設 user_id 已定義

            button.value = "uncollect";
            button.classList.remove("fa-solid");
            button.classList.add("fa-regular");

            Swal.fire({
              title: "已取消收藏",
              text: "此項目已從收藏列表移除",
              icon: "success",
            });
          }
        });
      }
    });
  });
}

// 綁定店家收藏按鈕
function bindCollectButtonStoreEvents() {
  // 獲取所有店家收藏按鈕
  const collectButtons = document.querySelectorAll(".collect-store-btn");

  // 為每個按鈕添加點擊事件
  collectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // 獲取店家 ID
      const storeId = this.getAttribute("data-store-id");

      if (button.value === "uncollect") {
        // 收藏店家
        addUserShopCollection(user_id, storeId); // 假設 user_id 已定義

        button.value = "collect";
        button.classList.remove("fa-regular");
        button.classList.add("fa-solid");
      } else {
        // 取消收藏
        Swal.fire({
          title: "您確定要取消收藏嗎？",
          text: "此項目將會從收藏列表移除",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "YES",
        }).then((result) => {
          if (result.isConfirmed) {
            deleteUserShopCollection(user_id, storeId); // 假設 user_id 已定義
            button.value = "uncollect";
            button.classList.remove("fa-solid");
            button.classList.add("fa-regular");

            Swal.fire({
              title: "已取消收藏",
              text: "此項目已從收藏列表移除",
              icon: "success",
            });
          }
        });
      }
    });
  });
}

function fillUserInfo() {
  if (user_nickname && user_email) {
    const nicknameInput = document.getElementById("userName");
    const emailInput = document.getElementById("logInEmail");

    if (nicknameInput && emailInput) {
      nicknameInput.value = user_nickname;
      emailInput.value = user_email;
    }
  }
}

/**-------------------------------頁碼邏輯--------------------------------**/
//飲料頁頁碼邏輯------------------------------------------------------
const drinkRenderPagination = (pageData) => {
  const totalItems = pageData.length; //飲料卡片數量
  const itemsPerPage = 10; //每頁顯示十個卡片
  const totalPages = Math.ceil(totalItems / itemsPerPage); //計算總頁數
  let currentPage = 1; //當前頁數，預設為第一頁

  function displayData(page) {
    //計算目前頁面顯示的卡片數量範圍
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // 獲取目前頁面的數據
    const currentPageData = pageData.slice(startIndex, endIndex);

    // 渲染當前頁面的數據
    renderCards(currentPageData);

    // 渲染分頁按鈕
    renderPaginationButtons();
  }

  function renderCards(data) {
    drinkCollectionsArea.innerHTML = ""; // 清空容器

    let str = "";
    data.forEach((item, index) => {
      str += `
            <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn collect-drink-btn border-0 text-primary fa-solid fa-heart fs-24" data-drink-id="${item.id}" value="collected"></button>
              <img src="${item.ImageLink}" alt="drink image">
              <div class="w-100 d-flex flex-column justify-content-between">
                <div class="drinks-card-body ms-16">
                  <h4 class="mb-8 mb-md-12">${item.DrinkName}</h4>
                  <ul class="drinks-tag-group mb-8 mb-md-12">
                    ${drinkTagAry[index]}
                  </ul>
                  <p class="drinks-card-content mb-24 mb-md-32">${item.Description}</p>
                </div>
                <div class="d-flex justify-content-between align-items-end ms-16">
                  <div class="d-flex align-items-center drinkStoreTag">
                    <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                    <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${item.StoreName}</p>
                  </div>
                  <a href="stores-info.html?id=${item.ShopID}" class="d-block text-primary text-end"><span
                      class="material-symbols-outlined me-2 align-middle">
                      location_on
                    </span>搜尋店家</a>
                </div>
            </li>
          `;
    });
    drinkCollectionsArea.innerHTML = str;
  }

  //渲染分頁按鈕的邏輯，根據前頁和總頁數產生分頁按鈕
  function renderPaginationButtons() {
    const drinkButtonsContainer = document.getElementById("drinkPagination");
    drinkButtonsContainer.innerHTML = ""; // 清空按鈕容器

    // 生成頁碼按鈕
    let str = "";
    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === currentPage ? "active" : ""; // 檢查是否為當前頁面，是的話加上active樣式
      str += `
        <li class="page-item mx-4 ${isActive}">   
          <a class="page-link" href="#" data-page="${i}">${i}</a>
        </li>
      `;
    }
    const preIsGray = currentPage === 1 ? "text-gray" : ""; //檢查當前頁面是否為1，是的話加上灰色樣式
    const nextIsGray = currentPage === totalPages ? "text-gray" : ""; //檢查當前頁面是否為最後一頁，是的話加上灰色樣式

    const firstPageDisabled = currentPage === 1 ? "disabled" : ""; // 如果當前頁面為第一頁，添加disabled屬性
    const previousPageDisabled = currentPage === 1 ? "disabled" : ""; // 如果當前頁面為第一頁，添加disabled屬性
    const nextPageDisabled = currentPage === totalPages ? "disabled" : ""; // 如果當前頁面為最後一頁，添加disabled屬性
    const lastPageDisabled = currentPage === totalPages ? "disabled" : ""; // 如果當前頁面為最後一頁，添加disabled屬性

    drinkButtonsContainer.innerHTML = `
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
    pageLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); //取消a連結效果
        const pageNumber = parseInt(link.dataset.page);
        onPageButtonClick(pageNumber);
      });
    });

    const page = [currentPage]; //存放目前頁面數字

    // 前一頁按鈕事件監聽器
    const previousPageBtn = document.getElementById("previousPageBtn");
    previousPageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (page[0] > 1) {
        onPageButtonClick(page[0] - 1);
      }
    });

    // 後一頁按鈕事件監聽器
    const nextPageBtn = document.getElementById("next-page-btn");
    nextPageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (page[0] !== totalPages) {
        onPageButtonClick(page[0] + 1);
      }
    });

    // 最前頁按鈕事件監聽器
    const firstPageBtn = document.getElementById("first-page-btn");
    firstPageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (page[0] > 1) {
        onPageButtonClick(1);
      }
    });

    // 最後頁按鈕事件監聽器
    const lastPageBtn = document.getElementById("last-page-btn");
    lastPageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (page[0] !== totalPages) {
        onPageButtonClick(totalPages);
      }
    });
  }

  function onPageButtonClick(page) {
    // 頁面按鈕點擊事件
    currentPage = page;
    displayData(currentPage);
    window.scrollTo(0, 400); //讓頁面跑到最上方的語法
  }
  // 初始化頁面顯示
  displayData(currentPage);
};

//店家頁頁碼邏輯------------------------------------------------------
const storeRenderPagination = (pageData) => {
  const totalItems = pageData.length; //卡片數量
  const itemsPerPage = 12; //每頁顯示十個卡片
  const totalPages = Math.ceil(totalItems / itemsPerPage); //計算總頁數
  let currentPage = 1; //當前頁數，預設為第一頁

  function displayData(page) {
    //計算目前頁面顯示的卡片數量範圍
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // 獲取目前頁面的數據
    const currentPageData = pageData.slice(startIndex, endIndex);

    // 渲染當前頁面的數據
    renderCards(currentPageData);

    // 渲染分頁按鈕
    renderPaginationButtons();
  }

  function renderCards(data) {
    shopCollectionsArea.innerHTML = ""; // 清空容器

    let str = "";
    data.forEach((item, index) => {
      str += `
          <li class="stores-card">
          <button type="button" class="collect-btn collect-store-btn border-0 text-primary fa-solid fa-heart fs-24" data-store-id="${item.id}" value="collected"></button>
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
              ${storeTagAry[index]}
            </ul>
            <a href="stores-info.html?id=${item.id}" class="stores-card-btn">查看店家資訊</a>
          </div>
        </li>
          `;
    });
    shopCollectionsArea.innerHTML = str;
  }

  //渲染分頁按鈕的邏輯，根據前頁和總頁數產生分頁按鈕
  function renderPaginationButtons() {
    const storeButtonsContainer = document.getElementById("storePagination");
    storeButtonsContainer.innerHTML = ""; // 清空按鈕容器

    // 生成頁碼按鈕
    let str = "";
    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === currentPage ? "active" : ""; // 檢查是否為當前頁面，是的話加上active樣式
      str += `
        <li class="page-item mx-4 ${isActive}">   
          <a class="page-link" href="#" data-page="${i}">${i}</a>
        </li>
      `;
    }
    const preIsGray = currentPage === 1 ? "text-gray" : ""; //檢查當前頁面是否為1，是的話加上灰色樣式
    const nextIsGray = currentPage === totalPages ? "text-gray" : ""; //檢查當前頁面是否為最後一頁，是的話加上灰色樣式

    const firstPageDisabled = currentPage === 1 ? "disabled" : ""; // 如果當前頁面為第一頁，添加disabled屬性
    const previousPageDisabled = currentPage === 1 ? "disabled" : ""; // 如果當前頁面為第一頁，添加disabled屬性
    const nextPageDisabled = currentPage === totalPages ? "disabled" : ""; // 如果當前頁面為最後一頁，添加disabled屬性
    const lastPageDisabled = currentPage === totalPages ? "disabled" : ""; // 如果當前頁面為最後一頁，添加disabled屬性

    storeButtonsContainer.innerHTML = `
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
    pageLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); //取消a連結效果
        const pageNumber = parseInt(link.dataset.page);
        onPageButtonClick(pageNumber);
      });
    });

    const page = [currentPage]; //存放目前頁面數字

    // 前一頁按鈕事件監聽器
    const previousPageBtn = document.getElementById("previousPageBtn");
    previousPageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (page[0] > 1) {
        onPageButtonClick(page[0] - 1);
      }
    });

    // 後一頁按鈕事件監聽器
    const nextPageBtn = document.getElementById("next-page-btn");
    nextPageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (page[0] !== totalPages) {
        onPageButtonClick(page[0] + 1);
      }
    });

    // 最前頁按鈕事件監聽器
    const firstPageBtn = document.getElementById("first-page-btn");
    firstPageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (page[0] > 1) {
        onPageButtonClick(1);
      }
    });

    // 最後頁按鈕事件監聽器
    const lastPageBtn = document.getElementById("last-page-btn");
    lastPageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (page[0] !== totalPages) {
        onPageButtonClick(totalPages);
      }
    });
  }

  function onPageButtonClick(page) {
    // 頁面按鈕點擊事件
    currentPage = page;
    displayData(currentPage);
    window.scrollTo(0, 400); //讓頁面跑到最上方的語法
  }
  // 初始化頁面顯示
  displayData(currentPage);
};

/**-------------------------------資料寫入--------------------------------**/
//自server取得使用者資料後執行renderUserData
axios.get(`${API_BASE_DB_URL}/users/${user_id}`).then((response) => {
  let userData = response.data;
  renderUserData(userData);
});

// //自server取得該使用者收藏清單的drinkId列表並轉化成飲料資料的矩陣
// axios
//   .get(`${API_BASE_DB_URL}/userDrinkCollections?userId=${user_id}`)
//   .then((response) => {
//     const userDrinkCollections = response.data;
//     // 抓取全部DrinkId
//     const drinkIds = userDrinkCollections.map((item) => item.drinkId);
//     // 組成取得飲料資料的URL
//     const drinksUrl = `${API_BASE_DB_URL}/drinks?id=${drinkIds.join("&id=")}`;

//     // 取得飲料資料
//     axios.get(drinksUrl).then((response) => {
//       drinkTagPush(response.data); //飲料Tag函式
//       // renderUserDrinkCollections(response.data); //渲染飲料收藏頁面
//       drinkRenderPagination(response.data); //渲染飲料收藏頁碼
//       bindCollectButtonDrinkEvents();
//     });
//   })
//   .catch((error) => {
//     console.error("發生錯誤:", error);
//   });

// //自server取得該使用者收藏清單的storeId列表並轉化成飲料資料的矩陣
// axios
//   .get(`${API_BASE_DB_URL}/userShopCollections?userId=${user_id}`)
//   .then((response) => {
//     const usershopCollections = response.data;
//     // 抓取全部shopId
//     const shopIds = usershopCollections.map((item) => item.shopId);
//     // 組成取得店家資料的URL
//     const shopsUrl = `${API_BASE_DB_URL}/shops?id=${shopIds.join("&id=")}`;

//     // 取得店家資料
//     axios.get(shopsUrl).then((response) => {
//       storeTagPush(response.data); //店家Tag函式
//       // renderUserShopCollections(response.data); //渲染店家收藏頁面
//       storeRenderPagination(response.data); //渲染店家收藏頁碼
//       bindCollectButtonStoreEvents();
//     });
//   })
//   .catch((error) => {
//     console.error("發生錯誤:", error);
//   });

fillUserInfo();

function loadAndDisplayDrinks() {
  axios
    .get(`${API_BASE_DB_URL}/userDrinkCollections?userId=${user_id}`)
    .then((response) => {
      const userDrinkCollections = response.data;
      const drinkIds = userDrinkCollections.map((item) => item.drinkId);
      const drinksUrl = `${API_BASE_DB_URL}/drinks?id=${drinkIds.join("&id=")}`;

      axios.get(drinksUrl).then((response) => {
        drinkTagPush(response.data);
        drinkRenderPagination(response.data);
        bindCollectButtonDrinkEvents();
        // showTabContent("collectDrinks");
      });
    })
    .catch((error) => {
      console.error("發生錯誤:", error);
    });
}

function loadAndDisplayStores() {
  axios
    .get(`${API_BASE_DB_URL}/userShopCollections?userId=${user_id}`)
    .then((response) => {
      const usershopCollections = response.data;
      const shopIds = usershopCollections.map((item) => item.shopId);
      const shopsUrl = `${API_BASE_DB_URL}/shops?id=${shopIds.join("&id=")}`;

      axios.get(shopsUrl).then((response) => {
        storeTagPush(response.data);
        storeRenderPagination(response.data);
        bindCollectButtonStoreEvents();
        // showTabContent("collectDStores");
      });
    })
    .catch((error) => {
      console.error("發生錯誤:", error);
    });
}

// 初始化頁面時加載預設標籤內容
loadAndDisplayDrinks(); // 或者根據您的需求調用 loadAndDisplayStores

document
  .getElementById("collectDrinks-tab")
  .addEventListener("click", loadAndDisplayDrinks);
document
  .getElementById("collectDStores-tab")
  .addEventListener("click", loadAndDisplayStores);
