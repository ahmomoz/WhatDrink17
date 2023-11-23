import"./bootstrap.min-0bbeed66.js";import{a as m}from"./axios-28bc18a3.js";const b=document.querySelector("#lastestNews");let f=[];function k(){let e="";f.forEach(function(t){e+=`
        <div class="swiper-slide">
        <img src="${t.photo1}" class="lastestNews-img w-100 rounded-16 mb-8" alt="banner">
        <p class="fs-18 fw-500">${t.title}</p>
        <a href="news-info.html?id=${t.id}" class="stretched-link"></a>
      </div>
      `}),b.innerHTML=e}m.get("https://json-server-project-wtkt.onrender.com/latestNews").then(e=>{f=e.data,k()});const v=document.querySelector("#popularDrinkList");let d=[],p=[],n=[],h=[];const x=()=>{const e=d.map(o=>o.Ingredients.length===0?`${o.TeaType}`:`${o.TeaType},${o.Ingredients}`),t=[];for(let o=0;o<e.length;o++)t.push(e[o].split(","));let r="",l=[];t.forEach(o=>{o.forEach((s,a)=>{r+=`<li class="drinks-tag">${s}</li>`,a===o.length-1&&(l.push(r),r="")}),p.push(l),l=[]})};function y(){let e={};for(var t=0;t<n.length;t++){let s=n[t].drinkId;e[s]?e[s]++:e[s]=1}const r=Object.entries(e);r.sort(function(s,a){return a[1]-s[1]});let o=r.slice(0,6).map(function(s){return s[0]});d.forEach(function(s){o.forEach(function(a){a==s.id&&h.push(s)})})}const w=()=>{let e="";h.forEach(t=>{e+=`
    <li class="drinks-card px-16 py-24 px-md-24">
    <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
      value="collected"></button>
    <img src="${t.ImageLink}" alt="drink image">
    <div class="w-100 d-flex flex-column justify-content-between">
      <div class="drinks-card-body ms-16">
        <h4 class="mb-8 mb-md-12">${t.DrinkName}</h4>
        <ul class="drinks-tag-group mb-8 mb-md-12">
          ${p[t.id-1]}
        </ul>
        <p class="drinks-card-content mb-24 mb-md-32">${t.Description}</p>
      </div>
      <div class="d-flex justify-content-between align-items-end ms-16">
        <div class="d-flex align-items-center">
          <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
          <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${t.StoreName}</p>
        </div>
        <a href="#" class="d-block text-primary text-end"><span
            class="material-symbols-outlined me-2 align-middle">
            location_on
          </span>搜尋店家</a>
      </div>
  </li>
`}),v.innerHTML=e},S=()=>{w()};function E(){document.querySelectorAll(".collect-btn").forEach(function(t){t.addEventListener("click",function(r){r.target.value=="collected"?(t.value="uncollect",t.classList.remove("fa-regular"),t.classList.add("fa-solid")):r.target.value=="uncollect"&&(t.value="collected",t.classList.add("fa-regular"),t.classList.remove("fa-solid"))})})}axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(e=>{d=e.data}).catch(e=>{console.error("Error fetching data:",e)});axios.get("https://json-server-project-wtkt.onrender.com/userDrinkCollections").then(e=>{n=e.data,y(),x(),S(),E()}).catch(e=>{console.error("Error fetching data:",e)});const $=document.querySelector("#popularStoreList");let u=[],g=[],c=[],i=[];const L=()=>{u.forEach(e=>{const t={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let r="";for(const l in t)e[l]&&(r+=`<li class="stores-tag">${t[l]}</li>`);g.push(r),r=""})};function D(){let e={};for(var t=0;t<c.length;t++){let s=c[t].shopId;e[s]?e[s]++:e[s]=1}const r=Object.entries(e);r.sort(function(s,a){return a[1]-s[1]});let o=r.slice(0,4).map(function(s){return s[0]});u.forEach(function(s){o.forEach(function(a){a==s.id&&i.push(s)})}),console.log(i)}const I=()=>{let e="";i.forEach(t=>{e+=`
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
                ${g[t.id-1]}
              </ul>
              <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),$.innerHTML=e},T=()=>{I()};function j(){document.querySelectorAll(".collect-btn").forEach(function(t){t.addEventListener("click",function(r){r.target.value=="collected"?(t.value="uncollect",t.classList.remove("fa-regular"),t.classList.add("fa-solid")):r.target.value=="uncollect"&&(t.value="collected",t.classList.add("fa-regular"),t.classList.remove("fa-solid"))})})}axios.get("https://json-server-project-wtkt.onrender.com/shops").then(e=>{u=e.data}).catch(e=>{console.error("Error fetching data:",e)});axios.get("https://json-server-project-wtkt.onrender.com/userShopCollections").then(e=>{c=e.data,D(),L(),T(),j()}).catch(e=>{console.error("Error fetching data:",e)});
