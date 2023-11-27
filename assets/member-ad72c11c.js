import"./bootstrap.min-4ba85d86.js";const B=sessionStorage.getItem("jwtToken");function C(){return B?(j(),!0):(console.log("無權限: 沒有找到 Token"),I(),!1)}C();function I(){console.log("重新導回登入頁"),window.location.href="logIn.html"}function j(){axios.get("https://drinkpicker-nclv.onrender.com/660/drinks",{headers:{Authorization:`Bearer ${B}`}}).then(t=>{console.log("飲料資料:",t.data)}).catch(t=>{console.error("錯誤:",t.response?t.response.data:"無法連接到伺服器")})}const $=document.querySelector("#logout-button");$&&$.addEventListener("click",function(){sessionStorage.clear(),I()});const A=document.querySelector("#modifyPasswordButton");A.addEventListener("click",function(t){t.preventDefault(),window.location.href="modifyPassword.html"});const M=document.querySelector(".userData"),x=document.querySelector(".drinkCollections"),P=document.querySelector(".shopCollectionsArea");function H(t){const o=sessionStorage.getItem("user_email");sessionStorage.getItem("user_id");const a=sessionStorage.getItem("user_nickname");M.innerHTML=`
    <img src="../assets/images/member.png" class="rounded-circle mb-8" style="width: 80px;" alt="user image">
    <p class="fs-32 text-white">${a}</p>
    <p class="fs-20 text-white">${o}</p>
    
    `}function N(t){let o="";for(let a=0;a<t.length;a++)o+=`<li class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-solid fa-heart fs-24" value="uncollect"></button>
        <img src="${t[a].ImageLink}" alt="drink image">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${t[a].DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            <li class="drinks-tag">奶茶</li>
            <li class="drinks-tag">牛奶</li>
          </ul>
          <p class="drinks-card-content mb-24 mb-md-32">${t[a].Description}</p>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>`;x.innerHTML=o}function q(t){let o="";for(let a=0;a<t.length;a++)o+=`<li class="stores-card px-16 py-24 px-md-24">
    <button type="button" class="collect-btn border-0 text-primary fa-solid fa-heart fs-24" value="uncollect"></button>
    <img src="${t[a].logo}" class="mb-8" alt="store image">
    <div class="stores-card-body">
      <div class="d-flex justify-content-between">
        <h5 class="mb-8 mb-md-12">${t[a].name}</h5>
        <ul class="d-flex text-primary">
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-regular fa-star"></i></li>
        </ul>
      </div>
      <p class="stores-card-content mb-16">
      ${t[a].Description}</p>
      <ul class="stores-tag-group mb-16">
        <li class="stores-tag">uber eat</li>
        <li class="stores-tag">food panda</li>
        <li class="stores-tag">合作活動</li>
      </ul>
      <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
    </div>
  </li>`;P.innerHTML=o}let D=[];const U=t=>{const o=t.map(i=>!i||!i.TeaType?"":i.Ingredients.length===0?`${i.TeaType}`:`${i.TeaType},${i.Ingredients}`),a=[];for(let i=0;i<o.length;i++)a.push(o[i].split(","));let n="",e=[];a.forEach(i=>{i.forEach((p,u)=>{n+=`<li class="drinks-tag">${p}</li>`,u===i.length-1&&(e.push(n),n="")}),D.push(e),e=[]})};let w=[];const G=t=>{t.forEach(o=>{const a={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let n="";for(const e in a)o[e]&&(n+=`<li class="stores-tag">${a[e]}</li>`);w.push(n),n=""})},z=t=>{const o=t.length,a=10,n=Math.ceil(o/a);let e=1;function i(r){const c=(r-1)*a,l=c+a,m=t.slice(c,l);p(m),u()}function p(r){x.innerHTML="";let c="";r.forEach(l=>{c+=`
            <li class="drinks-card px-16 py-24 px-md-24">
              <button type="button" class="collect-btn border-0 text-primary fa-solid fa-heart fs-24"
                value="collected"></button>
              <img src="${l.ImageLink}" alt="drink image">
              <div class="w-100 d-flex flex-column justify-content-between">
                <div class="drinks-card-body ms-16">
                  <h4 class="mb-8 mb-md-12">${l.DrinkName}</h4>
                  <ul class="drinks-tag-group mb-8 mb-md-12">
                    ${D[l.id-1]}
                  </ul>
                  <p class="drinks-card-content mb-24 mb-md-32">${l.Description}</p>
                </div>
                <div class="d-flex justify-content-between align-items-end ms-16">
                  <div class="d-flex align-items-center drinkStoreTag">
                    <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                    <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${l.StoreName}</p>
                  </div>
                  <a href="stores-info.html?id=${l.ShopID}" class="d-block text-primary text-end"><span
                      class="material-symbols-outlined me-2 align-middle">
                      location_on
                    </span>搜尋店家</a>
                </div>
            </li>
          `}),x.innerHTML=c}function u(){const r=document.getElementById("drinkPagination");r.innerHTML="";let c="";for(let s=1;s<=n;s++)c+=`
        <li class="page-item mx-4 ${s===e?"active":""}">   
          <a class="page-link" href="#" data-page="${s}">${s}</a>
        </li>
      `;const l=e===1?"text-gray":"",m=e===n?"text-gray":"",b=e===1?"disabled":"",h=e===1?"disabled":"",k=e===n?"disabled":"",v=e===n?"disabled":"";r.innerHTML=`
      <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${b}">
        <a class="page-link ${l}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
        </a>
      </li>

      <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${h}">
        <a class="page-link ${l}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">chevron_left</span>
        </a>
      </li>

      ${c}

      <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${k}">
        <a class="page-link ${m}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>

      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${v}">
        <a class="page-link ${m}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
        </a>
      </li>`,document.querySelectorAll(".page-link").forEach(s=>{s.addEventListener("click",f=>{f.preventDefault();const y=parseInt(s.dataset.page);g(y)})});const d=[e];document.getElementById("previousPageBtn").addEventListener("click",s=>{s.preventDefault(),d[0]>1&&g(d[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",s=>{s.preventDefault(),d[0]!==n&&g(d[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",s=>{s.preventDefault(),d[0]>1&&g(1)}),document.getElementById("last-page-btn").addEventListener("click",s=>{s.preventDefault(),d[0]!==n&&g(n)})}function g(r){e=r,i(e),window.scrollTo(0,400)}i(e)},R=t=>{const o=t.length,a=12,n=Math.ceil(o/a);let e=1;function i(r){const c=(r-1)*a,l=c+a,m=t.slice(c,l);p(m),u()}function p(r){P.innerHTML="";let c="";r.forEach(l=>{c+=`
          <li class="stores-card">
          <button type="button" class="collect-btn border-0 text-primary fa-solid fa-heart fs-24"
            value="collected"></button>
          <img src="${l.logo}" class="mb-8" alt="store image">
          <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
            <div class="d-flex justify-content-between">
              <h5 class="mb-8 mb-md-12">${l.name}</h5>
              <ul class="d-flex text-primary">
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
              </ul>
            </div>
            <p class="stores-card-content mb-16">
              ${l.Description}</p>
            <ul class="stores-tag-group mb-16">
              ${w[l.id-1]}
            </ul>
            <a href="stores-info.html?id=${l.id}" class="stores-card-btn">查看店家資訊</a>
          </div>
        </li>
          `}),P.innerHTML=c}function u(){const r=document.getElementById("storePagination");r.innerHTML="";let c="";for(let s=1;s<=n;s++)c+=`
        <li class="page-item mx-4 ${s===e?"active":""}">   
          <a class="page-link" href="#" data-page="${s}">${s}</a>
        </li>
      `;const l=e===1?"text-gray":"",m=e===n?"text-gray":"",b=e===1?"disabled":"",h=e===1?"disabled":"",k=e===n?"disabled":"",v=e===n?"disabled":"";r.innerHTML=`
      <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${b}">
        <a class="page-link ${l}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
        </a>
      </li>
  
      <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${h}">
        <a class="page-link ${l}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">chevron_left</span>
        </a>
      </li>
  
      ${c}
  
      <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${k}">
        <a class="page-link ${m}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>
  
      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${v}">
        <a class="page-link ${m}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
        </a>
      </li>`,document.querySelectorAll(".page-link").forEach(s=>{s.addEventListener("click",f=>{f.preventDefault();const y=parseInt(s.dataset.page);g(y)})});const d=[e];document.getElementById("previousPageBtn").addEventListener("click",s=>{s.preventDefault(),d[0]>1&&g(d[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",s=>{s.preventDefault(),d[0]!==n&&g(d[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",s=>{s.preventDefault(),d[0]>1&&g(1)}),document.getElementById("last-page-btn").addEventListener("click",s=>{s.preventDefault(),d[0]!==n&&g(n)})}function g(r){e=r,i(e),window.scrollTo(0,400)}i(e)};axios.get("https://json-server-project-wtkt.onrender.com/users?id=1").then(t=>{t.data,H()});axios.get("https://json-server-project-wtkt.onrender.com/userDrinkCollections?userId=1").then(t=>{const n=`https://json-server-project-wtkt.onrender.com/drinks?id=${t.data.map(e=>e.drinkId).join("&id=")}`;axios.get(n).then(e=>{console.log(e.data),U(e.data),N(e.data),z(e.data)})}).catch(t=>{console.error("發生錯誤:",t)});axios.get("https://json-server-project-wtkt.onrender.com/userShopCollections?userId=1").then(t=>{const n=`https://json-server-project-wtkt.onrender.com/shops?id=${t.data.map(e=>e.shopId).join("&id=")}`;axios.get(n).then(e=>{console.log(e.data),G(e.data),q(e.data),R(e.data)})}).catch(t=>{console.error("發生錯誤:",t)});
