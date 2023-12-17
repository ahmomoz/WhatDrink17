import"./bootstrap.min-feac71ab.js";import{e as N,c as U,a as j,d as G}from"./api-4c8ad0b6.js";import{A as h}from"./config-ca05e4f1.js";const R=sessionStorage.getItem("jwtToken"),P=sessionStorage.getItem("user_email"),m=sessionStorage.getItem("user_id"),$=sessionStorage.getItem("user_nickname"),I=sessionStorage.getItem("user_picture");function Y(){return R?!0:(w(),!1)}Y();function w(){window.location.href="logIn.html"}const E=document.querySelector("#logout-button");E&&E.addEventListener("click",function(){sessionStorage.clear(),w()});const z=document.querySelector("#modifyPasswordButton");z.addEventListener("click",function(n){n.preventDefault(),window.location.href="modifyPassword.html"});const W=document.querySelector(".userData"),D=document.querySelector(".drinkCollections"),L=document.querySelector(".shopCollectionsArea");function F(){const n=I==="undefined"?"/assets/images/member.png":I;W.innerHTML=`
    <img src="${n}" class="rounded-circle mb-8" style="width: 80px;" alt="user image">
    <p class="fs-32 text-white">${$}</p>
    <p class="fs-20 text-white">${P}</p>
    `}let S=[];const J=n=>{const s=n.map(o=>!o||!o.TeaType?"":o.Ingredients.length===0?`${o.TeaType}`:`${o.TeaType},${o.Ingredients}`),l=[];for(let o=0;o<s.length;o++)l.push(s[o].split(","));let a="",e=[];l.forEach(o=>{o.forEach((p,f)=>{a+=`<li class="drinks-tag">${p}</li>`,f===o.length-1&&(e.push(a),a="")}),S.push(e),e=[]})};let C=[];const K=n=>{n.forEach(s=>{const l={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let a="";for(const e in l)s[e]&&(a+=`<li class="stores-tag">${l[e]}</li>`);C.push(a),a=""})};function O(){document.querySelectorAll(".collect-drink-btn").forEach(s=>{s.addEventListener("click",function(){const l=this.getAttribute("data-drink-id");s.value==="uncollect"?(N(m,l),s.value="collect",s.classList.remove("fa-regular"),s.classList.add("fa-solid")):Swal.fire({title:"您確定要取消收藏嗎？",text:"此項目將會從收藏列表移除",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YES"}).then(a=>{a.isConfirmed&&(U(m,l),s.value="uncollect",s.classList.remove("fa-solid"),s.classList.add("fa-regular"),Swal.fire({title:"已取消收藏",text:"此項目已從收藏列表移除",icon:"success"}))})})})}function Q(){document.querySelectorAll(".collect-store-btn").forEach(s=>{s.addEventListener("click",function(){const l=this.getAttribute("data-store-id");s.value==="uncollect"?(j(m,l),s.value="collect",s.classList.remove("fa-regular"),s.classList.add("fa-solid")):Swal.fire({title:"您確定要取消收藏嗎？",text:"此項目將會從收藏列表移除",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"YES"}).then(a=>{a.isConfirmed&&(G(m,l),s.value="uncollect",s.classList.remove("fa-solid"),s.classList.add("fa-regular"),Swal.fire({title:"已取消收藏",text:"此項目已從收藏列表移除",icon:"success"}))})})})}function V(){if($&&P){const n=document.getElementById("userName"),s=document.getElementById("logInEmail");n&&s&&(n.value=$,s.value=P)}}const X=n=>{const s=n.length,l=10,a=Math.ceil(s/l);let e=1;function o(r){const c=(r-1)*l,i=c+l,d=n.slice(c,i);p(d),f()}function p(r){D.innerHTML="";let c="";r.forEach((i,d)=>{c+=`
            <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn collect-drink-btn border-0 text-primary fa-solid fa-heart fs-24" data-drink-id="${i.id}" value="collected"></button>
              <img src="${i.ImageLink}" alt="drink image">
              <div class="w-100 d-flex flex-column justify-content-between">
                <div class="drinks-card-body ms-16">
                  <h4 class="mb-8 mb-md-12">${i.DrinkName}</h4>
                  <ul class="drinks-tag-group mb-8 mb-md-12">
                    ${S[d]}
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
          `}),D.innerHTML=c}function f(){const r=document.getElementById("drinkPagination");r.innerHTML="";let c="";for(let t=1;t<=a;t++)c+=`
        <li class="page-item mx-4 ${t===e?"active":""}">   
          <a class="page-link" href="#" data-page="${t}">${t}</a>
        </li>
      `;const i=e===1?"text-gray":"",d=e===a?"text-gray":"",k=e===1?"disabled":"",v=e===1?"disabled":"",y=e===a?"disabled":"",x=e===a?"disabled":"";r.innerHTML=`
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
        <a class="page-link ${d}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>

      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${x}">
        <a class="page-link ${d}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
        </a>
      </li>`,document.querySelectorAll(".page-link").forEach(t=>{t.addEventListener("click",b=>{b.preventDefault();const B=parseInt(t.dataset.page);g(B)})});const u=[e];document.getElementById("previousPageBtn").addEventListener("click",t=>{t.preventDefault(),u[0]>1&&g(u[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",t=>{t.preventDefault(),u[0]!==a&&g(u[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",t=>{t.preventDefault(),u[0]>1&&g(1)}),document.getElementById("last-page-btn").addEventListener("click",t=>{t.preventDefault(),u[0]!==a&&g(a)})}function g(r){e=r,o(e),window.scrollTo(0,400)}o(e)},Z=n=>{const s=n.length,l=12,a=Math.ceil(s/l);let e=1;function o(r){const c=(r-1)*l,i=c+l,d=n.slice(c,i);p(d),f()}function p(r){L.innerHTML="";let c="";r.forEach((i,d)=>{c+=`
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
              ${C[d]}
            </ul>
            <a href="stores-info.html?id=${i.id}" class="stores-card-btn">查看店家資訊</a>
          </div>
        </li>
          `}),L.innerHTML=c}function f(){const r=document.getElementById("storePagination");r.innerHTML="";let c="";for(let t=1;t<=a;t++)c+=`
        <li class="page-item mx-4 ${t===e?"active":""}">   
          <a class="page-link" href="#" data-page="${t}">${t}</a>
        </li>
      `;const i=e===1?"text-gray":"",d=e===a?"text-gray":"",k=e===1?"disabled":"",v=e===1?"disabled":"",y=e===a?"disabled":"",x=e===a?"disabled":"";r.innerHTML=`
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
        <a class="page-link ${d}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>
  
      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${x}">
        <a class="page-link ${d}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
        </a>
      </li>`,document.querySelectorAll(".page-link").forEach(t=>{t.addEventListener("click",b=>{b.preventDefault();const B=parseInt(t.dataset.page);g(B)})});const u=[e];document.getElementById("previousPageBtn").addEventListener("click",t=>{t.preventDefault(),u[0]>1&&g(u[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",t=>{t.preventDefault(),u[0]!==a&&g(u[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",t=>{t.preventDefault(),u[0]>1&&g(1)}),document.getElementById("last-page-btn").addEventListener("click",t=>{t.preventDefault(),u[0]!==a&&g(a)})}function g(r){e=r,o(e),window.scrollTo(0,400)}o(e)};axios.get(`${h}/users/${m}`).then(n=>{n.data,F()});V();function T(){axios.get(`${h}/userDrinkCollections?userId=${m}`).then(n=>{const l=n.data.map(e=>e.drinkId),a=`${h}/drinks?id=${l.join("&id=")}`;axios.get(a).then(e=>{J(e.data),X(e.data),O()})}).catch(n=>{console.error("發生錯誤:",n)})}function ee(){axios.get(`${h}/userShopCollections?userId=${m}`).then(n=>{const l=n.data.map(e=>e.shopId),a=`${h}/shops?id=${l.join("&id=")}`;axios.get(a).then(e=>{K(e.data),Z(e.data),Q()})}).catch(n=>{console.error("發生錯誤:",n)})}T();document.getElementById("collectDrinks-tab").addEventListener("click",T);document.getElementById("collectDStores-tab").addEventListener("click",ee);
