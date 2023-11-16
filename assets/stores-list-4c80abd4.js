import"./bootstrap.min-33c36378.js";const c=document.querySelector("#storeList");let l=document.querySelector("#deliverySelect"),n=document.querySelector("#CooperationSelect"),a=[],r=[];const d=()=>{a.forEach(e=>{const s={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let t="";for(const i in s)e[i]&&(t+=`<li class="stores-tag">${s[i]}</li>`);r.push(t),t=""})},f=()=>{let e="";a.forEach(s=>{e+=`
        <li id="storeListItem" class="stores-card px-16 py-24 mb-40 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
            <img src="${s.logo}">
            <div class="stores-card-body">
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
        `}),c.innerHTML=e},u=()=>{f()};function p(){const e=document.querySelectorAll(".collect-btn");console.log(e),e.forEach(function(s){s.addEventListener("click",function(t){t.target.value=="collected"?(s.value="uncollect",s.classList.remove("fa-regular"),s.classList.add("fa-solid")):t.target.value=="uncollect"&&(s.value="collected",s.classList.add("fa-regular"),s.classList.remove("fa-solid")),console.log("hi")})})}l.addEventListener("change",o);n.addEventListener("change",o);function o(){let e=a;l.value!==""&&(l.value==="uber eat"?e=e.filter(s=>s.uber):l.value==="food panda"&&(e=e.filter(s=>s.foodpanda))),n.value!==""&&(e=e.filter(s=>s.hasEvent)),b(e)}function b(e){let s="";e.forEach(t=>{s+=`
      <li id="storeListItem" class="stores-card px-16 py-24 mb-40 px-md-24">
      <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
      <img src="${t.logo}">
      <div class="stores-card-body">
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
    `}),c.innerHTML=s}axios.get("https://json-server-project-wtkt.onrender.com/shops").then(e=>{a=e.data,d(),u(),o(),p()}).catch(e=>{console.error("Error fetching data:",e)});
