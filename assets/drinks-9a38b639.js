import"./bootstrap.min-141e3aaa.js";const p=document.querySelector("#drinkList");let v=document.querySelector("#teaTypeSelect"),h=document.querySelector("#ingredientsSelect"),d=[],f=[];const E=()=>{const t=d.map(a=>!a||!a.TeaType?"":a.Ingredients.length===0?`${a.TeaType}`:`${a.TeaType},${a.Ingredients}`),e=[];for(let a=0;a<t.length;a++)e.push(t[a].split(","));let n="",l=[];e.forEach(a=>{a.forEach((m,b)=>{n+=`<li class="drinks-tag">${m}</li>`,b===a.length-1&&(l.push(n),n="")}),f.push(l),l=[]})},T=()=>{let t="";d.forEach(e=>{t+=`
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
                <div class="d-flex align-items-center">
                  <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                  <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${e.StoreName}</p>
                </div>
                <a href="#" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
              </div>
          </li>
        `}),p.innerHTML=t},P=()=>{T(),L(d)};function B(){const t=document.querySelectorAll(".collect-btn");console.log(t),t.forEach(function(e){e.addEventListener("click",function(n){n.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):n.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid")),console.log("hi")})})}v.addEventListener("change",k);h.addEventListener("change",k);function k(){let t=d;v.value!==""&&(t=t.filter(e=>e.TeaType.includes(v.value))),h.value!==""&&(t=t.filter(e=>e.Ingredients.includes(h.value))),$(t),L(t),y(t)}function $(t){let e="";t.forEach(n=>{e+=`
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
                <div class="d-flex align-items-center">
                  <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                  <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${n.StoreName}</p>
                </div>
                <a href="#" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
          </div>
      </li>
    `}),p.innerHTML=e}const y=t=>{const e=t.length,n=10,l=Math.ceil(e/n);let a=1;function m(r){const c=(r-1)*n,i=c+n,u=t.slice(c,i);b(u),w()}function b(r){p.innerHTML="";let c="";r.forEach(i=>{c+=`
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
                <div class="d-flex align-items-center">
                  <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                  <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${i.StoreName}</p>
                </div>
                <a href="#" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
              </div>
          </li>
        `}),p.innerHTML=c}function w(){const r=document.getElementById("pagination");r.innerHTML="";let c="";for(let s=1;s<=l;s++)c+=`
      <li class="page-item mx-4 ${s===a?"active":""}">   
        <a class="page-link" href="#" data-page="${s}">${s}</a>
      </li>
    `;const i=a===1?"text-gray":"",u=a===l?"text-gray":"";r.innerHTML=`
    <li id="first-page-btn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link ${i}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
      </a>
    </li>

    <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link ${i}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">chevron_left</span>
      </a>
    </li>

    ${c}

    <li id="next-page-btn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link ${u}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">chevron_right</span>
      </a>
    </li>

    <li id="last-page-btn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link ${u}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
      </a>
    </li>`,document.querySelectorAll(".page-link").forEach(s=>{s.addEventListener("click",x=>{x.preventDefault();const D=parseInt(s.dataset.page);o(D)})});const g=[a];document.getElementById("previousPageBtn").addEventListener("click",s=>{s.preventDefault(),g[0]>1&&o(g[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",s=>{s.preventDefault(),g[0]!==l&&o(g[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",s=>{s.preventDefault(),o(1)}),document.getElementById("last-page-btn").addEventListener("click",s=>{s.preventDefault(),o(l)})}function o(r){a=r,m(a),window.scrollTo({top:0,behavior:"smooth"})}m(a)},L=t=>{const e=document.querySelector("#searchDrinks");e.addEventListener("keydown",n=>{if(n.keyCode===13){let l=t;e.value!==""&&(l=l.filter(a=>a.DrinkName.includes(e.value))),$(l),y(l)}})};axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(t=>{d=t.data,E(),P(),k(),y(d),B()}).catch(t=>{console.error("Error fetching data:",t)});
