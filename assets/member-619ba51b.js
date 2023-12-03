import"./bootstrap.min-faf78b7c.js";import{a as B}from"./axios-28bc18a3.js";import{A as m}from"./config-ca05e4f1.js";async function C(t,e){try{return(await B.get(t,{params:e})).data}catch(a){return console.error("錯誤:",a),[]}}async function T(t,e){try{await B.post(t,e)}catch(a){console.error("錯誤:",a)}}async function _(t){try{await B.delete(t)}catch(e){console.error("錯誤:",e)}}async function G(t,e){T(`${m}/userDrinkCollections`,{userId:t,drinkId:e})}async function R(t,e){const a=await C(`${m}/userDrinkCollections`,{userId:t,drinkId:e});a.length>0&&_(`${m}/userDrinkCollections/${a[0].id}`)}async function z(t,e){T(`${m}/userShopCollections`,{userId:t,shopId:e})}async function F(t,e){const a=await C(`${m}/userShopCollections`,{userId:t,shopId:e});a.length>0&&_(`${m}/userShopCollections/${a[0].id}`)}const W=sessionStorage.getItem("jwtToken"),P=sessionStorage.getItem("user_email"),p=sessionStorage.getItem("user_id"),I=sessionStorage.getItem("user_nickname"),D=sessionStorage.getItem("user_picture");function J(){return W?!0:(console.log("無權限: 沒有找到 Token"),S(),!1)}J();function S(){console.log("重新導回登入頁"),window.location.href="logIn.html"}const E=document.querySelector("#logout-button");E&&E.addEventListener("click",function(){sessionStorage.clear(),S()});const K=document.querySelector("#modifyPasswordButton");K.addEventListener("click",function(t){t.preventDefault(),window.location.href="modifyPassword.html"});const O=document.querySelector(".userData"),L=document.querySelector(".drinkCollections"),w=document.querySelector(".shopCollectionsArea");function Q(){const t=D==="undefined"?"/assets/images/member.png":D;O.innerHTML=`
    <img src="${t}" class="rounded-circle mb-8" style="width: 80px;" alt="user image">
    <p class="fs-32 text-white">${I}</p>
    <p class="fs-20 text-white">${P}</p>
    `}let A=[];const V=t=>{const e=t.map(i=>!i||!i.TeaType?"":i.Ingredients.length===0?`${i.TeaType}`:`${i.TeaType},${i.Ingredients}`),a=[];for(let i=0;i<e.length;i++)a.push(e[i].split(","));let l="",s=[];a.forEach(i=>{i.forEach((f,h)=>{l+=`<li class="drinks-tag">${f}</li>`,h===i.length-1&&(s.push(l),l="")}),A.push(s),s=[]})};let M=[];const X=t=>{t.forEach(e=>{const a={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let l="";for(const s in a)e[s]&&(l+=`<li class="stores-tag">${a[s]}</li>`);M.push(l),l=""})};function Y(){document.querySelectorAll(".collect-drink-btn").forEach(e=>{e.addEventListener("click",function(){const a=this.getAttribute("data-drink-id");e.value==="uncollect"?(G(p,a),e.value="collect",e.classList.remove("fa-regular"),e.classList.add("fa-solid"),console.log("收藏的飲料 ID:",a)):(R(p,a),e.value="uncollect",e.classList.remove("fa-solid"),e.classList.add("fa-regular"),console.log("取消收藏的飲料 ID:",a))})})}function Z(){document.querySelectorAll(".collect-store-btn").forEach(e=>{e.addEventListener("click",function(){const a=this.getAttribute("data-store-id");e.value==="uncollect"?(z(p,a),e.value="collect",e.classList.remove("fa-regular"),e.classList.add("fa-solid"),console.log("收藏的店家 ID:",a)):(F(p,a),e.value="uncollect",e.classList.remove("fa-solid"),e.classList.add("fa-regular"),console.log("取消收藏的店家 ID:",a))})})}function ee(){if(I&&P){const t=document.getElementById("userName"),e=document.getElementById("logInEmail");t&&e&&(t.value=I,e.value=P)}}const te=t=>{const e=t.length,a=10,l=Math.ceil(e/a);let s=1;function i(r){const c=(r-1)*a,o=c+a,g=t.slice(c,o);f(g),h()}function f(r){L.innerHTML="";let c="";r.forEach((o,g)=>{c+=`
            <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn collect-drink-btn border-0 text-primary fa-solid fa-heart fs-24" data-drink-id="${o.id}" value="collected"></button>
              <img src="${o.ImageLink}" alt="drink image">
              <div class="w-100 d-flex flex-column justify-content-between">
                <div class="drinks-card-body ms-16">
                  <h4 class="mb-8 mb-md-12">${o.DrinkName}</h4>
                  <ul class="drinks-tag-group mb-8 mb-md-12">
                    ${A[g]}
                  </ul>
                  <p class="drinks-card-content mb-24 mb-md-32">${o.Description}</p>
                </div>
                <div class="d-flex justify-content-between align-items-end ms-16">
                  <div class="d-flex align-items-center drinkStoreTag">
                    <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                    <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${o.StoreName}</p>
                  </div>
                  <a href="stores-info.html?id=${o.ShopID}" class="d-block text-primary text-end"><span
                      class="material-symbols-outlined me-2 align-middle">
                      location_on
                    </span>搜尋店家</a>
                </div>
            </li>
          `}),L.innerHTML=c}function h(){const r=document.getElementById("drinkPagination");r.innerHTML="";let c="";for(let n=1;n<=l;n++)c+=`
        <li class="page-item mx-4 ${n===s?"active":""}">   
          <a class="page-link" href="#" data-page="${n}">${n}</a>
        </li>
      `;const o=s===1?"text-gray":"",g=s===l?"text-gray":"",k=s===1?"disabled":"",v=s===1?"disabled":"",y=s===l?"disabled":"",$=s===l?"disabled":"";r.innerHTML=`
      <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${k}">
        <a class="page-link ${o}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
        </a>
      </li>

      <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${v}">
        <a class="page-link ${o}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">chevron_left</span>
        </a>
      </li>

      ${c}

      <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${y}">
        <a class="page-link ${g}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>

      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${$}">
        <a class="page-link ${g}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
        </a>
      </li>`,document.querySelectorAll(".page-link").forEach(n=>{n.addEventListener("click",b=>{b.preventDefault();const x=parseInt(n.dataset.page);u(x)})});const d=[s];document.getElementById("previousPageBtn").addEventListener("click",n=>{n.preventDefault(),d[0]>1&&u(d[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",n=>{n.preventDefault(),d[0]!==l&&u(d[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",n=>{n.preventDefault(),d[0]>1&&u(1)}),document.getElementById("last-page-btn").addEventListener("click",n=>{n.preventDefault(),d[0]!==l&&u(l)})}function u(r){s=r,i(s),window.scrollTo(0,400)}i(s)},se=t=>{const e=t.length,a=12,l=Math.ceil(e/a);let s=1;function i(r){const c=(r-1)*a,o=c+a,g=t.slice(c,o);f(g),h()}function f(r){w.innerHTML="";let c="";r.forEach(o=>{c+=`
          <li class="stores-card">
          <button type="button" class="collect-btn collect-store-btn border-0 text-primary fa-solid fa-heart fs-24" data-store-id="${o.id}" value="collected"></button>
          <img src="${o.logo}" class="mb-8" alt="store image">
          <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
            <div class="d-flex justify-content-between">
              <h5 class="mb-8 mb-md-12">${o.name}</h5>
              <ul class="d-flex text-primary">
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
              </ul>
            </div>
            <p class="stores-card-content mb-16">
              ${o.Description}</p>
            <ul class="stores-tag-group mb-16">
              ${M[o.id-1]}
            </ul>
            <a href="stores-info.html?id=${o.id}" class="stores-card-btn">查看店家資訊</a>
          </div>
        </li>
          `}),w.innerHTML=c}function h(){const r=document.getElementById("storePagination");r.innerHTML="";let c="";for(let n=1;n<=l;n++)c+=`
        <li class="page-item mx-4 ${n===s?"active":""}">   
          <a class="page-link" href="#" data-page="${n}">${n}</a>
        </li>
      `;const o=s===1?"text-gray":"",g=s===l?"text-gray":"",k=s===1?"disabled":"",v=s===1?"disabled":"",y=s===l?"disabled":"",$=s===l?"disabled":"";r.innerHTML=`
      <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${k}">
        <a class="page-link ${o}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
        </a>
      </li>
  
      <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${v}">
        <a class="page-link ${o}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">chevron_left</span>
        </a>
      </li>
  
      ${c}
  
      <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${y}">
        <a class="page-link ${g}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>
  
      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${$}">
        <a class="page-link ${g}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
        </a>
      </li>`,document.querySelectorAll(".page-link").forEach(n=>{n.addEventListener("click",b=>{b.preventDefault();const x=parseInt(n.dataset.page);u(x)})});const d=[s];document.getElementById("previousPageBtn").addEventListener("click",n=>{n.preventDefault(),d[0]>1&&u(d[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",n=>{n.preventDefault(),d[0]!==l&&u(d[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",n=>{n.preventDefault(),d[0]>1&&u(1)}),document.getElementById("last-page-btn").addEventListener("click",n=>{n.preventDefault(),d[0]!==l&&u(l)})}function u(r){s=r,i(s),window.scrollTo(0,400)}i(s)};axios.get(`${m}/users/${p}`).then(t=>{t.data,Q()});axios.get(`${m}/userDrinkCollections?userId=${p}`).then(t=>{const a=t.data.map(s=>s.drinkId),l=`${m}/drinks?id=${a.join("&id=")}`;axios.get(l).then(s=>{V(s.data),te(s.data),Y()})}).catch(t=>{console.error("發生錯誤:",t)});axios.get(`${m}/userShopCollections?userId=${p}`).then(t=>{const a=t.data.map(s=>s.shopId),l=`${m}/shops?id=${a.join("&id=")}`;axios.get(l).then(s=>{X(s.data),se(s.data),Z()})}).catch(t=>{console.error("發生錯誤:",t)});ee();
