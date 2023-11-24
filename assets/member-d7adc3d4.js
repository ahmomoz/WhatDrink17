import"./bootstrap.min-141e3aaa.js";const l=document.querySelector(".userData"),i=document.querySelector(".drinkCollections"),a=document.querySelector(".shopCollectionsArea");function n(s){l.innerHTML=`
    <img src="../assets/images/member.png" class="rounded-circle mb-8" style="width: 80px;" alt="user image">
    <p class="fs-32 text-white">${s[0].username}</p>
    <p class="fs-20 text-white">${s[0].email}</p>
    `}function c(s){let t="";for(let e=0;e<s.length;e++)t+=`<li class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-solid fa-heart fs-24" value="uncollect"></button>
        <img src="${s[e].ImageLink}" alt="drink image">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${s[e].DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            <li class="drinks-tag">奶茶</li>
            <li class="drinks-tag">牛奶</li>
          </ul>
          <p class="drinks-card-content mb-24 mb-md-32">${s[e].Description}</p>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>`;i.innerHTML=t}function d(s){let t="";for(let e=0;e<s.length;e++)t+=`<li class="stores-card px-16 py-24 px-md-24">
    <button type="button" class="collect-btn border-0 text-primary fa-solid fa-heart fs-24" value="uncollect"></button>
    <img src="${s[e].logo}" class="mb-8" alt="store image">
    <div class="stores-card-body">
      <div class="d-flex justify-content-between">
        <h5 class="mb-8 mb-md-12">${s[e].name}</h5>
        <ul class="d-flex text-primary">
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-regular fa-star"></i></li>
        </ul>
      </div>
      <p class="stores-card-content mb-16">
      ${s[e].Description}</p>
      <ul class="stores-tag-group mb-16">
        <li class="stores-tag">uber eat</li>
        <li class="stores-tag">food panda</li>
        <li class="stores-tag">合作活動</li>
      </ul>
      <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
    </div>
  </li>`;a.innerHTML=t}axios.get("https://json-server-project-wtkt.onrender.com/users?id=1").then(s=>{let t=s.data;n(t)});axios.get("https://json-server-project-wtkt.onrender.com/userDrinkCollections?userId=1").then(s=>{const r=`https://json-server-project-wtkt.onrender.com/drinks?id=${s.data.map(o=>o.drinkId).join("&id=")}`;axios.get(r).then(o=>{console.log(o.data),c(o.data)})}).catch(s=>{console.error("發生錯誤:",s)});axios.get("https://json-server-project-wtkt.onrender.com/userShopCollections?userId=1").then(s=>{const r=`https://json-server-project-wtkt.onrender.com/shops?id=${s.data.map(o=>o.shopId).join("&id=")}`;axios.get(r).then(o=>{console.log(o.data),d(o.data)})}).catch(s=>{console.error("發生錯誤:",s)});
