import"./bootstrap.min-362bd10f.js";const u=document.querySelector("#storeList");let f=document.querySelector("#deliverySelect"),v=document.querySelector("#CooperationSelect"),d=[],p=[];const k=()=>{d.forEach(t=>{const e={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let a="";for(const n in e)t[n]&&(a+=`<li class="stores-tag">${e[n]}</li>`);p.push(a),a=""})},E=()=>{let t="";d.forEach(e=>{t+=`
        <li id="storeListItem" class="stores-card px-16 py-24 mb-40 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
            <img src="${e.logo}">
            <div class="stores-card-body">
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
                ${p[e.id-1]}
              </ul>
              <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),u.innerHTML=t},P=()=>{E()};function B(){const t=document.querySelectorAll(".collect-btn");console.log(t),t.forEach(function(e){e.addEventListener("click",function(a){a.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):a.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid")),console.log("hi")})})}f.addEventListener("change",g);v.addEventListener("change",g);function g(){let t=d;f.value!==""&&(f.value==="uber eat"?t=t.filter(e=>e.uber):f.value==="food panda"&&(t=t.filter(e=>e.foodpanda))),v.value!==""&&(t=t.filter(e=>e.hasEvent)),$(t)}function $(t){let e="";t.forEach(a=>{e+=`
      <li id="storeListItem" class="stores-card px-16 py-24 mb-40 px-md-24">
      <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
      <img src="${a.logo}">
      <div class="stores-card-body">
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
          ${p[a.id-1]}
        </ul>
        <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
      </div>
    </li>
    `}),u.innerHTML=e}const D=t=>{const e=t.length,a=10,n=Math.ceil(e/a);let o=1;function m(l){const i=(l-1)*a,r=i+a,b=t.slice(i,r);h(b),y()}function h(l){u.innerHTML="";let i="";l.forEach(r=>{i+=`
          <li id="storeListItem" class="stores-card px-16 py-24 mb-40 px-md-24">
          <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
          <img src="${r.logo}">
          <div class="stores-card-body">
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
              ${p[r.id-1]}
            </ul>
            <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
          </div>
        </li>
          `}),u.innerHTML=i}function y(){const l=document.getElementById("pagination");l.innerHTML="";let i="";for(let s=1;s<=n;s++)i+=`
      <li class="page-item mx-4"><a class="page-link" href="#" data-page="${s}">${s}</a></li>
      `;l.innerHTML=`
      <li id="first-page-btn" class="page-item mx-4 d-none d-md-block">
        <a class="page-link" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
        </a>
      </li>
  
      <li id="previous-page-btn" class="page-item mx-4 d-none d-md-block">
        <a class="page-link" href="#" aria-label="Previous">
          <span class="material-symbols-outlined align-middle">chevron_left</span>
        </a>
      </li>
  
      ${i}
  
      <li id="next-page-btn" class="page-item mx-4 d-none d-md-block">
        <a class="page-link" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>
  
      <li id="last-page-btn" class="page-item mx-4 d-none d-md-block">
        <a class="page-link" href="#" aria-label="Next">
          <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
        </a>
      </li>`,document.querySelectorAll(".page-link").forEach(s=>{s.addEventListener("click",x=>{x.preventDefault();const L=parseInt(s.dataset.page);c(L)})}),document.getElementById("previous-page-btn").addEventListener("click",s=>{s.preventDefault(),c(o-1)}),document.getElementById("next-page-btn").addEventListener("click",s=>{s.preventDefault(),c(o+1)}),document.getElementById("first-page-btn").addEventListener("click",s=>{s.preventDefault(),c(1)}),document.getElementById("last-page-btn").addEventListener("click",s=>{s.preventDefault(),c(n)})}function c(l){o=l,m(o)}m(o)};axios.get("https://json-server-project-wtkt.onrender.com/shops").then(t=>{d=t.data,k(),P(),g(),B(),D(d)}).catch(t=>{console.error("Error fetching data:",t)});
