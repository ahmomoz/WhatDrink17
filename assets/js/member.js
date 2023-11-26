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
  window.location.href = "/WhatDrink17/logIn.html";
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
