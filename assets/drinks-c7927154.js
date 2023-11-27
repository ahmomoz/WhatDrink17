import"./bootstrap.min-4ba85d86.js";const g=document.querySelector("#drinkList");let h=document.querySelector("#teaTypeSelect"),k=document.querySelector("#ingredientsSelect"),o=[],f=[];const S=()=>{const t=o.map(a=>!a||!a.TeaType?"":a.Ingredients.length===0?`${a.TeaType}`:`${a.TeaType},${a.Ingredients}`),e=[];for(let a=0;a<t.length;a++)e.push(t[a].split(","));let s="",n=[];e.forEach(a=>{a.forEach((p,b)=>{s+=`<li class="drinks-tag">${p}</li>`,b===a.length-1&&(n.push(s),s="")}),f.push(n),n=[]})},B=()=>{let t="";o.forEach(e=>{t+=`
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
        `}),g.innerHTML=t},_=()=>{B(),D(o)};g.addEventListener("click",function(t){if(console.log(t.target),t.target.classList.contains("collect-btn")){const e=t.target;e.value==="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):e.value==="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid"))}});h.addEventListener("change",v);k.addEventListener("change",v);function v(){let t=o;h.value!==""&&(t=t.filter(e=>e.TeaType.includes(h.value))),k.value!==""&&(t=t.filter(e=>e.Ingredients.includes(k.value))),$(t),D(t),y(t)}function $(t){let e="";t.forEach(s=>{e+=`
      <li class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
          value="collected"></button>
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
                <a href="stores-info.html?id=${s.ShopID}" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
          </div>
      </li>
    `}),g.innerHTML=e}const y=t=>{const e=t.length,s=10,n=Math.ceil(e/s);let a=1;function p(r){const d=(r-1)*s,i=d+s,u=t.slice(d,i);b(u),L()}function b(r){g.innerHTML="";let d="";r.forEach(i=>{d+=`
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
        `}),g.innerHTML=d}function L(){const r=document.getElementById("pagination");r.innerHTML="";let d="";for(let l=1;l<=n;l++)d+=`
      <li class="page-item mx-4 ${l===a?"active":""}">   
        <a class="page-link" href="#" data-page="${l}">${l}</a>
      </li>
    `;const i=a===1?"text-gray":"",u=a===n?"text-gray":"",P=a===1?"disabled":"",T=a===1?"disabled":"",w=a===n?"disabled":"",E=a===n?"disabled":"";r.innerHTML=`
    <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${P}">
      <a class="page-link ${i}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
      </a>
    </li>

    <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${T}">
      <a class="page-link ${i}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">chevron_left</span>
      </a>
    </li>

    ${d}

    <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${w}">
      <a class="page-link ${u}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">chevron_right</span>
      </a>
    </li>

    <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${E}">
      <a class="page-link ${u}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
      </a>
    </li>`,document.querySelectorAll(".page-link").forEach(l=>{l.addEventListener("click",x=>{x.preventDefault();const I=parseInt(l.dataset.page);m(I)})});const c=[a];document.getElementById("previousPageBtn").addEventListener("click",l=>{l.preventDefault(),c[0]>1&&m(c[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",l=>{l.preventDefault(),c[0]!==n&&m(c[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",l=>{l.preventDefault(),c[0]>1&&m(1)}),document.getElementById("last-page-btn").addEventListener("click",l=>{l.preventDefault(),c[0]!==n&&m(n)})}function m(r){a=r,p(a),window.scrollTo(0,400)}p(a)},D=t=>{const e=document.querySelector("#searchDrinks"),s=()=>{let n=t.filter(a=>a.DrinkName.includes(e.value));$(n),y(n)};e.addEventListener("keyup",n=>{n.keyCode===13&&s()})};axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(t=>{o=t.data,S(),_(),v(),y(o)}).catch(t=>{console.error("Error fetching data:",t)});
