import"./bootstrap.min-78ccea25.js";const u=document.querySelector("#storeList");let p=document.querySelector("#deliverySelect"),x=document.querySelector("#CooperationSelect"),d=[],b=[];const w=()=>{d.forEach(a=>{const e={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let l="";for(const t in e)a[t]&&(l+=`<li class="stores-tag">${e[t]}</li>`);b.push(l),l=""})},T=()=>{let a="";d.forEach(e=>{a+=`
        <li class="stores-card">
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
                ${b[e.id-1]}
              </ul>
              <a href="stores-info.html?id=${e.id}" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),u.innerHTML=a},_=()=>{T(),P(d)};u.addEventListener("click",function(a){if(console.log(a.target),a.target.classList.contains("collect-btn")){const e=a.target;e.value==="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):e.value==="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid"))}});p.addEventListener("change",m);x.addEventListener("change",m);function m(){let a=d;p.value!==""&&(p.value==="uber eat"?a=a.filter(e=>e.uber):p.value==="food panda"&&(a=a.filter(e=>e.foodpanda))),x.value!==""&&(a=a.filter(e=>e.hasEvent)),$(a),P(a),v(a)}function $(a){let e="";a.forEach(l=>{e+=`
      <li class="stores-card">
      <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
        value="collected"></button>
      <img src="${l.logo}" class="mb-8" alt="store image">
      <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
        <div class="d-flex justify-content-between">
          <h5 class="mb-8 mb-md-12">${l.name}</h5>
          <ul class="d-flex text-primary">
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-regular fa-star"></i></li>
          </ul>
        </div>
        <p class="stores-card-content mb-16">
          ${l.Description}</p>
        <ul class="stores-tag-group mb-16">
          ${b[l.id-1]}
        </ul>
        <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
      </div>
    </li>
    `}),u.innerHTML=e}const v=a=>{const e=a.length,l=12,t=Math.ceil(e/l);let i=1;function h(n){const o=(n-1)*l,r=o+l,g=a.slice(o,r);k(g),L()}function k(n){u.innerHTML="";let o="";n.forEach(r=>{o+=`
          <li class="stores-card">
          <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
            value="collected"></button>
          <img src="${r.logo}" class="mb-8" alt="store image">
          <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
            <div class="d-flex justify-content-between">
              <h5 class="mb-8 mb-md-12">${r.name}</h5>
              <ul class="d-flex text-primary">
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
              </ul>
            </div>
            <p class="stores-card-content mb-16">
              ${r.Description}</p>
            <ul class="stores-tag-group mb-16">
              ${b[r.id-1]}
            </ul>
            <a href="stores-info.html?id=${r.id}" class="stores-card-btn">查看店家資訊</a>
          </div>
        </li>
          `}),u.innerHTML=o}function L(){const n=document.getElementById("pagination");n.innerHTML="";let o="";for(let s=1;s<=t;s++)o+=`
        <li class="page-item mx-4 ${s===i?"active":""}">   
          <a class="page-link" href="#" data-page="${s}">${s}</a>
        </li>
      `;const r=i===1?"text-gray":"",g=i===t?"text-gray":"",E=i===1?"disabled":"",D=i===1?"disabled":"",B=i===t?"disabled":"",I=i===t?"disabled":"";n.innerHTML=`
      <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${E}">
        <a class="page-link ${r}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
        </a>
      </li>
  
      <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${D}">
        <a class="page-link ${r}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">chevron_left</span>
        </a>
      </li>
  
      ${o}
  
      <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${B}">
        <a class="page-link ${g}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>
  
      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${I}">
        <a class="page-link ${g}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
        </a>
      </li>`,document.querySelectorAll(".page-link").forEach(s=>{s.addEventListener("click",y=>{y.preventDefault();const S=parseInt(s.dataset.page);f(S)})});const c=[i];document.getElementById("previousPageBtn").addEventListener("click",s=>{s.preventDefault(),c[0]>1&&f(c[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",s=>{s.preventDefault(),c[0]!==t&&f(c[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",s=>{s.preventDefault(),c[0]>1&&f(1)}),document.getElementById("last-page-btn").addEventListener("click",s=>{s.preventDefault(),c[0]!==t&&f(t)})}function f(n){i=n,h(i),window.scrollTo(0,400)}h(i)},P=a=>{const e=document.querySelector("#searchStores"),l=()=>{let t=a;e.value!==""&&(t=t.filter(i=>i.name.includes(e.value))),$(t),v(t)};e.addEventListener("keydown",t=>{t.keyCode===13&&l()})};axios.get("https://json-server-project-wtkt.onrender.com/shops").then(a=>{d=a.data,w(),_(),m(),v(d)}).catch(a=>{console.error("Error fetching data:",a)});
