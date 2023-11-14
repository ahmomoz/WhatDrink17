import"./main-751fc6a2.js";const c=document.querySelector("#storeList");let a=document.querySelector("#deliverySelect"),d=document.querySelector("#CooperationSelect"),l=[],r=[];const n=()=>{l.forEach(s=>{const t={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let e="";for(const o in t)s[o]&&(e+=`<li class="stores-tag">${t[o]}</li>`);r.push(e),e=""})},f=()=>{let s="";l.forEach(t=>{s+=`
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
        `}),c.innerHTML=s},u=()=>{f()};a.addEventListener("change",i);d.addEventListener("change",i);function i(){let s=l;a.value!==""&&(a.value==="uber eat"?s=s.filter(t=>t.uber):a.value==="food panda"&&(s=s.filter(t=>t.foodpanda))),d.value!==""&&(s=s.filter(t=>t.hasEvent)),p(s)}function p(s){let t="";s.forEach(e=>{t+=`
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
          ${r[e.id-1]}
        </ul>
        <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
      </div>
    </li>
    `}),c.innerHTML=t}axios.get("https://json-server-project-wtkt.onrender.com/shops").then(s=>{l=s.data,n(),u(),i()}).catch(s=>{console.error("Error fetching data:",s)});
