import"./bootstrap.min-faf78b7c.js";const p=document.querySelector("#searchDrinkList"),$=document.querySelector("#searchBreadcrumb");let y=document.querySelector("#teaTypeSelect"),x=document.querySelector("#ingredientsSelect"),T=[],m=[],b=[];const h=sessionStorage.getItem("user_id"),_=()=>{const t=m.map(a=>!a||!a.TeaType?"":a.Ingredients.length===0?`${a.TeaType}`:`${a.TeaType},${a.Ingredients}`),e=[];for(let a=0;a<t.length;a++)e.push(t[a].split(","));let n="",s=[];e.forEach(a=>{a.forEach((g,c)=>{n+=`<li class="drinks-tag">${g}</li>`,c===a.length-1&&(s.push(n),n="")}),b.push(s),s=[]})},N=()=>{let t="";m.forEach(e=>{t+=`
          <li class="drinks-card px-16 py-24 px-md-24" data-drink-id="${e.id}">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${e.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${e.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${b[e.id-1]}
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
        `}),p.innerHTML=t},q=()=>{N(),E(m)},k=()=>{const t=e=>document.querySelector(`.drinks-card[data-drink-id="${e}"] .collect-btn`);T.forEach(e=>{const n=t(e.drinkId);n&&(n.value="collected",n.classList.remove("fa-regular"),n.classList.add("fa-solid"))})};p.addEventListener("click",function(t){const e=t.target.closest(".collect-btn");if(e){if(!h)console.log("無權限: 沒有找到 Token"),M();else if(t.target.classList.contains("collect-btn")){const s=e.closest(".drinks-card").dataset.drinkId;console.log(s);const a="https://json-server-project-wtkt.onrender.com/userDrinkCollections",g=`${a}?userId=${h}&drinkId=${s}`;axios.get(g).then(c=>{if(c.data.length>0){e.value="uncollect",e.classList.remove("fa-solid"),e.classList.add("fa-regular"),axios.delete(`${a}/${c.data[0].id}`).then(i=>{Swal.fire("已取消收藏")}).catch(i=>{console.error("Error deleting collection:",i)});return}else e.value="collected",e.classList.remove("fa-regular"),e.classList.add("fa-solid");axios.post(a,{userId:parseInt(h),drinkId:parseInt(s)}).then(i=>{Swal.fire("收藏成功")}).catch(i=>{console.error("Error adding collection:",i)})}).catch(c=>{console.error("Error checking collection status:",c)})}}});function M(){alert("登入後即可使用收藏功能"),window.location.href="logIn.html"}y.addEventListener("change",D);x.addEventListener("change",D);function D(){let t=m;y.value!==""&&(t=t.filter(e=>e.TeaType.includes(y.value))),x.value!==""&&(t=t.filter(e=>e.Ingredients.includes(x.value))),I(t),E(t),v(t),$.textContent="搜尋結果",k()}function I(t){let e="";t.forEach(n=>{e+=`
      <li class="drinks-card px-16 py-24 px-md-24" data-drink-id="${n.id}">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
          value="collected"></button>
        <img src="${n.ImageLink}" alt="drink image">
        <div class="w-100 d-flex flex-column justify-content-between">
          <div class="drinks-card-body ms-16">
            <h4 class="mb-8 mb-md-12">${n.DrinkName}</h4>
            <ul class="drinks-tag-group mb-8 mb-md-12">
              ${b[n.id-1]}
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
    `}),p.innerHTML=e}const v=t=>{const e=t.length,n=10,s=Math.ceil(e/n);let a=1;function g(o){const d=(o-1)*n,l=d+n,f=t.slice(d,l);c(f),L(),k()}function c(o){p.innerHTML="";let d="";o.forEach(l=>{d+=`
          <li class="drinks-card px-16 py-24 px-md-24" data-drink-id="${l.id}">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${l.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${l.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${b[l.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${l.Description}</p>
              </div>
              <div class="d-flex justify-content-between align-items-end ms-16">
                <div class="d-flex align-items-center drinkStoreTag">
                  <img src="https://raw.githubusercontent.com/ahmomoz/WhatDrink17/main/assets/images/tri.svg" class="tri" alt="">
                  <p class="bg-primary rounded-2 fw-medium text-white ps-12 pe-10 py-4">${l.StoreName}</p>
                </div>
                <a href="stores-info.html?id=${l.ShopID}" class="d-block text-primary text-end"><span
                    class="material-symbols-outlined me-2 align-middle">
                    location_on
                  </span>搜尋店家</a>
              </div>
          </li>
        `}),p.innerHTML=d}function L(){const o=document.getElementById("pagination");o.innerHTML="";let d="";for(let r=1;r<=s;r++)d+=`
      <li class="page-item mx-4 ${r===a?"active":""}">   
        <a class="page-link" href="#" data-page="${r}">${r}</a>
      </li>
    `;const l=a===1?"text-gray":"",f=a===s?"text-gray":"",S=a===1?"disabled":"",P=a===1?"disabled":"",B=a===s?"disabled":"",C=a===s?"disabled":"";o.innerHTML=`
    <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${S}">
      <a class="page-link ${l}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
      </a>
    </li>

    <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${P}">
      <a class="page-link ${l}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">chevron_left</span>
      </a>
    </li>

    ${d}

    <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${B}">
      <a class="page-link ${f}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">chevron_right</span>
      </a>
    </li>

    <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${C}">
      <a class="page-link ${f}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
      </a>
    </li>`,document.querySelectorAll(".page-link").forEach(r=>{r.addEventListener("click",w=>{w.preventDefault();const j=parseInt(r.dataset.page);i(j)})});const u=[a];document.getElementById("previousPageBtn").addEventListener("click",r=>{r.preventDefault(),u[0]>1&&i(u[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",r=>{r.preventDefault(),u[0]!==s&&i(u[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",r=>{r.preventDefault(),u[0]>1&&i(1)}),document.getElementById("last-page-btn").addEventListener("click",r=>{r.preventDefault(),u[0]!==s&&i(s)})}function i(o){a=o,g(a),window.scrollTo(0,400)}g(a)},E=t=>{const e=document.querySelector("#searchDrinks"),n=()=>{let s=t.filter(a=>a.DrinkName.includes(e.value));I(s),v(s),$.textContent="搜尋結果",k()};e.addEventListener("keyup",s=>{s.keyCode===13&&n()})};function H(t){let e=localStorage.getItem("searchTerm");if(e){$.textContent=e;let n=t.filter(s=>s.DrinkName.includes(e));I(n),v(n)}}Promise.all([axios.get(`https://json-server-project-wtkt.onrender.com/userDrinkCollections?userId=${h}`),axios.get("https://json-server-project-wtkt.onrender.com/drinks")]).then(t=>{T=t[0].data,m=t[1].data,_(),q(),D(),v(m),H(m),k()}).catch(t=>{console.error("Error fetching data:",t)});
