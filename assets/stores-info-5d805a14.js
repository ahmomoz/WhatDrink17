import"./bootstrap.min-328bce5f.js";import{a}from"./axios-28bc18a3.js";const l=document.querySelector("#branchesList");let n=[];const t=window.location.href.split("?id=").pop();a.get(`https://json-server-project-wtkt.onrender.com/shopBranches?shopId=${t}`).then(s=>{n=s.data,c()}).catch(s=>{console.error("Error fetching data:",s)});const r=()=>{let s="";n.forEach(e=>{s+=`              
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
`}),l.innerHTML=s},c=()=>{r()},d=document.querySelector("#lastestMenu");let o=[];const i=window.location.href.split("?id=").pop();a.get(`https://json-server-project-wtkt.onrender.com/shops?id=${i}`).then(s=>{o=s.data,p()}).catch(s=>{console.error("Error fetching data:",s)});const m=()=>{let s="";o.forEach(e=>{console.log(e.menu),s+=`              
        <img src="${e.menu}" class="d-block mw-100" alt="菜單">`}),d.innerHTML=s},p=()=>{m()};
