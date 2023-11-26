import"./bootstrap.min-4ba85d86.js";const i=sessionStorage.getItem("jwtToken");function a(){return i?(c(),!0):(console.log("無權限: 沒有找到 Token"),l(),!1)}a();function l(){console.log("重新導回登入頁"),window.location.href="logIn.html"}function c(){axios.get("https://drinkpicker-nclv.onrender.com/660/drinks",{headers:{Authorization:`Bearer ${i}`}}).then(s=>{console.log("飲料資料:",s.data)}).catch(s=>{console.error("錯誤:",s.response?s.response.data:"無法連接到伺服器")})}const n=document.querySelector("#logout-button");n&&n.addEventListener("click",function(){sessionStorage.clear(),l()});const d=document.querySelector("#modifyPasswordButton");d.addEventListener("click",function(s){s.preventDefault(),window.location.href="modifyPassword.html"});const u=document.querySelector(".userData"),m=document.querySelector(".drinkCollections"),p=document.querySelector(".shopCollectionsArea");function g(s){const t=sessionStorage.getItem("user_email");sessionStorage.getItem("user_id");const e=sessionStorage.getItem("user_nickname");u.innerHTML=`
    <img src="../assets/images/member.png" class="rounded-circle mb-8" style="width: 80px;" alt="user image">
    <p class="fs-32 text-white">${e}</p>
    <p class="fs-20 text-white">${t}</p>
    
    `}function h(s){let t="";for(let e=0;e<s.length;e++)t+=`<li class="drinks-card px-16 py-24 px-md-24">
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
      </li>`;m.innerHTML=t}function f(s){let t="";for(let e=0;e<s.length;e++)t+=`<li class="stores-card px-16 py-24 px-md-24">
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
  </li>`;p.innerHTML=t}axios.get("https://json-server-project-wtkt.onrender.com/users?id=1").then(s=>{s.data,g()});axios.get("https://json-server-project-wtkt.onrender.com/userDrinkCollections?userId=1").then(s=>{const r=`https://json-server-project-wtkt.onrender.com/drinks?id=${s.data.map(o=>o.drinkId).join("&id=")}`;axios.get(r).then(o=>{console.log(o.data),h(o.data)})}).catch(s=>{console.error("發生錯誤:",s)});axios.get("https://json-server-project-wtkt.onrender.com/userShopCollections?userId=1").then(s=>{const r=`https://json-server-project-wtkt.onrender.com/shops?id=${s.data.map(o=>o.shopId).join("&id=")}`;axios.get(r).then(o=>{console.log(o.data),f(o.data)})}).catch(s=>{console.error("發生錯誤:",s)});
