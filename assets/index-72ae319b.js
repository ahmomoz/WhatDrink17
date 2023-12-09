import"./bootstrap.min-feac71ab.js";import{b as y,c as x,e as w,d as C,a as E}from"./api-0e668cc2.js";import{A as p}from"./config-ca05e4f1.js";document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("#lastestNews");let c=[];function f(){let i="";c.forEach(function(d){i+=`
        <div class="swiper-slide">
        <img src="${d.photo1}" class="lastestNews-img w-100 rounded-16 mb-8" alt="banner">
        <p class="fs-18 fw-500">${d.title}</p>
        <a href="news-info.html?id=${d.id}" class="stretched-link"></a>
      </div>
      `}),r.innerHTML=i}y.get(`${p}/latestNews`).then(i=>{c=i.data,f()})});const L=sessionStorage.getItem("user_id");document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("#popularDrinkList");let c=[],f=[],i=[],d=[],u=[];Promise.all([axios.get(`${p}/userDrinkCollections`),axios.get(`${p}/drinks`),axios.get(`${p}/userDrinkCollections?userId=${L}`)]).then(n=>{i=n[0].data,c=n[1].data,d=n[2].data.map(t=>+t.drinkId),m(),b(),v(),S()}).catch(n=>{console.error("Error fetching data:",n)});const b=()=>{const n=c.map(l=>l.Ingredients.length===0?`${l.TeaType}`:`${l.TeaType},${l.Ingredients}`),t=[];for(let l=0;l<n.length;l++)t.push(n[l].split(","));let s="",o=[];t.forEach(l=>{l.forEach((e,a)=>{s+=`<li class="drinks-tag">${e}</li>`,a===l.length-1&&(o.push(s),s="")}),f.push(o),o=[]})};function m(){let n={};for(var t=0;t<i.length;t++){let e=i[t].drinkId;n[e]?n[e]++:n[e]=1}const s=Object.entries(n);s.sort(function(e,a){return a[1]-e[1]});let l=s.slice(0,6).map(function(e){return e[0]});c.forEach(function(e){l.forEach(function(a){a==e.id&&u.push(e)})})}const k=()=>{let n="";u.forEach(t=>{const s=d.includes(+t.id)?`<button type="button" class="collect-btn collect-drink-btn border-0 text-primary fa-heart fs-24 fa-solid" data-drink-id="${t.id}" value="collected" aria-hidden="true"></button>`:`<button type="button" class="collect-btn collect-drink-btn border-0 text-primary fa-regular fa-heart fs-24" data-drink-id="${t.id}" value="uncollect" aria-hidden="true"></button>`;n+=`
    <li class="drinks-card px-16 py-24 px-md-24">
    ${s}
    <img src="${t.ImageLink}" alt="drink image">
    <div class="w-100 d-flex flex-column justify-content-between">
      <div class="drinks-card-body ms-16">
        <h4 class="mb-8 mb-md-12">${t.DrinkName}</h4>
        <ul class="drinks-tag-group mb-8 mb-md-12">
          ${f[t.id-1]}
        </ul>
        <p class="drinks-card-content mb-24 mb-md-32">${t.Description}</p>
      </div>
      <div class="d-flex justify-content-between align-items-end ms-16">
        <div class="d-flex align-items-center drinkStoreTag">
          <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
          <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${t.StoreName}</p>
        </div>
        <a href="#" class="d-block text-primary text-end"><span
            class="material-symbols-outlined me-2 align-middle">
            location_on
          </span>搜尋店家</a>
      </div>
  </li>
`}),r.innerHTML=n},v=()=>{k()};function S(){document.querySelectorAll(".collect-drink-btn").forEach(function(t){t.addEventListener("click",function(s){const o=this.getAttribute("data-drink-id");s.target.value=="collected"?(t.value="uncollect",t.classList.add("fa-regular"),t.classList.remove("fa-solid"),x(L,o)):s.target.value=="uncollect"&&(t.value="collected",t.classList.remove("fa-regular"),t.classList.add("fa-solid"),w(L,o))})})}});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("#popularStoreList");let c=[],f=[],i=[],d=[];const u=sessionStorage.getItem("user_id");function b(){console.log("重新導回登入頁"),window.location.href="logIn.html"}Promise.all([axios.get("https://json-server-project-wtkt.onrender.com/userShopCollections"),axios.get("https://json-server-project-wtkt.onrender.com/shops")]).then(t=>{i=t[0].data,c=t[1].data,k(),m(),S()}).catch(t=>{console.error("Error fetching data:",t)});const m=()=>{c.forEach(t=>{const s={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let o="";for(const l in s)t[l]&&(o+=`<li class="stores-tag">${s[l]}</li>`);f.push(o),o=""})};function k(){let t={};for(var s=0;s<i.length;s++){let a=i[s].shopId;t[a]?t[a]++:t[a]=1}const o=Object.entries(t);o.sort(function(a,h){return h[1]-a[1]});let e=o.slice(0,4).map(function(a){return a[0]});c.forEach(function(a){e.forEach(function(h){h==a.id&&d.push(a)})})}const v=()=>{let t="",s=[];axios.get(`https://drinkpicker-nclv.onrender.com/userShopCollections?userId=${u}`).then(function(o){let l=[];l=o.data;for(let e=0;e<l.length;e++)s[e]=l[e].shopId;s=s.map(e=>Number(e)).filter(e=>!isNaN(e)),d.forEach(e=>{console.log(e.id),console.log(s);const a=s.includes(e.id)?`<button type="button" class="collect-btn collect-store-btn border-0 text-primary fa-heart fs-24 fa-solid" data-shop-id="${e.id}" value="collected" aria-hidden="true"></button>`:`<button type="button" class="collect-btn collect-store-btn border-0 text-primary fa-regular fa-heart fs-24" data-shop-id="${e.id}" value="uncollect" aria-hidden="true"></button>`;console.log(a),t+=`
        <li class="stores-card" data-shop-id="${e.id}">
            ${a}
            <img src="${e.logo}" class="mb-8" alt="store image">
            <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
              <div class="d-flex justify-content-between">
                <h5 class="mb-8 mb-md-12">${e.name}</h5>
                <ul class="d-flex text-primary">
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-regular fa-star"></i></li>
                </ul>
              </div>
              <p class="stores-card-content mb-16">
                ${e.Description}</p>
              <ul class="stores-tag-group mb-16">
                ${f[e.id-1]}
              </ul>
              <a href="stores-info.html?id=${e.id}" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),r.innerHTML=t})},S=()=>{v(),n()},n=()=>{};r.addEventListener("click",function(t){if(t.target.closest(".collect-btn")){if(!u)b();else if(t.target.classList.contains("collect-btn")){const o=t.target,l=o.closest(".stores-card");console.log(l.dataset);const e=l.dataset.shopId,a=`${p}/userShopCollections?userId=${u}&shopId=${e}`;axios.get(a).then(h=>{if(h.data.length>0){C(u,e),o.value="uncollect",o.classList.remove("fa-solid"),o.classList.add("fa-regular"),Swal.fire("已取消收藏");return}else E(u,e),o.value="collected",o.classList.remove("fa-regular"),o.classList.add("fa-solid"),Swal.fire("收藏成功")}).catch(h=>{console.error("Error checking collection status:",h)})}}})});const D=document.querySelector("#searchButton"),g=document.querySelector("#searchInput"),T=document.querySelectorAll(".tagSearch");D.addEventListener("click",function(){I()});g.addEventListener("keydown",r=>{r.keyCode===13&&I()});T.forEach(r=>{r.addEventListener("click",function(){let c=r.getAttribute("value");A(c)})});function I(){let r=g.value;localStorage.setItem("searchTerm",r),window.location.href="searchResult.html",g.value=""}function A(r){let c=r;localStorage.setItem("searchTerm",c),window.location.href="searchResult.html",g.value=""}const $=document.querySelectorAll(".collect-btn");console.log($);function N(){$.forEach(function(r){r.addEventListener("click",function(c){c.target.value=="collected"?(r.value="uncollect",r.classList.remove("fa-regular"),r.classList.add("fa-solid")):c.target.value=="uncollect"&&(r.value="collected",r.classList.add("fa-regular"),r.classList.remove("fa-solid")),console.log("hi")})})}N();