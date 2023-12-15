import"./bootstrap.min-feac71ab.js";import{b as o,d as b,a as p}from"./api-4c8ad0b6.js";import{A as c}from"./config-ca05e4f1.js";const h=document.querySelector("#storeInfo");let r=[],n=[];const g=document.querySelector(".breadcrumb"),t=window.location.href.split("?id=").pop(),a=sessionStorage.getItem("user_id");o.get(`${c}/shops?id=${t}`).then(async e=>{r=e.data,y(),m(),await v(),w(),S()}).catch(e=>{console.error("Error fetching data:",e)});let d;async function v(){try{d=(await o.get(`${c}/userShopCollections?userId=${a}&shopId=${t}`)).data.length===1}catch(e){console.error("Error fetching data:",e)}}const y=()=>{let e="";r.forEach(s=>{e+=`
    <li class="breadcrumb-item d-inline"><a href="index.html" class="breadcrumb-item fs-16">首頁</a></li>
    <li class="breadcrumb-item d-inline"><a href="stores-list.html" class="breadcrumb-item fs-16">熱門店家</a></li>
    <li class="breadcrumb-item active d-inline" aria-current="page" class="fs-16">${s.name}</li>
  `}),g.innerHTML=e},m=()=>{r.forEach(e=>{const s={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let l="";for(const i in s)e[i]&&(l+=`<li class="stores-tag">${s[i]}</li>`);n.push(l),l=""})},$=()=>{m();let e="";const s=d?`<button type="button" class="btn-collect px-12 py-8 border border-primary rounded-pill  btn-collect-collcted" value="collected">
    <i class="fa-heart me-4 btn-collect-icon fa-solid" aria-hidden="true"></i>收藏店家</button>`:`<button type="button" class="btn-collect px-12 py-8 border border-primary rounded-pill" value="uncollect">
    <i class="fa-regular fa-heart me-4 btn-collect-icon" aria-hidden="true"></i>收藏店家</button>`;r.forEach(l=>{e+=`              
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
              ${s}
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
`}),h.innerHTML=e},w=()=>{$()};function S(){const e=document.querySelector(".btn-collect"),s=document.querySelector(".btn-collect-icon");e.addEventListener("click",function(l){a===null?I():e.value=="collected"?(e.value="uncollect",e.classList.remove("btn-collect-collcted"),s.classList.remove("fa-solid"),s.classList.add("fa-regular"),b(a,t),Swal.fire("已取消收藏")):(e.value="collected",e.classList.add("btn-collect-collcted"),s.classList.remove("fa-regular"),s.classList.add("fa-solid"),p(a,t),Swal.fire("收藏成功"))})}function I(){window.location.href="logIn.html"}const L=document.querySelector("#branchesList");let u=[];const E=window.location.href.split("?id=").pop();o.get(`${c}/shopBranches?shopId=${E}`).then(e=>{u=e.data,D()}).catch(e=>{console.error("Error fetching data:",e)});const x=()=>{let e="";u.forEach(s=>{e+=`              
        <div class="col-12 col-md-6 col-lg-4 mb-16">
    <div class="border rounded-16 px-40 py-24">
      <p class="fs-20 fw-500 mb-12">${s.branchName}</p>
      <ul class="p-0 m-0">
        <li class="p-0 mb-16">
          <span class="material-symbols-outlined align-middle me-4 fs-20">
            schedule
          </span>
          ${s.businessHours}
        </li>
        <li class="p-0 mb-12">
          <span class="material-symbols-outlined align-middle me-4 fs-20">
            call
          </span>
          ${s.phone}
        </li>
        <li class="p-0 mb-12">
          <span class="material-symbols-outlined align-middle me-4 fs-20">
            location_on
          </span>
          <a href="#">${s.address}</a>
        </li>
      </ul>
    </div>
  </div>
`}),L.innerHTML=e},D=()=>{x()},_=document.querySelector("#lastestMenu");let f=[];const R=window.location.href.split("?id=").pop();o.get(`${c}/shops?id=${R}`).then(e=>{f=e.data,q()}).catch(e=>{console.error("Error fetching data:",e)});const T=()=>{let e="";f.forEach(s=>{e+=`              
        <img src="${s.menu}" class="d-block mw-100" alt="菜單">`}),_.innerHTML=e},q=()=>{T()};
