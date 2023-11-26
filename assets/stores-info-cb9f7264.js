import"./bootstrap.min-c9d77704.js";import{a as t}from"./axios-28bc18a3.js";const d=document.querySelector("#storeInfo");let a=[],o=[];const m=document.querySelector(".breadcrumb"),u=window.location.href.split("?id=").pop();t.get(`https://json-server-project-wtkt.onrender.com/shops?id=${u}`).then(s=>{a=s.data,f(),r(),p(),h()}).catch(s=>{console.error("Error fetching data:",s)});const f=()=>{let s="";a.forEach(e=>{s+=`
    <li class="breadcrumb-item d-inline"><a href="index.html" class="breadcrumb-item fs-16">首頁</a></li>
    <li class="breadcrumb-item d-inline"><a href="stores-list.html" class="breadcrumb-item fs-16">熱門店家</a></li>
    <li class="breadcrumb-item active d-inline" aria-current="page" class="fs-16">${e.name}</li>
  `}),m.innerHTML=s},r=()=>{a.forEach(s=>{const e={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let l="";for(const c in e)s[c]&&(l+=`<li class="stores-tag">${e[c]}</li>`);o.push(l),l=""})},b=()=>{r();let s="";a.forEach(e=>{s+=`              
        <div class="row">
        <div class="col-12 col-lg-4 mb-24 mb-lg-0">
          <img src="${e.logo}" class="w-100" alt="logo">
        </div>
        <div class="col-12 col-lg-8">
          <div class="d-flex align-items-start flex-wrap mb-16 mb-md-0">

            <div class="me-md-16 mb-16">
              <h1 class="fs-32 mb-8">${e.name}</h1>
              <ul class="d-flex text-primary m-0 p-0">
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li class="me-4"><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
              </ul>
            </div>

            <div class="w-md-80 ms-auto d-flex justify-content-between align-items-center mb-md-16">
              <button type="button" class="btn-collect px-12 py-8 border border-primary rounded-pill" value="collected">
              <i class="fa-regular fa-heart me-4 btn-collect-icon"></i>收藏店家</button>
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
          <p class="mb-16">${e.Description}</p>
          <ul class="stores-tag-group mb-16">
          ${o[0]}
          </ul>
        </div>
      </div>
`}),d.innerHTML=s},p=()=>{b()};function h(){const s=document.querySelector(".btn-collect"),e=document.querySelector(".btn-collect-icon");s.addEventListener("click",function(l){s.value=="collected"?(s.value="uncollect",s.classList.add("btn-collect-collcted"),e.classList.remove("fa-regular"),e.classList.add("fa-solid"),console.log(s)):s.value=="uncollect"&&(s.value="collected",s.classList.remove("btn-collect-collcted"),e.classList.remove("fa-solid"),e.classList.add("fa-regular"))})}const g=document.querySelector("#branchesList");let n=[];const v=window.location.href.split("?id=").pop();t.get(`https://json-server-project-wtkt.onrender.com/shopBranches?shopId=${v}`).then(s=>{n=s.data,w()}).catch(s=>{console.error("Error fetching data:",s)});const y=()=>{let s="";n.forEach(e=>{s+=`              
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
`}),g.innerHTML=s},w=()=>{y()},$=document.querySelector("#lastestMenu");let i=[];const L=window.location.href.split("?id=").pop();t.get(`https://json-server-project-wtkt.onrender.com/shops?id=${L}`).then(s=>{i=s.data,E()}).catch(s=>{console.error("Error fetching data:",s)});const x=()=>{let s="";i.forEach(e=>{s+=`              
        <img src="${e.menu}" class="d-block mw-100" alt="菜單">`}),$.innerHTML=s},E=()=>{x()};
