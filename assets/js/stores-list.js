//店家資訊頁----------------------------------------------------------------------

//變數命名
const storeList = document.querySelector("#storeList");
let storeData=[];

//初始化預設飲料卡片函式--------------------------------------------
function storeRenderData(){
    storeRender();
};



//將飲料資料由外部寫入
axios.get('https://json-server-project-wtkt.onrender.com/shops')
.then(function(response){
    storeData = response.data;
    storeRenderData();
})
.catch(error => {
  console.error('Error fetching data:', error);
});

//載入預設飲料卡片------------------------------------------------
const storeRender = () => {
    let str='';
    storeData.forEach(function(item){
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
                <li class="stores-tag">uber eat</li>
                <li class="stores-tag">food panda</li>
                <li class="stores-tag">合作活動</li>
              </ul>
              <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `;
    });
    storeList.innerHTML = str;
};



