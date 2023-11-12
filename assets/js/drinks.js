//飲料資訊頁----------------------------------------------------------------------

//變數命名
const drinkList = document.querySelector("#drinkList");
let drinkData = [];
let drinkTagAry=[];

//茶種、配料tag組合函式----------------------------------------
function drinkTagPush(){
  const drinkTag = drinkData.map(function(item,index){
    if(item.Ingredients.length===0){
      return `${item.TeaType}`
    }else{
      return `${item.TeaType},${item.Ingredients}`
    }
  });
  const drinkTag2=[]; 
  for(let i = 0 ; i<drinkTag.length ; i++){
    drinkTag2.push(drinkTag[i].split(','));
  };
  console.log(drinkTag2);


  drinkTagAry=drinkTag2;
};


//載入預設飲料卡片------------------------------------------------
const drinkRender = () => {
    let str='';
    drinkData.forEach(function(item){
        str+=`
        <li id="drinkListItem" class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
        <img src="${item.ImageLink}">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${item.DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            <li class="drinks-tag">${drinkTagAry[item.id-1]}</li>
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
function drinkRenderData(){
  drinkRender();
};


//將飲料資料由外部寫入
axios.get('https://json-server-project-wtkt.onrender.com/drinks')
.then(function(response){
    drinkData = response.data;
    drinkTagPush();
    drinkRenderData();
})
.catch(error => {
  console.error('Error fetching data:', error);
});

