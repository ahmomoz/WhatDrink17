import { API_BASE_DB_URL } from "./config";
import { addUserShopCollection, deleteUserShopCollection } from "./api.js";
document.addEventListener("DOMContentLoaded", () => {
  const popularStoreList = document.querySelector("#popularStoreList");
  let storeData = [];
  let storeTagAry = [];
  let userStoreCollections = []; // 存放用戶收藏店家
  let topFourStore = []; // 空陣列存放取出的店家數據
  const userId = sessionStorage.getItem("user_id");

// 導回登入頁
function redirectToLogin() {
  window.location.href = "logIn.html";
}
  // 使用 Promise.all 同時執行兩個請求
  Promise.all([
    axios.get(
      "https://json-server-project-wtkt.onrender.com/userShopCollections"
    ),
    axios.get("https://json-server-project-wtkt.onrender.com/shops"),
  ])
    .then((responses) => {
      userStoreCollections = responses[0].data;
      storeData = responses[1].data;

      // 在這裡調用相關函數
      getTopFourStore();
      storeTagPush(); //組合Tag陣列
      storeRenderData(); //載入預設店家卡片
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  //店家tag組合函式----------------------------------------
  const storeTagPush = () => {
    //合併外送、合作活動成一個陣列
    const storeTag = storeData.forEach((item) => {
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

  //計算熱門店家前4名------------------------------------------------
  function getTopFourStore() {
    // 空物件存放 storeId 的出現次數
    let storeIdCount = {};

    // 遍歷 stores 陣列
    for (var i = 0; i < userStoreCollections.length; i++) {
      let storeId = userStoreCollections[i].shopId;

      // 如果 storeId 已經存在，將次數加 1
      if (storeIdCount[storeId]) {
        storeIdCount[storeId]++;
      } else {
        // 如果 storeId 不存在，初始化為 1
        storeIdCount[storeId] = 1;
      }
    }
    // 驗證
    // console.log(storeIdCount);

    // 用 Object.entries 將物件轉為陣列
    const storeIdCountArr = Object.entries(storeIdCount);
    // console.log(storeIdCountArray);

    // 使用 sort 由大到小排序
    storeIdCountArr.sort(function (a, b) {
      return b[1] - a[1];
    });

    // 取得排序後的前6個元素
    let topFourStoreIds = storeIdCountArr.slice(0, 4);

    // 驗證
    // console.log(topFourStore);

    // 使用 map 方法取出每個陣列的第一個值（storeId）
    let topFourIds = topFourStoreIds.map(function (item) {
      return item[0];
    });

    // 驗證
    // console.log(topFourIds);

    // 找出對應的飲料數據
    storeData.forEach(function (item) {
      topFourIds.forEach(function (i) {
        if (i == item.id) {
          topFourStore.push(item);
        }
      });
    });
  }

  //載入預設店家卡片函式------------------------------------------------
  const storeRender = () => {
    let str = "";
    let tempStoreIds = []
    let userStoreCollectionList = [];
    axios.get(`https://drinkpicker-nclv.onrender.com/userShopCollections?userId=${userId}`)
    .then(function (response){
      let temp = [];
      temp = response.data;
      for(let i=0; i<temp.length; i++){
      userStoreCollectionList[i] = temp[i].shopId;
    }
    userStoreCollectionList = userStoreCollectionList.map(item => Number(item)).filter(item => !isNaN(item));
    topFourStore.forEach((item) => {
      // console.log(item.id)
      // console.log(userStoreCollectionList)
      const btn_tag = userStoreCollectionList.includes(item.id)
      ? `<button type="button" class="collect-btn collect-store-btn border-0 text-primary fa-heart fs-24 fa-solid" data-shop-id="${item.id}" value="collected" aria-hidden="true"></button>`
      : `<button type="button" class="collect-btn collect-store-btn border-0 text-primary fa-regular fa-heart fs-24" data-shop-id="${item.id}" value="uncollect" aria-hidden="true"></button>`;  
      // console.log(btn_tag)
      str += `
        <li class="stores-card" data-shop-id="${item.id}">
            ${btn_tag}
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
                ${storeTagAry[item.id - 1]}
              </ul>
              <a href="stores-info.html?id=${item.id
        }" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `;
      // console.log(str);
    });
    popularStoreList.innerHTML = str;
  })



  };

  // 初始化預設飲料卡片函式--------------------------------------------
  const storeRenderData = () => {
    storeRender();
    heartCheck();
  };




  //預設愛心函式------------------------------------------------------
  const heartCheck = () => {
    // 取得頁面上店家卡片
  };


  //收藏店家功能-----------------------------------------------------
  popularStoreList.addEventListener("click", function (e) {
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
});

