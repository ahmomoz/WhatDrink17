import"./bootstrap.min-1997008c.js";const p=document.querySelector("#drinkList");let k=document.querySelector("#teaTypeSelect"),v=document.querySelector("#ingredientsSelect"),o=[],f=[];const I=()=>{const t=o.map(a=>!a||!a.TeaType?"":a.Ingredients.length===0?`${a.TeaType}`:`${a.TeaType},${a.Ingredients}`),e=[];for(let a=0;a<t.length;a++)e.push(t[a].split(","));let n="",s=[];e.forEach(a=>{a.forEach((g,b)=>{n+=`<li class="drinks-tag">${g}</li>`,b===a.length-1&&(s.push(n),n="")}),f.push(s),s=[]})},S=()=>{let t="";o.forEach(e=>{t+=`
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
        `}),p.innerHTML=t},_=()=>{S(),L(o)};function N(){const t=document.querySelectorAll(".collect-btn");console.log(t),t.forEach(function(e){e.addEventListener("click",function(n){n.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):n.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid")),console.log("hi")})})}k.addEventListener("change",h);v.addEventListener("change",h);function h(){let t=o;k.value!==""&&(t=t.filter(e=>e.TeaType.includes(k.value))),v.value!==""&&(t=t.filter(e=>e.Ingredients.includes(v.value))),$(t),L(t),y(t)}function $(t){let e="";t.forEach(n=>{e+=`
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
                <a href="#" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
          </div>
      </li>
    `}),p.innerHTML=e}const y=t=>{const e=t.length,n=10,s=Math.ceil(e/n);let a=1;function g(r){const c=(r-1)*n,i=c+n,u=t.slice(c,i);b(u),D()}function b(r){p.innerHTML="";let c="";r.forEach(i=>{c+=`
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
                <a href="#" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
              </div>
          </li>
        `}),p.innerHTML=c}function D(){const r=document.getElementById("pagination");r.innerHTML="";let c="";for(let l=1;l<=s;l++)c+=`
      <li class="page-item mx-4 ${l===a?"active":""}">   
        <a class="page-link" href="#" data-page="${l}">${l}</a>
      </li>
    `;const i=a===1?"text-gray":"",u=a===s?"text-gray":"",P=a===1?"disabled":"",T=a===1?"disabled":"",w=a===s?"disabled":"",E=a===s?"disabled":"";r.innerHTML=`
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

    ${c}

    <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${w}">
      <a class="page-link ${u}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">chevron_right</span>
      </a>
    </li>

    <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${E}">
      <a class="page-link ${u}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
      </a>
    </li>`,document.querySelectorAll(".page-link").forEach(l=>{l.addEventListener("click",x=>{x.preventDefault();const B=parseInt(l.dataset.page);m(B)})});const d=[a];document.getElementById("previousPageBtn").addEventListener("click",l=>{l.preventDefault(),d[0]>1&&m(d[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",l=>{l.preventDefault(),d[0]!==s&&m(d[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",l=>{l.preventDefault(),d[0]>1&&m(1)}),document.getElementById("last-page-btn").addEventListener("click",l=>{l.preventDefault(),d[0]!==s&&m(s)})}function m(r){a=r,g(a),window.scrollTo(0,400)}g(a)},L=t=>{const e=document.querySelector("#searchDrinks"),n=()=>{let s=t.filter(a=>a.DrinkName.includes(e.value));$(s),y(s)};e.addEventListener("keydown",s=>{s.keyCode===13&&n()}),e.addEventListener("blur",s=>{n()})};axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(t=>{o=t.data,I(),_(),h(),y(o),N()}).catch(t=>{console.error("Error fetching data:",t)});
