//頂部使用者資料
const userDataArea = document.querySelector(".userData");

//下方飲料列表
const drinkCollectionsArea = document.querySelector(".drinkCollections");

// 渲染使用者資料
// 目前還沒結合登入，暫時寫死userId=1的地方
function renderUserData(data) {
  userDataArea.innerHTML = `
    <img src="../assets/images/member.png" class="rounded-circle mb-8" style="width: 80px;" alt="user image">
    <p class="fs-32 text-white">${data[0].username}</p>
    <p class="fs-20 text-white">${data[0].email}</p>
    `
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
      </li>`
  }
  drinkCollectionsArea.innerHTML = text;
}

//自server取得使用者資料後執行renderUserData
axios.get('https://json-server-project-wtkt.onrender.com/users?id=1')
  .then(response => {
    let userData = response.data;
    renderUserData(userData)
  });

//自server取得該使用者收藏清單的drinkId列表
//並轉化成飲料資料的矩陣
axios.get(`https://json-server-project-wtkt.onrender.com/userDrinkCollections?userId=1`)
  .then(response => {
    const userDrinkCollections = response.data;
    // 抓取全部DrinkId
    const drinkIds = userDrinkCollections.map(item => item.drinkId);
    // 組成取得飲料資料的URL
    const drinksUrl = `https://json-server-project-wtkt.onrender.com/drinks?id=${drinkIds.join('&id=')}`;

    // 取得飲料資料
    axios.get(drinksUrl)
      .then(response => {
        console.log(response.data);
        renderUserDrinkCollections(response.data);
      })
  })
  .catch(error => {
    console.error('發生錯誤:', error);
  });
