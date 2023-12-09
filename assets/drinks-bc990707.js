import"./bootstrap.min-feac71ab.js";import{c as N,e as j}from"./api-0e668cc2.js";import{A as I}from"./config-ca05e4f1.js";const p=document.querySelector("#drinkList");let v=document.querySelector("#teaTypeSelect"),y=document.querySelector("#ingredientsSelect"),L=[],m=[],k=[];const u=sessionStorage.getItem("user_id"),A=()=>{const t=m.map(a=>!a||!a.TeaType?"":a.Ingredients.length===0?`${a.TeaType}`:`${a.TeaType},${a.Ingredients}`),e=[];for(let a=0;a<t.length;a++)e.push(t[a].split(","));let s="",n=[];e.forEach(a=>{a.forEach((r,f)=>{s+=`<li class="drinks-tag">${r}</li>`,f===a.length-1&&(n.push(s),s="")}),k.push(n),n=[]})},M=()=>{let t="";m.forEach(e=>{t+=`
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
        `}),p.innerHTML=t},q=()=>{M(),P(m)},h=()=>{const t=e=>document.querySelector(`.drinks-card[data-drink-id="${e}"] .collect-btn`);L.forEach(e=>{const s=t(e.drinkId);s&&(s.value="collected",s.classList.remove("fa-regular"),s.classList.add("fa-solid"))})};p.addEventListener("click",function(t){const e=t.target.closest(".collect-btn");if(e){if(!u)H();else if(t.target.classList.contains("collect-btn")){const n=e.closest(".drinks-card").dataset.drinkId,a=`${I}/userDrinkCollections?userId=${u}&drinkId=${n}`;axios.get(a).then(r=>{if(r.data.length>0){N(u,n),e.value="uncollect",e.classList.remove("fa-solid"),e.classList.add("fa-regular"),Swal.fire("已取消收藏");return}else j(u,n),e.value="collected",e.classList.remove("fa-regular"),e.classList.add("fa-solid"),Swal.fire("收藏成功")}).catch(r=>{console.error("Error checking collection status:",r)})}}});function H(){Swal.fire("登入後即可使用收藏功能"),window.location.href="logIn.html"}v.addEventListener("change",x);y.addEventListener("change",x);function x(){let t=m;v.value!==""&&(t=t.filter(e=>e.TeaType.includes(v.value))),y.value!==""&&(t=t.filter(e=>e.Ingredients.includes(y.value))),w(t),P(t),$(t),h()}function w(t){let e="";t.forEach(s=>{e+=`
      <li class="drinks-card px-16 py-24 px-md-24" data-drink-id="${s.id}">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
          value="collected"></button>
        <img src="${s.ImageLink}" alt="drink image">
        <div class="w-100 d-flex flex-column justify-content-between">
          <div class="drinks-card-body ms-16">
            <h4 class="mb-8 mb-md-12">${s.DrinkName}</h4>
            <ul class="drinks-tag-group mb-8 mb-md-12">
              ${k[s.id-1]}
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
    `}),p.innerHTML=e}const $=t=>{const e=t.length,s=10,n=Math.ceil(e/s);let a=1;function r(d){const c=(d-1)*s,l=c+s,b=t.slice(c,l);f(b),E(),h()}function f(d){p.innerHTML="";let c="";d.forEach(l=>{c+=`
          <li class="drinks-card px-16 py-24 px-md-24" data-drink-id="${l.id}">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${l.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${l.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${k[l.id-1]}
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
        `}),p.innerHTML=c}function E(){const d=document.getElementById("pagination");d.innerHTML="";let c="";for(let i=1;i<=n;i++)c+=`
      <li class="page-item mx-4 ${i===a?"active":""}">   
        <a class="page-link" href="#" data-page="${i}">${i}</a>
      </li>
    `;const l=a===1?"text-gray":"",b=a===n?"text-gray":"",S=a===1?"disabled":"",T=a===1?"disabled":"",B=a===n?"disabled":"",_=a===n?"disabled":"";d.innerHTML=`
    <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${S}">
      <a class="page-link ${l}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
      </a>
    </li>

    <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${T}">
      <a class="page-link ${l}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">chevron_left</span>
      </a>
    </li>

    ${c}

    <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${B}">
      <a class="page-link ${b}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">chevron_right</span>
      </a>
    </li>

    <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${_}">
      <a class="page-link ${b}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
      </a>
    </li>`,document.querySelectorAll(".page-link").forEach(i=>{i.addEventListener("click",D=>{D.preventDefault();const C=parseInt(i.dataset.page);g(C)})});const o=[a];document.getElementById("previousPageBtn").addEventListener("click",i=>{i.preventDefault(),o[0]>1&&g(o[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",i=>{i.preventDefault(),o[0]!==n&&g(o[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",i=>{i.preventDefault(),o[0]>1&&g(1)}),document.getElementById("last-page-btn").addEventListener("click",i=>{i.preventDefault(),o[0]!==n&&g(n)})}function g(d){a=d,r(a),window.scrollTo(0,400)}r(a)},P=t=>{const e=document.querySelector("#searchDrinks"),s=()=>{let n=t.filter(a=>a.DrinkName.includes(e.value));w(n),$(n),h()};e.addEventListener("keyup",n=>{n.keyCode===13&&s()})};Promise.all([axios.get(`${I}/userDrinkCollections?userId=${u}`),axios.get("https://json-server-project-wtkt.onrender.com/drinks")]).then(t=>{L=t[0].data,m=t[1].data,A(),q(),x(),$(m),h()}).catch(t=>{console.error("Error fetching data:",t)});
