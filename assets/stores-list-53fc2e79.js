import"./bootstrap.min-141e3aaa.js";const p=document.querySelector("#storeList");let g=document.querySelector("#deliverySelect"),x=document.querySelector("#CooperationSelect"),d=[],b=[];const w=()=>{d.forEach(a=>{const e={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let t="";for(const s in e)a[s]&&(t+=`<li class="stores-tag">${e[s]}</li>`);b.push(t),t=""})},T=()=>{let a="";d.forEach(e=>{a+=`
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
              <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),p.innerHTML=a},_=()=>{T(),$(d)};function C(){const a=document.querySelectorAll(".collect-btn");console.log(a),a.forEach(function(e){e.addEventListener("click",function(t){t.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):t.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid")),console.log("hi")})})}g.addEventListener("change",m);x.addEventListener("change",m);function m(){let a=d;g.value!==""&&(g.value==="uber eat"?a=a.filter(e=>e.uber):g.value==="food panda"&&(a=a.filter(e=>e.foodpanda))),x.value!==""&&(a=a.filter(e=>e.hasEvent)),P(a),$(a),v(a)}function P(a){let e="";a.forEach(t=>{e+=`
      <li class="stores-card">
      <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
        value="collected"></button>
      <img src="${t.logo}" class="mb-8" alt="store image">
      <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
        <div class="d-flex justify-content-between">
          <h5 class="mb-8 mb-md-12">${t.name}</h5>
          <ul class="d-flex text-primary">
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-regular fa-star"></i></li>
          </ul>
        </div>
        <p class="stores-card-content mb-16">
          ${t.Description}</p>
        <ul class="stores-tag-group mb-16">
          ${b[t.id-1]}
        </ul>
        <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
      </div>
    </li>
    `}),p.innerHTML=e}const v=a=>{const e=a.length,t=12,s=Math.ceil(e/t);let i=1;function h(r){const o=(r-1)*t,n=o+t,u=a.slice(o,n);k(u),E()}function k(r){p.innerHTML="";let o="";r.forEach(n=>{o+=`
          <li class="stores-card">
          <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
            value="collected"></button>
          <img src="${n.logo}" class="mb-8" alt="store image">
          <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
            <div class="d-flex justify-content-between">
              <h5 class="mb-8 mb-md-12">${n.name}</h5>
              <ul class="d-flex text-primary">
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
              </ul>
            </div>
            <p class="stores-card-content mb-16">
              ${n.Description}</p>
            <ul class="stores-tag-group mb-16">
              ${b[n.id-1]}
            </ul>
            <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
          </div>
        </li>
          `}),p.innerHTML=o}function E(){const r=document.getElementById("pagination");r.innerHTML="";let o="";for(let l=1;l<=s;l++)o+=`
        <li class="page-item mx-4 ${l===i?"active":""}">   
          <a class="page-link" href="#" data-page="${l}">${l}</a>
        </li>
      `;const n=i===1?"text-gray":"",u=i===s?"text-gray":"",L=i===1?"disabled":"",B=i===1?"disabled":"",D=i===s?"disabled":"",S=i===s?"disabled":"";r.innerHTML=`
      <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${L}">
        <a class="page-link ${n}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
        </a>
      </li>
  
      <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${B}">
        <a class="page-link ${n}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">chevron_left</span>
        </a>
      </li>
  
      ${o}
  
      <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${D}">
        <a class="page-link ${u}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>
  
      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${S}">
        <a class="page-link ${u}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
        </a>
      </li>`,document.querySelectorAll(".page-link").forEach(l=>{l.addEventListener("click",y=>{y.preventDefault();const I=parseInt(l.dataset.page);f(I)})});const c=[i];document.getElementById("previousPageBtn").addEventListener("click",l=>{l.preventDefault(),c[0]>1&&f(c[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",l=>{l.preventDefault(),c[0]!==s&&f(c[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",l=>{l.preventDefault(),c[0]>1&&f(1)}),document.getElementById("last-page-btn").addEventListener("click",l=>{l.preventDefault(),c[0]!==s&&f(s)})}function f(r){i=r,h(i),window.scrollTo(0,400)}h(i)},$=a=>{const e=document.querySelector("#searchStores"),t=()=>{let s=a;e.value!==""&&(s=s.filter(i=>i.name.includes(e.value))),P(s),v(s)};e.addEventListener("keydown",s=>{s.keyCode===13&&t()}),e.addEventListener("blur",s=>{t()})};axios.get("https://json-server-project-wtkt.onrender.com/shops").then(a=>{d=a.data,w(),_(),m(),v(d),C()}).catch(a=>{console.error("Error fetching data:",a)});
