import"./bootstrap.min-09f15819.js";import{a as y}from"./axios-28bc18a3.js";document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("#lastestNews");let o=[];function d(){let c="";o.forEach(function(i){c+=`
        <div class="swiper-slide">
        <img src="${i.photo1}" class="lastestNews-img w-100 rounded-16 mb-8" alt="banner">
        <p class="fs-18 fw-500">${i.title}</p>
        <a href="news-info.html?id=${i.id}" class="stretched-link"></a>
      </div>
      `}),r.innerHTML=c}y.get("https://json-server-project-wtkt.onrender.com/latestNews").then(c=>{o=c.data,d()})});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("#popularDrinkList");let o=[],d=[],c=[],i=[];Promise.all([axios.get("https://json-server-project-wtkt.onrender.com/userDrinkCollections"),axios.get("https://json-server-project-wtkt.onrender.com/drinks")]).then(t=>{c=t[0].data,o=t[1].data,g(),h(),v(),a()}).catch(t=>{console.error("Error fetching data:",t)});const h=()=>{const t=o.map(s=>s.Ingredients.length===0?`${s.TeaType}`:`${s.TeaType},${s.Ingredients}`),e=[];for(let s=0;s<t.length;s++)e.push(t[s].split(","));let n="",u=[];e.forEach(s=>{s.forEach((l,f)=>{n+=`<li class="drinks-tag">${l}</li>`,f===s.length-1&&(u.push(n),n="")}),d.push(u),u=[]})};function g(){let t={};for(var e=0;e<c.length;e++){let l=c[e].drinkId;t[l]?t[l]++:t[l]=1}const n=Object.entries(t);n.sort(function(l,f){return f[1]-l[1]});let s=n.slice(0,6).map(function(l){return l[0]});o.forEach(function(l){s.forEach(function(f){f==l.id&&i.push(l)})})}const m=()=>{let t="";i.forEach(e=>{t+=`
    <li class="drinks-card px-16 py-24 px-md-24">
    <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
      value="collected"></button>
    <img src="${e.ImageLink}" alt="drink image">
    <div class="w-100 d-flex flex-column justify-content-between">
      <div class="drinks-card-body ms-16">
        <h4 class="mb-8 mb-md-12">${e.DrinkName}</h4>
        <ul class="drinks-tag-group mb-8 mb-md-12">
          ${d[e.id-1]}
        </ul>
        <p class="drinks-card-content mb-24 mb-md-32">${e.Description}</p>
      </div>
      <div class="d-flex justify-content-between align-items-end ms-16">
        <div class="d-flex align-items-center drinkStoreTag">
          <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
          <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${e.StoreName}</p>
        </div>
        <a href="#" class="d-block text-primary text-end"><span
            class="material-symbols-outlined me-2 align-middle">
            location_on
          </span>搜尋店家</a>
      </div>
  </li>
`}),r.innerHTML=t},v=()=>{m()};function a(){document.querySelectorAll(".collect-btn").forEach(function(e){e.addEventListener("click",function(n){n.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):n.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid"))})})}});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("#popularStoreList");let o=[],d=[],c=[],i=[];Promise.all([axios.get("https://json-server-project-wtkt.onrender.com/userShopCollections"),axios.get("https://json-server-project-wtkt.onrender.com/shops")]).then(a=>{c=a[0].data,o=a[1].data,g(),h(),v()}).catch(a=>{console.error("Error fetching data:",a)});const h=()=>{o.forEach(a=>{const t={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let e="";for(const n in t)a[n]&&(e+=`<li class="stores-tag">${t[n]}</li>`);d.push(e),e=""})};function g(){let a={};for(var t=0;t<c.length;t++){let s=c[t].shopId;a[s]?a[s]++:a[s]=1}const e=Object.entries(a);e.sort(function(s,l){return l[1]-s[1]});let u=e.slice(0,4).map(function(s){return s[0]});o.forEach(function(s){u.forEach(function(l){l==s.id&&i.push(s)})})}const m=()=>{let a="";i.forEach(t=>{a+=`
        <li class="stores-card">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
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
                ${d[t.id-1]}
              </ul>
              <a href="stores-info.html?id=${t.id}" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),r.innerHTML=a},v=()=>{m()}});const S=document.querySelector("#searchButton"),p=document.querySelector("#searchInput"),w=document.querySelectorAll(".tagSearch");S.addEventListener("click",function(){k()});p.addEventListener("keydown",r=>{r.keyCode===13&&k()});w.forEach(r=>{r.addEventListener("click",function(){let o=r.getAttribute("value");L(o)})});function k(){let r=p.value;localStorage.setItem("searchTerm",r),window.location.href="searchResult.html",p.value=""}function L(r){let o=r;localStorage.setItem("searchTerm",o),window.location.href="searchResult.html",p.value=""}const b=document.querySelectorAll(".collect-btn");console.log(b);function x(){b.forEach(function(r){r.addEventListener("click",function(o){o.target.value=="collected"?(r.value="uncollect",r.classList.remove("fa-regular"),r.classList.add("fa-solid")):o.target.value=="uncollect"&&(r.value="collected",r.classList.add("fa-regular"),r.classList.remove("fa-solid")),console.log("hi")})})}x();
