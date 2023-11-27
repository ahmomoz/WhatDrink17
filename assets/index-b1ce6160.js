import"./bootstrap.min-78ccea25.js";import{a as y}from"./axios-28bc18a3.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("#lastestNews");let r=[];function u(){let i="";r.forEach(function(d){i+=`
        <div class="swiper-slide">
        <img src="${d.photo1}" class="lastestNews-img w-100 rounded-16 mb-8" alt="banner">
        <p class="fs-18 fw-500">${d.title}</p>
        <a href="news-info.html?id=${d.id}" class="stretched-link"></a>
      </div>
      `}),s.innerHTML=i}y.get("https://json-server-project-wtkt.onrender.com/latestNews").then(i=>{r=i.data,u()})});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("#popularDrinkList");let r=[],u=[],i=[],d=[];Promise.all([axios.get("https://json-server-project-wtkt.onrender.com/userDrinkCollections"),axios.get("https://json-server-project-wtkt.onrender.com/drinks")]).then(o=>{i=o[0].data,r=o[1].data,h(),p(),m(),isCollect()}).catch(o=>{console.error("Error fetching data:",o)});const p=()=>{const o=r.map(a=>a.Ingredients.length===0?`${a.TeaType}`:`${a.TeaType},${a.Ingredients}`),t=[];for(let a=0;a<o.length;a++)t.push(o[a].split(","));let e="",n=[];t.forEach(a=>{a.forEach((c,l)=>{e+=`<li class="drinks-tag">${c}</li>`,l===a.length-1&&(n.push(e),e="")}),u.push(n),n=[]})};function h(){let o={};for(var t=0;t<i.length;t++){let c=i[t].drinkId;o[c]?o[c]++:o[c]=1}const e=Object.entries(o);e.sort(function(c,l){return l[1]-c[1]});let a=e.slice(0,6).map(function(c){return c[0]});r.forEach(function(c){a.forEach(function(l){l==c.id&&d.push(c)})})}const g=()=>{let o="";d.forEach(t=>{o+=`
    <li class="drinks-card px-16 py-24 px-md-24">
    <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
      value="collected"></button>
    <img src="${t.ImageLink}" alt="drink image">
    <div class="w-100 d-flex flex-column justify-content-between">
      <div class="drinks-card-body ms-16">
        <h4 class="mb-8 mb-md-12">${t.DrinkName}</h4>
        <ul class="drinks-tag-group mb-8 mb-md-12">
          ${u[t.id-1]}
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
`}),s.innerHTML=o},m=()=>{g()}});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("#popularStoreList");let r=[],u=[],i=[],d=[];Promise.all([axios.get("https://json-server-project-wtkt.onrender.com/userShopCollections"),axios.get("https://json-server-project-wtkt.onrender.com/shops")]).then(t=>{i=t[0].data,r=t[1].data,h(),p(),m(),o()}).catch(t=>{console.error("Error fetching data:",t)});const p=()=>{r.forEach(t=>{const e={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let n="";for(const a in e)t[a]&&(n+=`<li class="stores-tag">${e[a]}</li>`);u.push(n),n=""})};function h(){let t={};for(var e=0;e<i.length;e++){let l=i[e].shopId;t[l]?t[l]++:t[l]=1}const n=Object.entries(t);n.sort(function(l,v){return v[1]-l[1]});let c=n.slice(0,4).map(function(l){return l[0]});r.forEach(function(l){c.forEach(function(v){v==l.id&&d.push(l)})})}const g=()=>{let t="";d.forEach(e=>{t+=`
        <li class="stores-card">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
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
                ${u[e.id-1]}
              </ul>
              <a href="stores-info.html?id=${e.id}" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),s.innerHTML=t},m=()=>{g()};function o(){document.querySelectorAll(".collect-btn").forEach(function(e){e.addEventListener("click",function(n){n.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):n.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid"))})})}});const S=document.querySelector("#searchButton"),f=document.querySelector("#searchInput"),w=document.querySelectorAll("#tagSearch");S.addEventListener("click",function(){k()});f.addEventListener("keydown",s=>{s.keyCode===13&&k()});w.forEach(s=>{s.addEventListener("click",function(){let r=s.getAttribute("value");L(r)})});function k(){let s=f.value;localStorage.setItem("searchTerm",s),window.location.href="searchResult.html",f.value=""}function L(s){let r=s;localStorage.setItem("searchTerm",r),window.location.href="searchResult.html",f.value=""}const b=document.querySelectorAll(".collect-btn");console.log(b);function x(){b.forEach(function(s){s.addEventListener("click",function(r){r.target.value=="collected"?(s.value="uncollect",s.classList.remove("fa-regular"),s.classList.add("fa-solid")):r.target.value=="uncollect"&&(s.value="collected",s.classList.add("fa-regular"),s.classList.remove("fa-solid")),console.log("hi")})})}x();
