//變數命名
const storeInfo = document.querySelector("#storeInfo"); //卡片列表
let storeInfoData = [];
let storeTagAry = [];
const breadcrumb = document.querySelector(".breadcrumb");

import axios from 'axios';
const storeId = window.location.href.split("?id=").pop()

//將店家資料由外部寫入
axios.get(`https://json-server-project-wtkt.onrender.com/shops?id=${storeId}`)
  .then(response => {
    storeInfoData = response.data;
    breadcrumbPush(); //載入麵包屑路徑
    storeTagPush(); //載入店家標籤
    storeInfoRenderData(); //載入個別店家卡片
    // console.log(storeInfoData);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

const breadcrumbPush = () => {
  let str = ''
  storeInfoData.forEach(item => {
    str += `
    <li class="breadcrumb-item d-inline"><a href="index.html" class="breadcrumb-item fs-16">首頁</a></li>
    <li class="breadcrumb-item d-inline"><a href="stores-list.html" class="breadcrumb-item fs-16">熱門店家</a></li>
    <li class="breadcrumb-item active d-inline" aria-current="page" class="fs-16">${item.name}</li>
  `;
  })

  breadcrumb.innerHTML = str;
}
//店家tag組合函式----------------------------------------
const storeTagPush = () => {      //合併外送、合作活動成一個陣列
  const storeTag = storeInfoData.forEach(item => {
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
    tagStr = ''; // 清空tagStr，避免重複推入
  });
  // console.log(storeTagAry[0]);

};

//載入預設分店卡片函式------------------------------------------------
const storeInfoRender = () => {
  storeTagPush();
  let str = '';
  storeInfoData.forEach(item => {
    str += `              
        <div class="row">
        <div class="col-12 col-md-4">
          <img src="${item.logo}" class="w-100" alt="logo">
        </div>
        <div class="col-12 col-md-8">
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

            <div class="w-md-50 d-flex justify-content-between align-items-center mb-md-16">
              <a href="#" class="btn-collect px-12 py-8 border border-primary rounded-pill"><span
                  class="material-symbols-outlined me-4">
                  favorite
                </span>收藏店家</a>
              <ul class="d-flex m-0 p-0">
                <li class="me-16"><a href="#"><span class="material-symbols-outlined">
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
  // console.log(storeTagAry[0]);

};

//初始化預設飲料卡片函式--------------------------------------------
const storeInfoRenderData = () => {
  storeInfoRender();
};