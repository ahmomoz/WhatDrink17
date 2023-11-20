import"./bootstrap.min-0bbeed66.js";const g=document.querySelector("#storeList");let p=document.querySelector("#deliverySelect"),y=document.querySelector("#CooperationSelect"),c=[],m=[];const P=()=>{c.forEach(a=>{const e={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let s="";for(const n in e)a[n]&&(s+=`<li class="stores-tag">${e[n]}</li>`);m.push(s),s=""})},$=()=>{let a="";c.forEach(e=>{a+=`
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
        `}),g.innerHTML=a},B=()=>{$()};function D(){const a=document.querySelectorAll(".collect-btn");console.log(a),a.forEach(function(e){e.addEventListener("click",function(s){s.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):s.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid")),console.log("hi")})})}p.addEventListener("change",b);y.addEventListener("change",b);function b(){let a=c;p.value!==""&&(p.value==="uber eat"?a=a.filter(e=>e.uber):p.value==="food panda"&&(a=a.filter(e=>e.foodpanda))),y.value!==""&&(a=a.filter(e=>e.hasEvent)),I(a),x(c)}function I(a){let e="";a.forEach(s=>{e+=`
      <li class="stores-card">
      <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
        value="collected"></button>
      <img src="${s.logo}" class="mb-8" alt="store image">
      <div class="stores-card-body px-16 pt-8 pb-24 px-md-24">
        <div class="d-flex justify-content-between">
          <h5 class="mb-8 mb-md-12">${s.name}</h5>
          <ul class="d-flex text-primary">
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-regular fa-star"></i></li>
          </ul>
        </div>
        <p class="stores-card-content mb-16">
          ${s.Description}</p>
        <ul class="stores-tag-group mb-16">
          ${m[s.id-1]}
        </ul>
        <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
      </div>
    </li>
    `}),g.innerHTML=e}const x=a=>{const e=a.length,s=10,n=Math.ceil(e/s);let o=1;function v(i){const r=(i-1)*s,l=r+s,f=a.slice(r,l);k(f),E()}function k(i){g.innerHTML="";let r="";i.forEach(l=>{r+=`
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
              ${m[l.id-1]}
            </ul>
            <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
          </div>
        </li>
          `}),g.innerHTML=r}function E(){const i=document.getElementById("pagination");i.innerHTML="";let r="";for(let t=1;t<=n;t++)r+=`
        <li class="page-item mx-4 ${t===o?"active":""}">   
          <a class="page-link" href="#" data-page="${t}">${t}</a>
        </li>
      `;const l=o===1?"text-gray":"",f=o===n?"text-gray":"";i.innerHTML=`
      <li id="first-page-btn" class="page-item mx-4 d-none d-md-block">
        <a class="page-link ${l}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
        </a>
      </li>
  
      <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block">
        <a class="page-link ${l}" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">chevron_left</span>
        </a>
      </li>
  
      ${r}
  
      <li id="next-page-btn" class="page-item mx-4 d-none d-md-block">
        <a class="page-link ${f}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>
  
      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block">
        <a class="page-link ${f}" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
        </a>
      </li>`,document.querySelectorAll(".page-link").forEach(t=>{t.addEventListener("click",h=>{h.preventDefault();const L=parseInt(t.dataset.page);d(L)})});const u=[o];document.getElementById("previousPageBtn").addEventListener("click",t=>{t.preventDefault(),u[0]>1&&d(u[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",t=>{t.preventDefault(),u[0]!==n&&d(u[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",t=>{t.preventDefault(),d(1)}),document.getElementById("last-page-btn").addEventListener("click",t=>{t.preventDefault(),d(n)})}function d(i){o=i,v(o),window.scrollTo({top:0,behavior:"smooth"})}v(o)};axios.get("https://json-server-project-wtkt.onrender.com/shops").then(a=>{c=a.data,P(),B(),b(),x(c),D()}).catch(a=>{console.error("Error fetching data:",a)});
