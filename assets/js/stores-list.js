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
        <li id="storeListItem" class="stores-card px-16 py-24 mb-40 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
            <img src="${item.logo}">
            <div class="stores-card-body">
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
};
function displayFilteredData(data) {  //用於更新畫面的函數
  let str = '';
  data.forEach(item => {
    str += `
      <li id="storeListItem" class="stores-card px-16 py-24 mb-40 px-md-24">
      <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
      <img src="${item.logo}">
      <div class="stores-card-body">
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

//將店家資料由外部寫入
axios.get('https://json-server-project-wtkt.onrender.com/shops')
.then(response => {
    storeData = response.data;
    storeTagPush()  //組合Tag陣列
    storeRenderData();   //載入預設店家卡片
    applyFilters();  //載入預設篩選器
})
.catch(error => {
  console.error('Error fetching data:', error);
});

