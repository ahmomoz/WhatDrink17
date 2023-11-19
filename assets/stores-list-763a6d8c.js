import"./bootstrap.min-0eea227d.js";const i=document.querySelector("#storeList");let a=document.querySelector("#deliverySelect"),n=document.querySelector("#CooperationSelect"),l=[],r=[];const d=()=>{l.forEach(e=>{const s={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let t="";for(const c in s)e[c]&&(t+=`<li class="stores-tag">${s[c]}</li>`);r.push(t),t=""})},f=()=>{let e="";l.forEach(s=>{e+=`
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
                ${r[s.id-1]}
              </ul>
              <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),i.innerHTML=e},u=()=>{f()};function p(){const e=document.querySelectorAll(".collect-btn");console.log(e),e.forEach(function(s){s.addEventListener("click",function(t){t.target.value=="collected"?(s.value="uncollect",s.classList.remove("fa-regular"),s.classList.add("fa-solid")):t.target.value=="uncollect"&&(s.value="collected",s.classList.add("fa-regular"),s.classList.remove("fa-solid")),console.log("hi")})})}a.addEventListener("change",o);n.addEventListener("change",o);function o(){let e=l;a.value!==""&&(a.value==="uber eat"?e=e.filter(s=>s.uber):a.value==="food panda"&&(e=e.filter(s=>s.foodpanda))),n.value!==""&&(e=e.filter(s=>s.hasEvent)),b(e)}function b(e){let s="";e.forEach(t=>{s+=`
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
          ${r[t.id-1]}
        </ul>
        <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
      </div>
    </li>
    `}),i.innerHTML=s}axios.get("https://json-server-project-wtkt.onrender.com/shops").then(e=>{l=e.data,d(),u(),o(),p()}).catch(e=>{console.error("Error fetching data:",e)});
