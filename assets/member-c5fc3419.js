import"./bootstrap.min-feac71ab.js";import{b as H,c as N,a as U,d as j}from"./api-c9e20ce4.js";import{A as h}from"./config-ca05e4f1.js";import"./axios-28bc18a3.js";const G=sessionStorage.getItem("jwtToken"),$=sessionStorage.getItem("user_email"),m=sessionStorage.getItem("user_id"),I=sessionStorage.getItem("user_nickname"),B=sessionStorage.getItem("user_picture");function R(){return G?!0:(console.log("無權限: 沒有找到 Token"),_(),!1)}R();function _(){console.log("重新導回登入頁"),window.location.href="logIn.html"}const D=document.querySelector("#logout-button");D&&D.addEventListener("click",function(){sessionStorage.clear(),_()});const z=document.querySelector("#modifyPasswordButton");z.addEventListener("click",function(a){a.preventDefault(),window.location.href="modifyPassword.html"});const W=document.querySelector(".userData"),E=document.querySelector(".drinkCollections"),L=document.querySelector(".shopCollectionsArea");function F(){const a=B==="undefined"?"/assets/images/member.png":B;W.innerHTML=`
    <img src="${a}" class="rounded-circle mb-8" style="width: 80px;" alt="user image">
    <p class="fs-32 text-white">${I}</p>
    <p class="fs-20 text-white">${$}</p>
    `}let T=[];const J=a=>{const s=a.map(o=>!o||!o.TeaType?"":o.Ingredients.length===0?`${o.TeaType}`:`${o.TeaType},${o.Ingredients}`),n=[];for(let o=0;o<s.length;o++)n.push(s[o].split(","));let l="",e=[];n.forEach(o=>{o.forEach((p,f)=>{l+=`<li class="drinks-tag">${p}</li>`,f===o.length-1&&(e.push(l),l="")}),T.push(e),e=[]})};let w=[];const K=a=>{a.forEach(s=>{const n={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let l="";for(const e in n)s[e]&&(l+=`<li class="stores-tag">${n[e]}</li>`);w.push(l),l=""})};function O(){document.querySelectorAll(".collect-drink-btn").forEach(s=>{s.addEventListener("click",function(){const n=this.getAttribute("data-drink-id");s.value==="uncollect"?(H(m,n),s.value="collect",s.classList.remove("fa-regular"),s.classList.add("fa-solid"),console.log("收藏的飲料 ID:",n)):(N(m,n),s.value="uncollect",s.classList.remove("fa-solid"),s.classList.add("fa-regular"),console.log("取消收藏的飲料 ID:",n))})})}function Q(){document.querySelectorAll(".collect-store-btn").forEach(s=>{s.addEventListener("click",function(){const n=this.getAttribute("data-store-id");s.value==="uncollect"?(U(m,n),s.value="collect",s.classList.remove("fa-regular"),s.classList.add("fa-solid"),console.log("收藏的店家 ID:",n)):(j(m,n),s.value="uncollect",s.classList.remove("fa-solid"),s.classList.add("fa-regular"),console.log("取消收藏的店家 ID:",n))})})}function V(){if(I&&$){const a=document.getElementById("userName"),s=document.getElementById("logInEmail");a&&s&&(a.value=I,s.value=$)}}const X=a=>{const s=a.length,n=10,l=Math.ceil(s/n);let e=1;function o(r){const c=(r-1)*n,i=c+n,u=a.slice(c,i);p(u),f()}function p(r){E.innerHTML="";let c="";r.forEach((i,u)=>{c+=`
            <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn collect-drink-btn border-0 text-primary fa-solid fa-heart fs-24" data-drink-id="${i.id}" value="collected"></button>
              <img src="${i.ImageLink}" alt="drink image">
              <div class="w-100 d-flex flex-column justify-content-between">
                <div class="drinks-card-body ms-16">
                  <h4 class="mb-8 mb-md-12">${i.DrinkName}</h4>
                  <ul class="drinks-tag-group mb-8 mb-md-12">
                    ${T[u]}
                  </ul>
                  <p class="drinks-card-content mb-24 mb-md-32">${i.Description}</p>
                </div>
                <div class="d-flex justify-content-between align-items-end ms-16">
                  <div class="d-flex align-items-center drinkStoreTag">
                    <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                    <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${i.StoreName}</p>
                  </div>
                  <a href="stores-info.html?id=${i.ShopID}" class="d-block text-primary text-end"><span
                      class="material-symbols-outlined me-2 align-middle">
                      location_on
                    </span>搜尋店家</a>
                </div>
            </li>
          `}),E.innerHTML=c}function f(){const r=document.getElementById("drinkPagination");r.innerHTML="";let c="";for(let t=1;t<=l;t++)c+=`
        <li class="page-item mx-4 ${t===e?"active":""}">   
          <a class="page-link" href="#" data-page="${t}">${t}</a>
        </li>
      `;const i=e===1?"text-gray":"",u=e===l?"text-gray":"",k=e===1?"disabled":"",v=e===1?"disabled":"",y=e===l?"disabled":"",x=e===l?"disabled":"";r.innerHTML=`
      <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${k}">
        <a class="page-link ${i}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
        </a>
      </li>

      <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${v}">
        <a class="page-link ${i}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">chevron_left</span>
        </a>
      </li>

      ${c}

      <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${y}">
        <a class="page-link ${u}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>

      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${x}">
        <a class="page-link ${u}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
        </a>
      </li>`,document.querySelectorAll(".page-link").forEach(t=>{t.addEventListener("click",b=>{b.preventDefault();const P=parseInt(t.dataset.page);g(P)})});const d=[e];document.getElementById("previousPageBtn").addEventListener("click",t=>{t.preventDefault(),d[0]>1&&g(d[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",t=>{t.preventDefault(),d[0]!==l&&g(d[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",t=>{t.preventDefault(),d[0]>1&&g(1)}),document.getElementById("last-page-btn").addEventListener("click",t=>{t.preventDefault(),d[0]!==l&&g(l)})}function g(r){e=r,o(e),window.scrollTo(0,400)}o(e)},Y=a=>{const s=a.length,n=12,l=Math.ceil(s/n);let e=1;function o(r){const c=(r-1)*n,i=c+n,u=a.slice(c,i);p(u),f()}function p(r){L.innerHTML="";let c="";r.forEach(i=>{c+=`
          <li class="stores-card">
          <button type="button" class="collect-btn collect-store-btn border-0 text-primary fa-solid fa-heart fs-24" data-store-id="${i.id}" value="collected"></button>
          <img src="${i.logo}" class="mb-8" alt="store image">
          <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
            <div class="d-flex justify-content-between">
              <h5 class="mb-8 mb-md-12">${i.name}</h5>
              <ul class="d-flex text-primary">
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
              </ul>
            </div>
            <p class="stores-card-content mb-16">
              ${i.Description}</p>
            <ul class="stores-tag-group mb-16">
              ${w[i.id-1]}
            </ul>
            <a href="stores-info.html?id=${i.id}" class="stores-card-btn">查看店家資訊</a>
          </div>
        </li>
          `}),L.innerHTML=c}function f(){const r=document.getElementById("storePagination");r.innerHTML="";let c="";for(let t=1;t<=l;t++)c+=`
        <li class="page-item mx-4 ${t===e?"active":""}">   
          <a class="page-link" href="#" data-page="${t}">${t}</a>
        </li>
      `;const i=e===1?"text-gray":"",u=e===l?"text-gray":"",k=e===1?"disabled":"",v=e===1?"disabled":"",y=e===l?"disabled":"",x=e===l?"disabled":"";r.innerHTML=`
      <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${k}">
        <a class="page-link ${i}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
        </a>
      </li>
  
      <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${v}">
        <a class="page-link ${i}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">chevron_left</span>
        </a>
      </li>
  
      ${c}
  
      <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${y}">
        <a class="page-link ${u}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>
  
      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${x}">
        <a class="page-link ${u}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
        </a>
      </li>`,document.querySelectorAll(".page-link").forEach(t=>{t.addEventListener("click",b=>{b.preventDefault();const P=parseInt(t.dataset.page);g(P)})});const d=[e];document.getElementById("previousPageBtn").addEventListener("click",t=>{t.preventDefault(),d[0]>1&&g(d[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",t=>{t.preventDefault(),d[0]!==l&&g(d[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",t=>{t.preventDefault(),d[0]>1&&g(1)}),document.getElementById("last-page-btn").addEventListener("click",t=>{t.preventDefault(),d[0]!==l&&g(l)})}function g(r){e=r,o(e),window.scrollTo(0,400)}o(e)};axios.get(`${h}/users/${m}`).then(a=>{a.data,F()});axios.get(`${h}/userDrinkCollections?userId=${m}`).then(a=>{const n=a.data.map(e=>e.drinkId),l=`${h}/drinks?id=${n.join("&id=")}`;axios.get(l).then(e=>{J(e.data),X(e.data),O()})}).catch(a=>{console.error("發生錯誤:",a)});axios.get(`${h}/userShopCollections?userId=${m}`).then(a=>{const n=a.data.map(e=>e.shopId),l=`${h}/shops?id=${n.join("&id=")}`;axios.get(l).then(e=>{K(e.data),Y(e.data),Q()})}).catch(a=>{console.error("發生錯誤:",a)});V();
