import"./bootstrap.min-cf743eeb.js";import{a as r}from"./axios-28bc18a3.js";const d=document.querySelector("#storeInfo");let e=[],o=[];const m=document.querySelector(".breadcrumb"),p=window.location.href.split("?id=").pop();r.get(`https://json-server-project-wtkt.onrender.com/shops?id=${p}`).then(s=>{e=s.data,f(),c(),b()}).catch(s=>{console.error("Error fetching data:",s)});const f=()=>{let s="";e.forEach(a=>{s+=`
    <li class="breadcrumb-item d-inline"><a href="index.html" class="breadcrumb-item fs-16">首頁</a></li>
    <li class="breadcrumb-item d-inline"><a href="stores-list.html" class="breadcrumb-item fs-16">熱門店家</a></li>
    <li class="breadcrumb-item active d-inline" aria-current="page" class="fs-16">${a.name}</li>
  `}),m.innerHTML=s},c=()=>{e.forEach(s=>{const a={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let l="";for(const t in a)s[t]&&(l+=`<li class="stores-tag">${a[t]}</li>`);o.push(l),l=""})},u=()=>{c();let s="";e.forEach(a=>{s+=`              
        <div class="row">
        <div class="col-12 col-md-4">
          <img src="${a.logo}" class="w-100" alt="logo">
        </div>
        <div class="col-12 col-md-8">
          <div class="d-flex align-items-start flex-wrap mb-16 mb-md-0">

            <div class="me-md-16 mb-16">
              <h1 class="fs-32 mb-8">${a.name}</h1>
              <ul class="d-flex text-primary m-0 p-0">
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
              </ul>
            </div>

            <div class="w-md-50 d-flex justify-content-between align-items-center mb-md-16">
              <a href="#" class="btn-collect px-12 py-8 border border-primary rounded-pill"><span
                  class="material-symbols-outlined me-4">
                  favorite
                </span>收藏店家</a>
              <ul class="d-flex m-0 p-0">
                <li class="me-16"><a href="#"><span class="material-symbols-outlined">
                      language
                    </span></a></li>
                <li><a href="#"><span class="material-symbols-outlined">
                      share
                    </span></a></li>
              </ul>
            </div>

          </div>
          <p class="mb-16">${a.Description}</p>
          <ul class="stores-tag-group mb-16">
          ${o[0]}
          </ul>
        </div>
      </div>
`}),d.innerHTML=s},b=()=>{u()},h=document.querySelector("#branchesList");let i=[];const g=window.location.href.split("?id=").pop();r.get(`https://json-server-project-wtkt.onrender.com/shopBranches?shopId=${g}`).then(s=>{i=s.data,y()}).catch(s=>{console.error("Error fetching data:",s)});const v=()=>{let s="";i.forEach(a=>{s+=`              
        <div class="col-12 col-md-6 col-lg-4 mb-16">
    <div class="border rounded-16 px-40 py-24">
      <p class="fs-20 fw-500 mb-12">${a.branchName}</p>
      <ul class="p-0 m-0">
        <li class="p-0 mb-16">
          <span class="material-symbols-outlined align-middle me-4 fs-20">
            schedule
          </span>
          ${a.businessHours}
        </li>
        <li class="p-0 mb-12">
          <span class="material-symbols-outlined align-middle me-4 fs-20">
            call
          </span>
          ${a.phone}
        </li>
        <li class="p-0 mb-12">
          <span class="material-symbols-outlined align-middle me-4 fs-20">
            location_on
          </span>
          <a href="#">${a.address}</a>
        </li>
      </ul>
    </div>
  </div>
`}),h.innerHTML=s},y=()=>{v()},w=document.querySelector("#lastestMenu");let n=[];const $=window.location.href.split("?id=").pop();r.get(`https://json-server-project-wtkt.onrender.com/shops?id=${$}`).then(s=>{n=s.data,E()}).catch(s=>{console.error("Error fetching data:",s)});const x=()=>{let s="";n.forEach(a=>{s+=`              
        <img src="${a.menu}" class="d-block mw-100" alt="菜單">`}),w.innerHTML=s},E=()=>{x()};
