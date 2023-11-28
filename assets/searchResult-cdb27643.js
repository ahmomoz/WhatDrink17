import"./bootstrap.min-66c8f441.js";function B(t){let e=localStorage.getItem("searchTerm");if(e){y.textContent=e;let n=t.filter(s=>s.DrinkName.includes(e));$(n),b(n)}}const g=document.querySelector("#searchDrinkList"),y=document.querySelector("#searchBreadcrumb");let k=document.querySelector("#teaTypeSelect"),v=document.querySelector("#ingredientsSelect"),d=[],f=[];const N=()=>{const t=d.map(a=>!a||!a.TeaType?"":a.Ingredients.length===0?`${a.TeaType}`:`${a.TeaType},${a.Ingredients}`),e=[];for(let a=0;a<t.length;a++)e.push(t[a].split(","));let n="",s=[];e.forEach(a=>{a.forEach((u,h)=>{n+=`<li class="drinks-tag">${u}</li>`,h===a.length-1&&(s.push(n),n="")}),f.push(s),s=[]})},_=()=>{let t="";d.forEach(e=>{t+=`
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
                <a href="stores-info.html?id=${e.ShopID}" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
              </div>
          </li>
        `}),g.innerHTML=t},j=()=>{_(),L(d)};g.addEventListener("click",function(t){if(console.log(t.target),t.target.classList.contains("collect-btn")){const e=t.target;e.value==="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):e.value==="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid"))}});k.addEventListener("change",x);v.addEventListener("change",x);function x(){let t=d;k.value!==""&&(t=t.filter(e=>e.TeaType.includes(k.value))),v.value!==""&&(t=t.filter(e=>e.Ingredients.includes(v.value))),$(t),L(t),b(t),y.textContent="搜尋結果"}function $(t){let e="";t.forEach(n=>{e+=`
      <li class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
          value="collected"></button>
        <img src="${n.ImageLink}" alt="drink image">
        <div class="w-100 d-flex flex-column justify-content-between">
          <div class="drinks-card-body ms-16">
            <h4 class="mb-8 mb-md-12">${n.DrinkName}</h4>
            <ul class="drinks-tag-group mb-8 mb-md-12">
              ${f[n.id-1]}
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
    `}),g.innerHTML=e}const b=t=>{const e=t.length,n=10,s=Math.ceil(e/n);let a=1;function u(r){const c=(r-1)*n,i=c+n,p=t.slice(c,i);h(p),T()}function h(r){g.innerHTML="";let c="";r.forEach(i=>{c+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${i.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${i.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${f[i.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${i.Description}</p>
              </div>
              <div class="d-flex justify-content-between align-items-end ms-16">
                <div class="d-flex align-items-center drinkStoreTag">
                  <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                  <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${i.StoreName}</p>
                </div>
                <a href="stores-info.html?id=${i.ShopID}" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
              </div>
          </li>
        `}),g.innerHTML=c}function T(){const r=document.getElementById("pagination");r.innerHTML="";let c="";for(let l=1;l<=s;l++)c+=`
      <li class="page-item mx-4 ${l===a?"active":""}">   
        <a class="page-link" href="#" data-page="${l}">${l}</a>
      </li>
    `;const i=a===1?"text-gray":"",p=a===s?"text-gray":"",P=a===1?"disabled":"",w=a===1?"disabled":"",S=a===s?"disabled":"",I=a===s?"disabled":"";r.innerHTML=`
    <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${P}">
      <a class="page-link ${i}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
      </a>
    </li>

    <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${w}">
      <a class="page-link ${i}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">chevron_left</span>
      </a>
    </li>

    ${c}

    <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${S}">
      <a class="page-link ${p}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">chevron_right</span>
      </a>
    </li>

    <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${I}">
      <a class="page-link ${p}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
      </a>
    </li>`,document.querySelectorAll(".page-link").forEach(l=>{l.addEventListener("click",D=>{D.preventDefault();const E=parseInt(l.dataset.page);m(E)})});const o=[a];document.getElementById("previousPageBtn").addEventListener("click",l=>{l.preventDefault(),o[0]>1&&m(o[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",l=>{l.preventDefault(),o[0]!==s&&m(o[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",l=>{l.preventDefault(),o[0]>1&&m(1)}),document.getElementById("last-page-btn").addEventListener("click",l=>{l.preventDefault(),o[0]!==s&&m(s)})}function m(r){a=r,u(a),window.scrollTo(0,400)}u(a)},L=t=>{const e=document.querySelector("#searchDrinks"),n=()=>{let s=t.filter(a=>a.DrinkName.includes(e.value));$(s),b(s),y.textContent="搜尋結果"};e.addEventListener("keyup",s=>{s.keyCode===13&&n()})};axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(t=>{d=t.data,N(),j(),x(),b(d),B(d)}).catch(t=>{console.error("Error fetching data:",t)});
