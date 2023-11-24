import"./bootstrap.min-141e3aaa.js";import{a as l}from"./axios-28bc18a3.js";const d=document.querySelector("#storeInfo");let o=[],r=[];const m=window.location.href.split("?id=").pop();l.get(`https://json-server-project-wtkt.onrender.com/shops?id=${m}`).then(s=>{o=s.data,f(),n()}).catch(s=>{console.error("Error fetching data:",s)});const n=()=>{o.forEach(s=>{const a={uber:"uber eat",foodpanda:"food panda",hasEvent:"合作活動"};let e="";for(const t in a)s[t]&&(e+=`<li class="stores-tag">${a[t]}</li>`);r.push(e),e=""})},p=()=>{n();let s="";o.forEach(a=>{s+=`              
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
          ${r[0]}
          </ul>
        </div>
      </div>
`}),d.innerHTML=s},f=()=>{p()},h=document.querySelector("#branchesList");let c=[];const u=window.location.href.split("?id=").pop();l.get(`https://json-server-project-wtkt.onrender.com/shopBranches?shopId=${u}`).then(s=>{c=s.data,g()}).catch(s=>{console.error("Error fetching data:",s)});const b=()=>{let s="";c.forEach(a=>{s+=`              
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
`}),h.innerHTML=s},g=()=>{b()},v=document.querySelector("#lastestMenu");let i=[];const w=window.location.href.split("?id=").pop();l.get(`https://json-server-project-wtkt.onrender.com/shops?id=${w}`).then(s=>{i=s.data,$()}).catch(s=>{console.error("Error fetching data:",s)});const y=()=>{let s="";i.forEach(a=>{s+=`              
        <img src="${a.menu}" class="d-block mw-100" alt="菜單">`}),v.innerHTML=s},$=()=>{y()};
