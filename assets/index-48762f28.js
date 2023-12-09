import"./bootstrap.min-feac71ab.js";import{b as I,c as $,e as x,d as E,a as w}from"./api-0e668cc2.js";import{A as p}from"./config-ca05e4f1.js";document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#lastestNews");let n=[];function u(){let i="";n.forEach(function(d){i+=`
        <div class="swiper-slide">
        <img src="${d.photo1}" class="lastestNews-img w-100 rounded-16 mb-8" alt="banner">
        <p class="fs-18 fw-500">${d.title}</p>
        <a href="news-info.html?id=${d.id}" class="stretched-link"></a>
      </div>
      `}),o.innerHTML=i}I.get(`${p}/latestNews`).then(i=>{n=i.data,u()})});const S=sessionStorage.getItem("user_id");document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#popularDrinkList");let n=[],u=[],i=[],d=[],f=[];Promise.all([axios.get(`${p}/userDrinkCollections`),axios.get(`${p}/drinks`),axios.get(`${p}/userDrinkCollections?userId=${S}`)]).then(e=>{i=e[0].data,n=e[1].data,d=e[2].data.map(t=>+t.drinkId),b(),m(),v(),r()}).catch(e=>{console.error("Error fetching data:",e)});const m=()=>{const e=n.map(s=>s.Ingredients.length===0?`${s.TeaType}`:`${s.TeaType},${s.Ingredients}`),t=[];for(let s=0;s<e.length;s++)t.push(e[s].split(","));let l="",c=[];t.forEach(s=>{s.forEach((a,h)=>{l+=`<li class="drinks-tag">${a}</li>`,h===s.length-1&&(c.push(l),l="")}),u.push(c),c=[]})};function b(){let e={};for(var t=0;t<i.length;t++){let a=i[t].drinkId;e[a]?e[a]++:e[a]=1}const l=Object.entries(e);l.sort(function(a,h){return h[1]-a[1]});let s=l.slice(0,6).map(function(a){return a[0]});n.forEach(function(a){s.forEach(function(h){h==a.id&&f.push(a)})})}const k=()=>{let e="";f.forEach(t=>{const l=d.includes(+t.id)?`<button type="button" class="collect-btn collect-drink-btn border-0 text-primary fa-heart fs-24 fa-solid" data-drink-id="${t.id}" value="collected" aria-hidden="true"></button>`:`<button type="button" class="collect-btn collect-drink-btn border-0 text-primary fa-regular fa-heart fs-24" data-drink-id="${t.id}" value="uncollect" aria-hidden="true"></button>`;e+=`
    <li class="drinks-card px-16 py-24 px-md-24">
    ${l}
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
`}),o.innerHTML=e},v=()=>{k()};function r(){document.querySelectorAll(".collect-drink-btn").forEach(function(t){t.addEventListener("click",function(l){const c=this.getAttribute("data-drink-id");l.target.value=="collected"?(t.value="uncollect",t.classList.add("fa-regular"),t.classList.remove("fa-solid"),$(S,c)):l.target.value=="uncollect"&&(t.value="collected",t.classList.remove("fa-regular"),t.classList.add("fa-solid"),x(S,c))})})}});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#popularStoreList");let n=[],u=[],i=[],d=[];const f=sessionStorage.getItem("user_id");Promise.all([axios.get("https://json-server-project-wtkt.onrender.com/userShopCollections"),axios.get("https://json-server-project-wtkt.onrender.com/shops")]).then(r=>{i=r[0].data,n=r[1].data,b(),m(),v()}).catch(r=>{console.error("Error fetching data:",r)});const m=()=>{n.forEach(r=>{const e={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let t="";for(const l in e)r[l]&&(t+=`<li class="stores-tag">${e[l]}</li>`);u.push(t),t=""})};function b(){let r={};for(var e=0;e<i.length;e++){let s=i[e].shopId;r[s]?r[s]++:r[s]=1}const t=Object.entries(r);t.sort(function(s,a){return a[1]-s[1]});let c=t.slice(0,4).map(function(s){return s[0]});n.forEach(function(s){c.forEach(function(a){a==s.id&&d.push(s)})})}const k=()=>{let r="";d.forEach(e=>{r+=`
        <li class="stores-card" data-shop-id="${e.id}">
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
        `}),o.innerHTML=r},v=()=>{k()};o.addEventListener("click",function(r){if(r.target.closest(".collect-btn")){if(!f)redirectToLogin();else if(r.target.classList.contains("collect-btn")){const t=r.target,l=t.closest(".stores-card");console.log(l.dataset);const c=l.dataset.shopId,s=`${p}/userShopCollections?userId=${f}&shopId=${c}`;axios.get(s).then(a=>{if(a.data.length>0){E(f,c),t.value="uncollect",t.classList.remove("fa-solid"),t.classList.add("fa-regular"),Swal.fire("已取消收藏");return}else w(f,c),t.value="collected",t.classList.remove("fa-regular"),t.classList.add("fa-solid"),Swal.fire("收藏成功")}).catch(a=>{console.error("Error checking collection status:",a)})}}})});const D=document.querySelector("#searchButton"),g=document.querySelector("#searchInput"),C=document.querySelectorAll(".tagSearch");D.addEventListener("click",function(){L()});g.addEventListener("keydown",o=>{o.keyCode===13&&L()});C.forEach(o=>{o.addEventListener("click",function(){let n=o.getAttribute("value");T(n)})});function L(){let o=g.value;localStorage.setItem("searchTerm",o),window.location.href="searchResult.html",g.value=""}function T(o){let n=o;localStorage.setItem("searchTerm",n),window.location.href="searchResult.html",g.value=""}const y=document.querySelectorAll(".collect-btn");console.log(y);function A(){y.forEach(function(o){o.addEventListener("click",function(n){n.target.value=="collected"?(o.value="uncollect",o.classList.remove("fa-regular"),o.classList.add("fa-solid")):n.target.value=="uncollect"&&(o.value="collected",o.classList.add("fa-regular"),o.classList.remove("fa-solid")),console.log("hi")})})}A();
