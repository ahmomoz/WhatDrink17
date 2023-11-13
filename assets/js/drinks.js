//飲料資訊頁----------------------------------------------------------------------

//變數命名
const drinkList = document.querySelector("#drinkList");
let teaTypeSelect = document.querySelector("#teaTypeSelect"); //茶種篩選
let ingredientsSelect = document.querySelector("#ingredientsSelect"); //配料篩選
let drinkData = [];
let drinkTagAry = [];

//茶種、配料tag組合函式----------------------------------------
const drinkTagPush = () => {  //合併茶種、配料成一個陣列
  const drinkTag = drinkData.map(item => {
    if(item.Ingredients.length===0){
      return `${item.TeaType}`   //如果沒有配料就只推入茶種
    }else{
      return `${item.TeaType},${item.Ingredients}` //推入茶種,配料
    }
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
        <li id="drinkListItem" class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
        <img src="${item.ImageLink}">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${item.DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            ${drinkTagAry[item.id-1]}
          </ul>
          <p class="drinks-card-content mb-24 mb-md-32">${item.Description}</p>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
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
};

//飲料篩選邏輯-----------------------------------------------------
teaTypeSelect.addEventListener('click',function(e){
  let filteredData = drinkData;
  if(teaTypeSelect.value==="紅茶" || teaTypeSelect.value==="綠茶" || teaTypeSelect.value==="奶茶" || teaTypeSelect.value==="烏龍茶" || teaTypeSelect.value==="冬瓜茶" || teaTypeSelect.value==="麥茶" || teaTypeSelect.value==="牛奶" || teaTypeSelect.value==="鮮果汁"){
    filteredData = drinkData.filter(item => item.TeaType[0] === teaTypeSelect.value || item.TeaType[1] === teaTypeSelect.value);
  };

  let str='';
    filteredData.forEach(item => {
        str+=`
        <li id="drinkListItem" class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
        <img src="${item.ImageLink}">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${item.DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            ${drinkTagAry[item.id-1]}
          </ul>
          <p class="drinks-card-content mb-24 mb-md-32">${item.Description}</p>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>
        `;
    });
    drinkList.innerHTML = str;
});

//將飲料資料由外部寫入
axios.get('https://json-server-project-wtkt.onrender.com/drinks')
.then(response => {
    drinkData = response.data;
    drinkTagPush();
    drinkRenderData();
})
.catch(error => {
  console.error('Error fetching data:', error);
});

