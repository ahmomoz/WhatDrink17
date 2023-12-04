import"./bootstrap.min-feac71ab.js";import{a as x,e as $,c as I}from"./api-1053ecda.js";import{A as g}from"./config-ca05e4f1.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("#lastestNews");let a=[];function f(){let i="";a.forEach(function(u){i+=`
        <div class="swiper-slide">
        <img src="${u.photo1}" class="lastestNews-img w-100 rounded-16 mb-8" alt="banner">
        <p class="fs-18 fw-500">${u.title}</p>
        <a href="news-info.html?id=${u.id}" class="stretched-link"></a>
      </div>
      `}),s.innerHTML=i}x.get(`${g}/latestNews`).then(i=>{a=i.data,f()})});const y=sessionStorage.getItem("user_id");document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("#popularDrinkList");let a=[],f=[],i=[],u=[],p=[];Promise.all([axios.get(`${g}/userDrinkCollections`),axios.get(`${g}/drinks`),axios.get(`${g}/userDrinkCollections?userId=${y}`)]).then(e=>{i=e[0].data,a=e[1].data,u=e[2].data.map(t=>+t.drinkId),b(),k(),l(),n()}).catch(e=>{console.error("Error fetching data:",e)});const k=()=>{const e=a.map(o=>o.Ingredients.length===0?`${o.TeaType}`:`${o.TeaType},${o.Ingredients}`),t=[];for(let o=0;o<e.length;o++)t.push(e[o].split(","));let c="",r=[];t.forEach(o=>{o.forEach((d,h)=>{c+=`<li class="drinks-tag">${d}</li>`,h===o.length-1&&(r.push(c),c="")}),f.push(r),r=[]})};function b(){let e={};for(var t=0;t<i.length;t++){let d=i[t].drinkId;e[d]?e[d]++:e[d]=1}const c=Object.entries(e);c.sort(function(d,h){return h[1]-d[1]});let o=c.slice(0,6).map(function(d){return d[0]});a.forEach(function(d){o.forEach(function(h){h==d.id&&p.push(d)})})}const v=()=>{let e="";p.forEach(t=>{const c=u.includes(+t.id)?`<button type="button" class="collect-btn collect-drink-btn border-0 text-primary fa-heart fs-24 fa-solid" data-drink-id="${t.id}" value="collected" aria-hidden="true"></button>`:`<button type="button" class="collect-btn collect-drink-btn border-0 text-primary fa-regular fa-heart fs-24" data-drink-id="${t.id}" value="uncollect" aria-hidden="true"></button>`;e+=`
    <li class="drinks-card px-16 py-24 px-md-24">
    ${c}
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
`}),s.innerHTML=e},l=()=>{v()};function n(){document.querySelectorAll(".collect-drink-btn").forEach(function(t){t.addEventListener("click",function(c){const r=this.getAttribute("data-drink-id");c.target.value=="collected"?(t.value="uncollect",t.classList.add("fa-regular"),t.classList.remove("fa-solid"),$(y,r)):c.target.value=="uncollect"&&(t.value="collected",t.classList.remove("fa-regular"),t.classList.add("fa-solid"),I(y,r))})})}});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("#popularStoreList");let a=[],f=[],i=[],u=[];Promise.all([axios.get("https://json-server-project-wtkt.onrender.com/userShopCollections"),axios.get("https://json-server-project-wtkt.onrender.com/shops")]).then(l=>{i=l[0].data,a=l[1].data,k(),p(),v()}).catch(l=>{console.error("Error fetching data:",l)});const p=()=>{a.forEach(l=>{const n={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let e="";for(const t in n)l[t]&&(e+=`<li class="stores-tag">${n[t]}</li>`);f.push(e),e=""})};function k(){let l={};for(var n=0;n<i.length;n++){let r=i[n].shopId;l[r]?l[r]++:l[r]=1}const e=Object.entries(l);e.sort(function(r,o){return o[1]-r[1]});let c=e.slice(0,4).map(function(r){return r[0]});a.forEach(function(r){c.forEach(function(o){o==r.id&&u.push(r)})})}const b=()=>{let l="";u.forEach(n=>{l+=`
        <li class="stores-card">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${n.logo}" class="mb-8" alt="store image">
            <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
              <div class="d-flex justify-content-between">
                <h5 class="mb-8 mb-md-12">${n.name}</h5>
                <ul class="d-flex text-primary">
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-regular fa-star"></i></li>
                </ul>
              </div>
              <p class="stores-card-content mb-16">
                ${n.Description}</p>
              <ul class="stores-tag-group mb-16">
                ${f[n.id-1]}
              </ul>
              <a href="stores-info.html?id=${n.id}" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),s.innerHTML=l},v=()=>{b()}});const D=document.querySelector("#searchButton"),m=document.querySelector("#searchInput"),E=document.querySelectorAll(".tagSearch");D.addEventListener("click",function(){S()});m.addEventListener("keydown",s=>{s.keyCode===13&&S()});E.forEach(s=>{s.addEventListener("click",function(){let a=s.getAttribute("value");w(a)})});function S(){let s=m.value;localStorage.setItem("searchTerm",s),window.location.href="searchResult.html",m.value=""}function w(s){let a=s;localStorage.setItem("searchTerm",a),window.location.href="searchResult.html",m.value=""}const L=document.querySelectorAll(".collect-btn");console.log(L);function T(){L.forEach(function(s){s.addEventListener("click",function(a){a.target.value=="collected"?(s.value="uncollect",s.classList.remove("fa-regular"),s.classList.add("fa-solid")):a.target.value=="uncollect"&&(s.value="collected",s.classList.add("fa-regular"),s.classList.remove("fa-solid")),console.log("hi")})})}T();
