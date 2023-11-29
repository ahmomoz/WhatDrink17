import"./bootstrap.min-66c8f441.js";const p=document.querySelector("#drinkList");let v=document.querySelector("#teaTypeSelect"),y=document.querySelector("#ingredientsSelect"),L=[],u=[],k=[];const b=sessionStorage.getItem("user_id"),C=()=>{const a=u.map(t=>!t||!t.TeaType?"":t.Ingredients.length===0?`${t.TeaType}`:`${t.TeaType},${t.Ingredients}`),e=[];for(let t=0;t<a.length;t++)e.push(a[t].split(","));let n="",s=[];e.forEach(t=>{t.forEach((m,o)=>{n+=`<li class="drinks-tag">${m}</li>`,o===t.length-1&&(s.push(n),n="")}),k.push(s),s=[]})},_=()=>{let a="";u.forEach(e=>{a+=`
          <li class="drinks-card px-16 py-24 px-md-24" data-drink-id="${e.id}">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${e.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${e.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${k[e.id-1]}
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
        `}),p.innerHTML=a},N=()=>{_(),E(u)},h=()=>{const a=e=>document.querySelector(`.drinks-card[data-drink-id="${e}"] .collect-btn`);L.forEach(e=>{const n=a(e.drinkId);n&&(n.value="collected",n.classList.remove("fa-regular"),n.classList.add("fa-solid"))})};p.addEventListener("click",function(a){const e=a.target.closest(".collect-btn");if(e){if(!b)console.log("無權限: 沒有找到 Token"),M();else if(a.target.classList.contains("collect-btn")){const s=e.closest(".drinks-card").dataset.drinkId;console.log(s);const t="https://json-server-project-wtkt.onrender.com/userDrinkCollections",m=`${t}?userId=${b}&drinkId=${s}`;axios.get(m).then(o=>{if(o.data.length>0){console.log("已收藏改未收藏"),e.value="uncollect",e.classList.remove("fa-solid"),e.classList.add("fa-regular"),axios.delete(`${t}/${o.data[0].id}`).then(r=>{console.log("收藏已刪除",r),alert("已取消收藏")}).catch(r=>{console.error("Error deleting collection:",r)});return}else console.log("未收藏改已收藏"),e.value="collected",e.classList.remove("fa-regular"),e.classList.add("fa-solid");axios.post(t,{userId:parseInt(b),drinkId:parseInt(s)}).then(r=>{console.log("收藏已新增",r),alert("已新增收藏")}).catch(r=>{console.error("Error adding collection:",r)})}).catch(o=>{console.error("Error checking collection status:",o)})}}});function M(){alert("登入後即可使用收藏功能"),window.location.href="logIn.html"}v.addEventListener("change",x);y.addEventListener("change",x);function x(){let a=u;v.value!==""&&(a=a.filter(e=>e.TeaType.includes(v.value))),y.value!==""&&(a=a.filter(e=>e.Ingredients.includes(y.value))),w(a),E(a),$(a),h()}function w(a){let e="";a.forEach(n=>{e+=`
      <li class="drinks-card px-16 py-24 px-md-24" data-drink-id="${n.id}">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
          value="collected"></button>
        <img src="${n.ImageLink}" alt="drink image">
        <div class="w-100 d-flex flex-column justify-content-between">
          <div class="drinks-card-body ms-16">
            <h4 class="mb-8 mb-md-12">${n.DrinkName}</h4>
            <ul class="drinks-tag-group mb-8 mb-md-12">
              ${k[n.id-1]}
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
    `}),p.innerHTML=e}const $=a=>{const e=a.length,n=10,s=Math.ceil(e/n);let t=1;function m(c){const d=(c-1)*n,i=d+n,f=a.slice(d,i);o(f),I(),h()}function o(c){p.innerHTML="";let d="";c.forEach(i=>{d+=`
          <li class="drinks-card px-16 py-24 px-md-24" data-drink-id="${i.id}">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${i.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${i.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${k[i.id-1]}
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
        `}),p.innerHTML=d}function I(){const c=document.getElementById("pagination");c.innerHTML="";let d="";for(let l=1;l<=s;l++)d+=`
      <li class="page-item mx-4 ${l===t?"active":""}">   
        <a class="page-link" href="#" data-page="${l}">${l}</a>
      </li>
    `;const i=t===1?"text-gray":"",f=t===s?"text-gray":"",T=t===1?"disabled":"",P=t===1?"disabled":"",S=t===s?"disabled":"",B=t===s?"disabled":"";c.innerHTML=`
    <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${T}">
      <a class="page-link ${i}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
      </a>
    </li>

    <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${P}">
      <a class="page-link ${i}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">chevron_left</span>
      </a>
    </li>

    ${d}

    <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${S}">
      <a class="page-link ${f}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">chevron_right</span>
      </a>
    </li>

    <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${B}">
      <a class="page-link ${f}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
      </a>
    </li>`,document.querySelectorAll(".page-link").forEach(l=>{l.addEventListener("click",D=>{D.preventDefault();const j=parseInt(l.dataset.page);r(j)})});const g=[t];document.getElementById("previousPageBtn").addEventListener("click",l=>{l.preventDefault(),g[0]>1&&r(g[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",l=>{l.preventDefault(),g[0]!==s&&r(g[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",l=>{l.preventDefault(),g[0]>1&&r(1)}),document.getElementById("last-page-btn").addEventListener("click",l=>{l.preventDefault(),g[0]!==s&&r(s)})}function r(c){t=c,m(t),window.scrollTo(0,400)}m(t)},E=a=>{const e=document.querySelector("#searchDrinks"),n=()=>{let s=a.filter(t=>t.DrinkName.includes(e.value));w(s),$(s),h()};e.addEventListener("keyup",s=>{s.keyCode===13&&n()})};Promise.all([axios.get(`https://json-server-project-wtkt.onrender.com/userDrinkCollections?userId=${b}`),axios.get("https://json-server-project-wtkt.onrender.com/drinks")]).then(a=>{L=a[0].data,u=a[1].data,C(),N(),x(),$(u),h()}).catch(a=>{console.error("Error fetching data:",a)});
