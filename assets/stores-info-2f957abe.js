import"./bootstrap.min-feac71ab.js";import{a as t,d as f,b as p}from"./api-1053ecda.js";import{A as c}from"./config-ca05e4f1.js";const h=document.querySelector("#storeInfo");let o=[],n=[];const g=document.querySelector(".breadcrumb"),a=window.location.href.split("?id=").pop(),r=sessionStorage.getItem("user_id");t.get(`${c}/shops?id=${a}`).then(async s=>{o=s.data,y(),m(),await v(),w(),I()}).catch(s=>{console.error("Error fetching data:",s)});let d;async function v(){try{d=(await t.get(`${c}/userShopCollections?userId=${r}&shopId=${a}`)).data.length===1}catch(s){console.error("Error fetching data:",s)}}const y=()=>{let s="";o.forEach(e=>{s+=`
    <li class="breadcrumb-item d-inline"><a href="index.html" class="breadcrumb-item fs-16">首頁</a></li>
    <li class="breadcrumb-item d-inline"><a href="stores-list.html" class="breadcrumb-item fs-16">熱門店家</a></li>
    <li class="breadcrumb-item active d-inline" aria-current="page" class="fs-16">${e.name}</li>
  `}),g.innerHTML=s},m=()=>{o.forEach(s=>{const e={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let l="";for(const i in e)s[i]&&(l+=`<li class="stores-tag">${e[i]}</li>`);n.push(l),l=""})},$=()=>{m();let s="";const e=d?`<button type="button" class="btn-collect px-12 py-8 border border-primary rounded-pill  btn-collect-collcted" value="collected">
    <i class="fa-heart me-4 btn-collect-icon fa-solid" aria-hidden="true"></i>收藏店家</button>`:`<button type="button" class="btn-collect px-12 py-8 border border-primary rounded-pill" value="uncollect">
    <i class="fa-regular fa-heart me-4 btn-collect-icon" aria-hidden="true"></i>收藏店家</button>`;o.forEach(l=>{s+=`              
        <div class="row">
        <div class="col-12 col-lg-4 mb-24 mb-lg-0">
          <img src="${l.logo}" class="w-100" alt="logo">
        </div>
        <div class="col-12 col-lg-8">
          <div class="d-flex align-items-start flex-wrap mb-16 mb-md-0">

            <div class="me-md-16 mb-16">
              <h1 class="fs-32 mb-8">${l.name}</h1>
              <ul class="d-flex text-primary m-0 p-0">
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
              </ul>
            </div>

            <div class="w-md-80 ms-auto d-flex justify-content-between align-items-center mb-md-16">
              ${e}
              <ul class="d-flex m-0 p-0">
                <li class="me-16"><a href="${l.officialWebsite}"><span class="material-symbols-outlined">
                      language
                    </span></a></li>
                <li><a href="#"><span class="material-symbols-outlined">
                      share
                    </span></a></li>
              </ul>
            </div>

          </div>
          <p class="mb-16">${l.Description}</p>
          <ul class="stores-tag-group mb-16">
          ${n[0]}
          </ul>
        </div>
      </div>
`}),h.innerHTML=s},w=()=>{$()};function I(){const s=document.querySelector(".btn-collect"),e=document.querySelector(".btn-collect-icon");s.addEventListener("click",function(l){s.value=="collected"?(s.value="uncollect",s.classList.remove("btn-collect-collcted"),e.classList.remove("fa-solid"),e.classList.add("fa-regular"),f(r,a)):(s.value="collected",s.classList.add("btn-collect-collcted"),e.classList.remove("fa-regular"),e.classList.add("fa-solid"),p(r,a))})}const L=document.querySelector("#branchesList");let u=[];const S=window.location.href.split("?id=").pop();t.get(`${c}/shopBranches?shopId=${S}`).then(s=>{u=s.data,x()}).catch(s=>{console.error("Error fetching data:",s)});const E=()=>{let s="";u.forEach(e=>{s+=`              
        <div class="col-12 col-md-6 col-lg-4 mb-16">
    <div class="border rounded-16 px-40 py-24">
      <p class="fs-20 fw-500 mb-12">${e.branchName}</p>
      <ul class="p-0 m-0">
        <li class="p-0 mb-16">
          <span class="material-symbols-outlined align-middle me-4 fs-20">
            schedule
          </span>
          ${e.businessHours}
        </li>
        <li class="p-0 mb-12">
          <span class="material-symbols-outlined align-middle me-4 fs-20">
            call
          </span>
          ${e.phone}
        </li>
        <li class="p-0 mb-12">
          <span class="material-symbols-outlined align-middle me-4 fs-20">
            location_on
          </span>
          <a href="#">${e.address}</a>
        </li>
      </ul>
    </div>
  </div>
`}),L.innerHTML=s},x=()=>{E()},D=document.querySelector("#lastestMenu");let b=[];const _=window.location.href.split("?id=").pop();t.get(`${c}/shops?id=${_}`).then(s=>{b=s.data,q()}).catch(s=>{console.error("Error fetching data:",s)});const R=()=>{let s="";b.forEach(e=>{s+=`              
        <img src="${e.menu}" class="d-block mw-100" alt="菜單">`}),D.innerHTML=s},q=()=>{R()};
