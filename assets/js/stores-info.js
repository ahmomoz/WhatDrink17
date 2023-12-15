//變數命名
const storeInfo = document.querySelector("#storeInfo"); //卡片列表
let storeInfoData = [];
let storeTagAry = [];
const breadcrumb = document.querySelector(".breadcrumb");

import axios from "axios";
const storeId = window.location.href.split("?id=").pop();

import { API_BASE_DB_URL } from "./config";
import { addUserShopCollection, deleteUserShopCollection } from "./api.js";
const user_id = sessionStorage.getItem("user_id");

// 將店家資料由外部寫入
axios
  .get(`${API_BASE_DB_URL}/shops?id=${storeId}`)
  .then(async (response) => {
    // 使用 async 關鍵字
    storeInfoData = response.data;
    breadcrumbPush(); // 載入麵包屑路徑
    storeTagPush(); // 載入店家標籤
    await checkUserShopCollection(); // 等待確認使用者是否收藏完成
    storeInfoRenderData(); // 載入個別店家卡片
    isCollect(); // 收藏愛心CSS
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// 確認使用者是否收藏
let check_userShopCollection;
async function checkUserShopCollection() {
  try {
    const res = await axios.get(
      `${API_BASE_DB_URL}/userShopCollections?userId=${user_id}&shopId=${storeId}`
    );
    check_userShopCollection = res.data.length === 1;
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

const breadcrumbPush = () => {
  let str = "";
  storeInfoData.forEach((item) => {
    str += `
    <li class="breadcrumb-item d-inline"><a href="index.html" class="breadcrumb-item fs-16">首頁</a></li>
    <li class="breadcrumb-item d-inline"><a href="stores-list.html" class="breadcrumb-item fs-16">熱門店家</a></li>
    <li class="breadcrumb-item active d-inline" aria-current="page" class="fs-16">${item.name}</li>
  `;
  });

  breadcrumb.innerHTML = str;
};
//店家tag組合函式----------------------------------------
const storeTagPush = () => {
  //合併外送、合作活動成一個陣列
  const storeTag = storeInfoData.forEach((item) => {
    const tags = {
      uber: "uber eat",
      foodpanda: "food panda",
      hasEvent: "合作活動",
    };
    let tagStr = "";
    for (const key in tags) {
      if (item[key]) {
        tagStr += `<li class="stores-tag">${tags[key]}</li>`;
      };
    };
    storeTagAry.push(tagStr);
    tagStr = ""; // 清空tagStr，避免重複推入
  });
};

//載入預設分店卡片函式------------------------------------------------
const storeInfoRender = () => {
  storeTagPush();
  let str = "";

  const btn_tag = check_userShopCollection
    ? `<button type="button" class="btn-collect px-12 py-8 border border-primary rounded-pill  btn-collect-collcted" value="collected">
    <i class="fa-heart me-4 btn-collect-icon fa-solid" aria-hidden="true"></i>收藏店家</button>`
    : `<button type="button" class="btn-collect px-12 py-8 border border-primary rounded-pill" value="uncollect">
    <i class="fa-regular fa-heart me-4 btn-collect-icon" aria-hidden="true"></i>收藏店家</button>`;

  storeInfoData.forEach((item) => {
    str += `              
        <div class="row">
        <div class="col-12 col-lg-4 mb-24 mb-lg-0">
          <img src="${item.logo}" class="w-100" alt="logo">
        </div>
        <div class="col-12 col-lg-8">
          <div class="d-flex align-items-start flex-wrap mb-16 mb-md-0">

            <div class="me-md-16 mb-16">
              <h1 class="fs-32 mb-8">${item.name}</h1>
              <ul class="d-flex text-primary m-0 p-0">
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
              </ul>
            </div>

            <div class="w-md-80 ms-auto d-flex justify-content-between align-items-center mb-md-16">
              ${btn_tag}
              <ul class="d-flex m-0 p-0">
                <li class="me-16"><a href="${item.officialWebsite}"><span class="material-symbols-outlined">
                      language
                    </span></a></li>
                <li><a href="#"><span class="material-symbols-outlined">
                      share
                    </span></a></li>
              </ul>
            </div>

          </div>
          <p class="mb-16">${item.Description}</p>
          <ul class="stores-tag-group mb-16">
          ${storeTagAry[0]}
          </ul>
        </div>
      </div>
`;
  });

  storeInfo.innerHTML = str;
};

//初始化預設飲料卡片函式--------------------------------------------
const storeInfoRenderData = () => {
  storeInfoRender();
};

//收藏愛心CSS樣式函式-----------------------------------------------
function isCollect() {
  const collectBtn = document.querySelector(".btn-collect"); //抓按鈕class
  const collectBtnIcon = document.querySelector(".btn-collect-icon"); //抓按鈕class
  collectBtn.addEventListener("click", function (e) {
    if(user_id===null){   //確認是否為會員，不是的話導向會員頁
      redirectToLogin(); //導向登入頁函數
    }else{
      //還沒收藏時，value 預設傳送 collected，點擊後改傳uncollect，並移除外框樣式class、新增填滿樣式class
      if (collectBtn.value == "collected") {
        collectBtn.value = "uncollect";
        collectBtn.classList.remove("btn-collect-collcted");
        collectBtnIcon.classList.remove("fa-solid");
        collectBtnIcon.classList.add("fa-regular");
        deleteUserShopCollection(user_id, storeId); // 假設 user_id 已定義
        Swal.fire("已取消收藏");
  
        //已經收藏時，value 已改成傳送 uncollect，點擊後變為 collected，並移除填滿樣式class，新增外框樣式class
      } else {
        collectBtn.value = "collected";
        collectBtn.classList.add("btn-collect-collcted");
        collectBtnIcon.classList.remove("fa-regular");
        collectBtnIcon.classList.add("fa-solid");
        addUserShopCollection(user_id, storeId); // 假設 user_id 已定義
        Swal.fire("收藏成功");
      };
    };
  });
};



//導回登入頁函數-------------------------------------------------------
function redirectToLogin() {
  window.location.href = "logIn.html";
};