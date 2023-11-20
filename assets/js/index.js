//熱門 飲料----------------------------------------------------------------------
//變數命名
const popularDrinkList = document.querySelector("#popularDrinkList"); //熱門卡片列表
let drinkData = [];
let drinkTagAry = [];
let userDrinkCollections = [];// 存放用戶收藏飲料
let topSixDrinks = [];// 空陣列存放取出的飲料數據

//茶種、配料tag組合函式----------------------------------------
const drinkTagPush = () => {  //合併茶種、配料成一個陣列
  const drinkTag = drinkData.map(item => {
    if (item.Ingredients.length === 0) {
      return `${item.TeaType}`   //如果沒有配料就只推入茶種
    } else {
      return `${item.TeaType},${item.Ingredients}` //推入茶種,配料
    }
  });
  const drinkTag2 = []; //去掉逗點
  for (let i = 0; i < drinkTag.length; i++) {
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

//計算熱門飲品前6名------------------------------------------------
function getTopSixDrinks() {
  // 空物件存放 drinkId 的出現次數
  let drinkIdCount = {};

  // 遍歷 drinks 陣列
  for (var i = 0; i < userDrinkCollections.length; i++) {
    let drinkId = userDrinkCollections[i].drinkId;

    // 如果 drinkId 已經存在，將次數加 1
    if (drinkIdCount[drinkId]) {
      drinkIdCount[drinkId]++;
    } else {
      // 如果 drinkId 不存在，初始化為 1
      drinkIdCount[drinkId] = 1;
    }
  }

  // 驗證
  // console.log(drinkIdCount);

  // 用 Object.entries 將物件轉為陣列
  const drinkIdCountArr = Object.entries(drinkIdCount);
  // console.log(drinkIdCountArray);

  // 使用 sort 由大到小排序
  drinkIdCountArr.sort(function (a, b) {
    return b[1] - a[1];
  });

  // 取得排序後的前6個元素
  let topSixDrinkIds = drinkIdCountArr.slice(0, 6);

  // 驗證
  // console.log(topSixDrinkIds);

  // 使用 map 方法取出每個陣列的第一個值（drinkId）
  let topSixIds = topSixDrinkIds.map(function (item) {
    return item[0];
  });

  // 驗證
  // console.log(topSixIds);

  // console.log(drinkData);
  // console.log(topSixIds);

  
  // 找出對應的飲料數據
  drinkData.forEach(function (item) {
    topSixIds.forEach(function (i) {
      if (i == item.id) {
        topSixDrinks.push(item);
      }
    })
  });
  // 驗證
  // console.log(topSixDrinks);
}


//載入預設飲料卡片函式------------------------------------------------
const drinkRender = () => {
  let str = '';
  topSixDrinks.forEach((item) => {
    str += `
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${item.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${item.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${drinkTagAry[item.id - 1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${item.Description}</p>
              </div>
              <a href="#" class="d-block text-primary text-end"><span
                  class="material-symbols-outlined me-2s align-middle">
                  location_on
                </span>搜尋店家</a>
            </div>
          </li>
        `;
  });
  popularDrinkList.innerHTML = str;
};
// 替代方案：取前六筆資料
// const drinkRender = () => {
//     let str='';
//     drinkData.forEach((item, index) => {
//         if(index <= 5){
//             str+=`
//             <li class="drinks-card px-16 py-24 px-md-24">
//               <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
//                 value="collected"></button>
//               <img src="${item.ImageLink}" alt="drink image">
//               <div class="w-100 d-flex flex-column justify-content-between">
//                 <div class="drinks-card-body ms-16">
//                   <h4 class="mb-8 mb-md-12">${item.DrinkName}</h4>
//                   <ul class="drinks-tag-group mb-8 mb-md-12">
//                     ${drinkTagAry[item.id-1]}
//                   </ul>
//                   <p class="drinks-card-content mb-24 mb-md-32">${item.Description}</p>
//                 </div>
//                 <a href="#" class="d-block text-primary text-end"><span
//                     class="material-symbols-outlined me-2s align-middle">
//                     location_on
//                   </span>搜尋店家</a>
//               </div>
//             </li>
//           `;
//         }else{
//             console.log("end");
//             return;
//         }
//     });
//     popularDrinkList.innerHTML = str;
// };

//初始化預設飲料卡片函式--------------------------------------------

const drinkRenderData = () => {
  drinkRender();
};

//收藏愛心CSS樣式函式-----------------------------------------------
function isCollect() {
  const collectBtn = document.querySelectorAll(".collect-btn"); //抓按鈕class
  // console.log(collectBtn);//驗證
  //跑 querySelectorAll 陣列
  collectBtn.forEach(function (item) {
    //監聽按鈕
    item.addEventListener("click", function (e) {
      //還沒收藏時，value 預設傳送 collected，點擊後改傳uncollect，並移除外框樣式class、新增填滿樣式class
      if (e.target.value == "collected") {
        item.value = "uncollect";
        item.classList.remove("fa-regular");
        item.classList.add("fa-solid");
        //已經收藏時，value 已改成傳送 uncollect，點擊後變為 collected，並移除填滿樣式class，新增外框樣式class
      } else if (e.target.value == "uncollect") {
        item.value = "collected";
        item.classList.add("fa-regular");
        item.classList.remove("fa-solid");
      }
      //驗證
      // console.log("hi")
    });
  });
};

//將飲料資料由外部寫入
axios.get('https://json-server-project-wtkt.onrender.com/drinks')
  .then(response => {
    drinkData = response.data;
    // drinkTagPush();  //組合Tag陣列
    // drinkRenderData(); //載入預設飲料卡片
    // isCollect(); //收藏愛心CSS
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

//將用戶飲料資料由外部寫入
axios.get('https://json-server-project-wtkt.onrender.com/userDrinkCollections')
  .then(response => {
    userDrinkCollections = response.data;
    // console.log(userDrinkCollections);
    getTopSixDrinks();
    drinkTagPush();  //組合Tag陣列
    // drinkRenderData(); //載入預設飲料卡片
    isCollect(); //收藏愛心CSS
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

//   //------------------------------------------------------------------------------------------------
//   const storeList = document.querySelector("#popularStoreList");
//   let storeData=[];
//   let storeTagAry = [];


//   //店家tag組合函式----------------------------------------
// const storeTagPush = () =>{      //合併外送、合作活動成一個陣列
//   const storeTag = storeData.forEach(item => {
//     const tags = {
//       uber: 'uber eat',
//       foodpanda: 'food panda',
//       hasEvent: '合作活動'
//     };
//     let tagStr = '';
//     for (const key in tags) {
//       if (item[key]) {
//         tagStr += `<li class="stores-tag">${tags[key]}</li>`;
//       }
//     }
//     storeTagAry.push(tagStr);
//     tagStr=''; // 清空tagStr，避免重複推入
//   });
// };

// //載入預設店家卡片函式------------------------------------------------
// const storeRender = () => {
//     let str='';
//     storeData.forEach(item => {
//         str+=`
//         <li class="stores-card">
//             <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
//               value="collected"></button>
//             <img src="${item.logo}" class="mb-8" alt="store image">
//             <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
//               <div class="d-flex justify-content-between">
//                 <h5 class="mb-8 mb-md-12">${item.name}</h5>
//                 <ul class="d-flex text-primary">
//                   <li><i class="fa-solid fa-star"></i></li>
//                   <li><i class="fa-solid fa-star"></i></li>
//                   <li><i class="fa-solid fa-star"></i></li>
//                   <li><i class="fa-solid fa-star"></i></li>
//                   <li><i class="fa-regular fa-star"></i></li>
//                 </ul>
//               </div>
//               <p class="stores-card-content mb-16">
//                 ${item.Description}</p>
//               <ul class="stores-tag-group mb-16">
//                 ${storeTagAry[item.id-1]}
//               </ul>
//               <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
//             </div>
//           </li>
//         `;
//     });
//     storeList.innerHTML = str;
// };

// //初始化預設飲料卡片函式--------------------------------------------
// const storeRenderData = () => {
//   storeRender();
// };

// //將店家資料由外部寫入
// axios.get('https://json-server-project-wtkt.onrender.com/shops')
// .then(response => {
//     storeData = response.data;
//     storeTagPush()  //組合Tag陣列
//     storeRenderData();   //載入預設店家卡片
//     isCollect(); ////收藏愛心CSS
//     console.log(storeData);
// })
// .catch(error => {
//   console.error('Error fetching data:', error);
// });



