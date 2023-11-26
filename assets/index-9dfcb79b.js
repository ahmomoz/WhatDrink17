import"./bootstrap.min-66cd0a72.js";import{a as b}from"./axios-28bc18a3.js";const k=document.querySelector("#lastestNews");let u=[];function v(){let t="";u.forEach(function(e){t+=`
        <div class="swiper-slide">
        <img src="${e.photo1}" class="lastestNews-img w-100 rounded-16 mb-8" alt="banner">
        <p class="fs-18 fw-500">${e.title}</p>
        <a href="news-info.html?id=${e.id}" class="stretched-link"></a>
      </div>
      `}),k.innerHTML=t}b.get("https://json-server-project-wtkt.onrender.com/latestNews").then(t=>{u=t.data,v()});const x=document.querySelector("#popularDrinkList");let i=[],f=[],n=[],p=[];axios.get("https://json-server-project-wtkt.onrender.com/userDrinkCollections").then(t=>{n=t.data,w(),y(),$(),isCollect()}).catch(t=>{console.error("Error fetching data:",t)});axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(t=>{i=t.data}).catch(t=>{console.error("Error fetching data:",t)});const y=()=>{const t=i.map(o=>o.Ingredients.length===0?`${o.TeaType}`:`${o.TeaType},${o.Ingredients}`),e=[];for(let o=0;o<t.length;o++)e.push(t[o].split(","));let r="",a=[];e.forEach(o=>{o.forEach((s,l)=>{r+=`<li class="drinks-tag">${s}</li>`,l===o.length-1&&(a.push(r),r="")}),f.push(a),a=[]})};function w(){let t={};for(var e=0;e<n.length;e++){let s=n[e].drinkId;t[s]?t[s]++:t[s]=1}const r=Object.entries(t);r.sort(function(s,l){return l[1]-s[1]});let o=r.slice(0,6).map(function(s){return s[0]});i.forEach(function(s){o.forEach(function(l){l==s.id&&p.push(s)})})}const S=()=>{let t="";p.forEach(e=>{t+=`
    <li class="drinks-card px-16 py-24 px-md-24">
    <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
      value="collected"></button>
    <img src="${e.ImageLink}" alt="drink image">
    <div class="w-100 d-flex flex-column justify-content-between">
      <div class="drinks-card-body ms-16">
        <h4 class="mb-8 mb-md-12">${e.DrinkName}</h4>
        <ul class="drinks-tag-group mb-8 mb-md-12">
          ${f[e.id-1]}
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
`}),x.innerHTML=t},$=()=>{S()},E=document.querySelector("#popularStoreList");let d=[],h=[],c=[],g=[];axios.get("https://json-server-project-wtkt.onrender.com/userShopCollections").then(t=>{c=t.data,D(),L(),T(),j()}).catch(t=>{console.error("Error fetching data:",t)});axios.get("https://json-server-project-wtkt.onrender.com/shops").then(t=>{d=t.data}).catch(t=>{console.error("Error fetching data:",t)});const L=()=>{d.forEach(t=>{const e={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let r="";for(const a in e)t[a]&&(r+=`<li class="stores-tag">${e[a]}</li>`);h.push(r),r=""})};function D(){let t={};for(var e=0;e<c.length;e++){let s=c[e].shopId;t[s]?t[s]++:t[s]=1}const r=Object.entries(t);r.sort(function(s,l){return l[1]-s[1]});let o=r.slice(0,4).map(function(s){return s[0]});d.forEach(function(s){o.forEach(function(l){l==s.id&&g.push(s)})})}const I=()=>{let t="";g.forEach(e=>{t+=`
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
                ${h[e.id-1]}
              </ul>
              <a href="stores-info.html?id=${e.id}" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),E.innerHTML=t},T=()=>{I()};function j(){document.querySelectorAll(".collect-btn").forEach(function(e){e.addEventListener("click",function(r){r.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):r.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid"))})})}const m=document.querySelectorAll(".collect-btn");console.log(m);function C(){m.forEach(function(t){t.addEventListener("click",function(e){e.target.value=="collected"?(t.value="uncollect",t.classList.remove("fa-regular"),t.classList.add("fa-solid")):e.target.value=="uncollect"&&(t.value="collected",t.classList.add("fa-regular"),t.classList.remove("fa-solid")),console.log("hi")})})}C();
