import"./bootstrap.min-feac71ab.js";import{c as j,e as q}from"./api-0e668cc2.js";import{A as S}from"./config-ca05e4f1.js";const p=document.querySelector("#searchDrinkList"),$=document.querySelector("#searchBreadcrumb");let y=document.querySelector("#teaTypeSelect"),x=document.querySelector("#ingredientsSelect"),w=[],o=[],h=[];const u=sessionStorage.getItem("user_id"),A=()=>{const t=o.map(a=>!a||!a.TeaType?"":a.Ingredients.length===0?`${a.TeaType}`:`${a.TeaType},${a.Ingredients}`),e=[];for(let a=0;a<t.length;a++)e.push(t[a].split(","));let n="",s=[];e.forEach(a=>{a.forEach((l,f)=>{n+=`<li class="drinks-tag">${l}</li>`,f===a.length-1&&(s.push(n),n="")}),h.push(s),s=[]})},M=()=>{let t="";o.forEach(e=>{t+=`
          <li class="drinks-card px-16 py-24 px-md-24" data-drink-id="${e.id}">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${e.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${e.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${h[e.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${e.Description}</p>
              </div>
              <div class="d-flex justify-content-between align-items-end ms-16">
                <div class="d-flex align-items-center drinkStoreTag">
                  <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                  <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${e.StoreName}</p>
                </div>
                <a href="stores-info.html?id=${e.ShopID}" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
              </div>
          </li>
        `}),p.innerHTML=t},H=()=>{M(),T(o)},k=()=>{const t=e=>document.querySelector(`.drinks-card[data-drink-id="${e}"] .collect-btn`);w.forEach(e=>{const n=t(e.drinkId);n&&(n.value="collected",n.classList.remove("fa-regular"),n.classList.add("fa-solid"))})};p.addEventListener("click",function(t){const e=t.target.closest(".collect-btn");if(e){if(!u)R();else if(t.target.classList.contains("collect-btn")){const s=e.closest(".drinks-card").dataset.drinkId,a=`${S}/userDrinkCollections?userId=${u}&drinkId=${s}`;axios.get(a).then(l=>{if(l.data.length>0){j(u,s),e.value="uncollect",e.classList.remove("fa-solid"),e.classList.add("fa-regular"),Swal.fire("已取消收藏");return}else q(u,s),e.value="collected",e.classList.remove("fa-regular"),e.classList.add("fa-solid"),Swal.fire("收藏成功")}).catch(l=>{console.error("Error checking collection status:",l)})}}});function R(){Swal.fire("登入後即可使用收藏功能"),window.location.href="logIn.html"}y.addEventListener("change",D);x.addEventListener("change",D);function D(){let t=o;y.value!==""&&(t=t.filter(e=>e.TeaType.includes(y.value))),x.value!==""&&(t=t.filter(e=>e.Ingredients.includes(x.value))),I(t),T(t),v(t),$.textContent="搜尋結果",k()}function I(t){let e="";t.forEach(n=>{e+=`
      <li class="drinks-card px-16 py-24 px-md-24" data-drink-id="${n.id}">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
          value="collected"></button>
        <img src="${n.ImageLink}" alt="drink image">
        <div class="w-100 d-flex flex-column justify-content-between">
          <div class="drinks-card-body ms-16">
            <h4 class="mb-8 mb-md-12">${n.DrinkName}</h4>
            <ul class="drinks-tag-group mb-8 mb-md-12">
              ${h[n.id-1]}
            </ul>
            <p class="drinks-card-content mb-24 mb-md-32">${n.Description}</p>
          </div>
          <div class="d-flex justify-content-between align-items-end ms-16">
                <div class="d-flex align-items-center drinkStoreTag">
                  <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                  <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${n.StoreName}</p>
                </div>
                <a href="stores-info.html?id=${n.ShopID}" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
          </div>
      </li>
    `}),p.innerHTML=e}const v=t=>{const e=t.length,n=10,s=Math.ceil(e/n);let a=1;function l(c){const d=(c-1)*n,r=d+n,b=t.slice(d,r);f(b),P(),k()}function f(c){p.innerHTML="";let d="";c.forEach(r=>{d+=`
          <li class="drinks-card px-16 py-24 px-md-24" data-drink-id="${r.id}">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${r.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${r.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${h[r.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${r.Description}</p>
              </div>
              <div class="d-flex justify-content-between align-items-end ms-16">
                <div class="d-flex align-items-center drinkStoreTag">
                  <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                  <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${r.StoreName}</p>
                </div>
                <a href="stores-info.html?id=${r.ShopID}" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
              </div>
          </li>
        `}),p.innerHTML=d}function P(){const c=document.getElementById("pagination");c.innerHTML="";let d="";for(let i=1;i<=s;i++)d+=`
      <li class="page-item mx-4 ${i===a?"active":""}">   
        <a class="page-link" href="#" data-page="${i}">${i}</a>
      </li>
    `;const r=a===1?"text-gray":"",b=a===s?"text-gray":"",E=a===1?"disabled":"",B=a===1?"disabled":"",C=a===s?"disabled":"",_=a===s?"disabled":"";c.innerHTML=`
    <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${E}">
      <a class="page-link ${r}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
      </a>
    </li>

    <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${B}">
      <a class="page-link ${r}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">chevron_left</span>
      </a>
    </li>

    ${d}

    <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${C}">
      <a class="page-link ${b}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">chevron_right</span>
      </a>
    </li>

    <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${_}">
      <a class="page-link ${b}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
      </a>
    </li>`,document.querySelectorAll(".page-link").forEach(i=>{i.addEventListener("click",L=>{L.preventDefault();const N=parseInt(i.dataset.page);g(N)})});const m=[a];document.getElementById("previousPageBtn").addEventListener("click",i=>{i.preventDefault(),m[0]>1&&g(m[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",i=>{i.preventDefault(),m[0]!==s&&g(m[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",i=>{i.preventDefault(),m[0]>1&&g(1)}),document.getElementById("last-page-btn").addEventListener("click",i=>{i.preventDefault(),m[0]!==s&&g(s)})}function g(c){a=c,l(a),window.scrollTo(0,400)}l(a)},T=t=>{const e=document.querySelector("#searchDrinks"),n=()=>{let s=t.filter(a=>a.DrinkName.includes(e.value));I(s),v(s),$.textContent="搜尋結果",k()};e.addEventListener("keyup",s=>{s.keyCode===13&&n()})};function U(t){let e=localStorage.getItem("searchTerm");if(e){$.textContent=e;let n=t.filter(s=>s.DrinkName.includes(e));I(n),v(n)}}Promise.all([axios.get(`${S}/userDrinkCollections?userId=${u}`),axios.get("https://json-server-project-wtkt.onrender.com/drinks")]).then(t=>{w=t[0].data,o=t[1].data,A(),H(),D(),v(o),U(o),k()}).catch(t=>{console.error("Error fetching data:",t)});
