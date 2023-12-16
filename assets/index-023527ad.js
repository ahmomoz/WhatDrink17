import"./bootstrap.min-feac71ab.js";import{b as I,c as y,e as w,d as x,a as E}from"./api-4c8ad0b6.js";import{A as h}from"./config-ca05e4f1.js";document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#lastestNews");let n=[];function f(){let d="";n.forEach(function(u){d+=`
        <div class="swiper-slide">
        <img src="${u.photo1}" class="lastestNews-img w-100 rounded-16 mb-8" alt="banner">
        <p class="fs-18 fw-500">${u.title}</p>
        <a href="news-info.html?id=${u.id}" class="stretched-link"></a>
      </div>
      `}),o.innerHTML=d}I.get(`${h}/latestNews`).then(d=>{n=d.data,f()})});const m=sessionStorage.getItem("user_id");document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#popularDrinkList");let n=[],f=[],d=[],u=[],b=[];Promise.all([axios.get(`${h}/userDrinkCollections`),axios.get(`${h}/drinks`),axios.get(`${h}/userDrinkCollections?userId=${m}`)]).then(e=>{d=e[0].data,n=e[1].data,u=e[2].data.map(s=>+s.drinkId),S(),v(),l(),c()}).catch(e=>{console.error("Error fetching data:",e)});const v=()=>{const e=n.map(a=>a.Ingredients.length===0?`${a.TeaType}`:`${a.TeaType},${a.Ingredients}`),s=[];for(let a=0;a<e.length;a++)s.push(e[a].split(","));let t="",r=[];s.forEach(a=>{a.forEach((i,p)=>{t+=`<li class="drinks-tag">${i}</li>`,p===a.length-1&&(r.push(t),t="")}),f.push(r),r=[]})};function S(){let e={};for(var s=0;s<d.length;s++){let i=d[s].drinkId;e[i]?e[i]++:e[i]=1}const t=Object.entries(e);t.sort(function(i,p){return p[1]-i[1]});let a=t.slice(0,6).map(function(i){return i[0]});n.forEach(function(i){a.forEach(function(p){p==i.id&&b.push(i)})})}const L=()=>{let e="";b.forEach(s=>{const t=u.includes(+s.id)?`<button type="button" class="collect-btn collect-drink-btn border-0 text-primary fa-heart fs-24 fa-solid" data-drink-id="${s.id}" value="collected" aria-hidden="true"></button>`:`<button type="button" class="collect-btn collect-drink-btn border-0 text-primary fa-regular fa-heart fs-24" data-drink-id="${s.id}" value="uncollect" aria-hidden="true"></button>`;e+=`
          <li class="drinks-card px-16 py-24 px-md-24">
          ${t}
          <img src="${s.ImageLink}" alt="drink image">
          <div class="w-100 d-flex flex-column justify-content-between">
            <div class="drinks-card-body ms-16">
              <h4 class="mb-8 mb-md-12">${s.DrinkName}</h4>
              <ul class="drinks-tag-group mb-8 mb-md-12">
                ${f[s.id-1]}
              </ul>
              <p class="drinks-card-content mb-24 mb-md-32">${s.Description}</p>
            </div>
            <div class="d-flex justify-content-between align-items-end ms-16">
              <div class="d-flex align-items-center drinkStoreTag">
                <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${s.StoreName}</p>
              </div>
              <a href="#" class="d-block text-primary text-end"><span
                  class="material-symbols-outlined me-2 align-middle">
                  location_on
                </span>搜尋店家</a>
            </div>
        </li>
      `}),o.innerHTML=e},l=()=>{L()};function c(){document.querySelectorAll(".collect-drink-btn").forEach(function(s){s.addEventListener("click",function(t){if(m===null)C();else{const r=this.getAttribute("data-drink-id");t.target.value=="collected"?(s.value="uncollect",s.classList.add("fa-regular"),s.classList.remove("fa-solid"),y(m,r),Swal.fire("已取消收藏")):t.target.value=="uncollect"&&(s.value="collected",s.classList.remove("fa-regular"),s.classList.add("fa-solid"),w(m,r),Swal.fire("收藏成功"))}})})}});function C(){window.location.href="logIn.html"}const g=sessionStorage.getItem("user_id");document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#popularStoreList");let n=[],f=[],d=[],u=[];Promise.all([axios.get(`${h}/userShopCollections`),axios.get("https://json-server-project-wtkt.onrender.com/shops")]).then(l=>{d=l[0].data,n=l[1].data,v(),b(),L()}).catch(l=>{console.error("Error fetching data:",l)});const b=()=>{n.forEach(l=>{const c={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let e="";for(const s in c)l[s]&&(e+=`<li class="stores-tag">${c[s]}</li>`);f.push(e),e=""})};function v(){let l={};for(var c=0;c<d.length;c++){let r=d[c].shopId;l[r]?l[r]++:l[r]=1}const e=Object.entries(l);e.sort(function(r,a){return a[1]-r[1]});let t=e.slice(0,4).map(function(r){return r[0]});n.forEach(function(r){t.forEach(function(a){a==r.id&&u.push(r)})})}const S=()=>{let l="",c=[];axios.get(`${h}/userShopCollections?userId=${g}`).then(function(e){let s=[];s=e.data;for(let t=0;t<s.length;t++)c[t]=s[t].shopId;c=c.map(t=>Number(t)).filter(t=>!isNaN(t)),u.forEach(t=>{const r=c.includes(t.id)?`<button type="button" class="collect-btn collect-store-btn border-0 text-primary fa-heart fs-24 fa-solid" data-shop-id="${t.id}" value="collected" aria-hidden="true"></button>`:`<button type="button" class="collect-btn collect-store-btn border-0 text-primary fa-regular fa-heart fs-24" data-shop-id="${t.id}" value="uncollect" aria-hidden="true"></button>`;l+=`
        <li class="stores-card" data-shop-id="${t.id}">
            ${r}
            <img src="${t.logo}" class="mb-8" alt="store image">
            <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
              <div class="d-flex justify-content-between">
                <h5 class="mb-8 mb-md-12">${t.name}</h5>
                <ul class="d-flex text-primary">
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-regular fa-star"></i></li>
                </ul>
              </div>
              <p class="stores-card-content mb-16">
                ${t.Description}</p>
              <ul class="stores-tag-group mb-16">
                ${f[t.id-1]}
              </ul>
              <a href="stores-info.html?id=${t.id}" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),o.innerHTML=l})},L=()=>{S()};o.addEventListener("click",function(l){if(l.target.closest(".collect-btn")){if(!g)D();else if(l.target.classList.contains("collect-btn")){const e=l.target,t=e.closest(".stores-card").dataset.shopId,r=`${h}/userShopCollections?userId=${g}&shopId=${t}`;axios.get(r).then(a=>{if(a.data.length>0){x(g,t),e.value="uncollect",e.classList.remove("fa-solid"),e.classList.add("fa-regular"),Swal.fire("已取消收藏");return}else E(g,t),e.value="collected",e.classList.remove("fa-regular"),e.classList.add("fa-solid"),Swal.fire("收藏成功")}).catch(a=>{console.error("Error checking collection status:",a)})}}})});function D(){window.location.href="logIn.html"}const T=document.querySelector("#searchButton"),k=document.querySelector("#searchInput"),A=document.querySelectorAll(".tagSearch");T.addEventListener("click",function(){$()});k.addEventListener("keydown",o=>{o.keyCode===13&&$()});A.forEach(o=>{o.addEventListener("click",function(){let n=o.getAttribute("value");N(n)})});function $(){let o=k.value;localStorage.setItem("searchTerm",o),window.location.href="searchResult.html",k.value=""}function N(o){let n=o;localStorage.setItem("searchTerm",n),window.location.href="searchResult.html",k.value=""}const _=document.querySelectorAll(".collect-btn");function q(){_.forEach(function(o){o.addEventListener("click",function(n){n.target.value=="collected"?(o.value="uncollect",o.classList.remove("fa-regular"),o.classList.add("fa-solid")):n.target.value=="uncollect"&&(o.value="collected",o.classList.add("fa-regular"),o.classList.remove("fa-solid"))})})}q();
