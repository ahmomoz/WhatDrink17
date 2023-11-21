import"./bootstrap.min-141e3aaa.js";const g=document.querySelector("#storeList");let p=document.querySelector("#deliverySelect"),x=document.querySelector("#CooperationSelect"),c=[],m=[];const B=()=>{c.forEach(t=>{const e={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let a="";for(const l in e)t[l]&&(a+=`<li class="stores-tag">${e[l]}</li>`);m.push(a),a=""})},D=()=>{let t="";c.forEach(e=>{t+=`
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
                ${m[e.id-1]}
              </ul>
              <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),g.innerHTML=t},I=()=>{D(),E(c)};function S(){const t=document.querySelectorAll(".collect-btn");console.log(t),t.forEach(function(e){e.addEventListener("click",function(a){a.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):a.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid")),console.log("hi")})})}p.addEventListener("change",b);x.addEventListener("change",b);function b(){let t=c;p.value!==""&&(p.value==="uber eat"?t=t.filter(e=>e.uber):p.value==="food panda"&&(t=t.filter(e=>e.foodpanda))),x.value!==""&&(t=t.filter(e=>e.hasEvent)),k(t),E(t),v(c)}function k(t){let e="";t.forEach(a=>{e+=`
      <li class="stores-card">
      <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
        value="collected"></button>
      <img src="${a.logo}" class="mb-8" alt="store image">
      <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
        <div class="d-flex justify-content-between">
          <h5 class="mb-8 mb-md-12">${a.name}</h5>
          <ul class="d-flex text-primary">
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-regular fa-star"></i></li>
          </ul>
        </div>
        <p class="stores-card-content mb-16">
          ${a.Description}</p>
        <ul class="stores-tag-group mb-16">
          ${m[a.id-1]}
        </ul>
        <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
      </div>
    </li>
    `}),g.innerHTML=e}const v=t=>{const e=t.length,a=12,l=Math.ceil(e/a);let i=1;function h(n){const o=(n-1)*a,r=o+a,f=t.slice(o,r);L(f),P()}function L(n){g.innerHTML="";let o="";n.forEach(r=>{o+=`
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
              ${m[r.id-1]}
            </ul>
            <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
          </div>
        </li>
          `}),g.innerHTML=o}function P(){const n=document.getElementById("pagination");n.innerHTML="";let o="";for(let s=1;s<=l;s++)o+=`
        <li class="page-item mx-4 ${s===i?"active":""}">   
          <a class="page-link" href="#" data-page="${s}">${s}</a>
        </li>
      `;const r=i===1?"text-gray":"",f=i===l?"text-gray":"";n.innerHTML=`
      <li id="first-page-btn" class="page-item mx-4 d-none d-md-block">
        <a class="page-link ${r}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
        </a>
      </li>
  
      <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block">
        <a class="page-link ${r}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">chevron_left</span>
        </a>
      </li>
  
      ${o}
  
      <li id="next-page-btn" class="page-item mx-4 d-none d-md-block">
        <a class="page-link ${f}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>
  
      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block">
        <a class="page-link ${f}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
        </a>
      </li>`,document.querySelectorAll(".page-link").forEach(s=>{s.addEventListener("click",y=>{y.preventDefault();const $=parseInt(s.dataset.page);d($)})});const u=[i];document.getElementById("previousPageBtn").addEventListener("click",s=>{s.preventDefault(),u[0]>1&&d(u[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",s=>{s.preventDefault(),u[0]!==l&&d(u[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",s=>{s.preventDefault(),d(1)}),document.getElementById("last-page-btn").addEventListener("click",s=>{s.preventDefault(),d(l)})}function d(n){i=n,h(i),window.scrollTo({top:0,behavior:"smooth"})}h(i)},E=t=>{const e=document.querySelector("#searchStores");e.addEventListener("keydown",a=>{if(a.keyCode===13){let l=t;e.value!==""&&(l=l.filter(i=>i.name.includes(e.value))),k(l),v(l)}})};axios.get("https://json-server-project-wtkt.onrender.com/shops").then(t=>{c=t.data,B(),I(),b(),v(c),S()}).catch(t=>{console.error("Error fetching data:",t)});
