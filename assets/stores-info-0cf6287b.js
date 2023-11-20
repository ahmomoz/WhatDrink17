import"./bootstrap.min-0bbeed66.js";import{a}from"./axios-28bc18a3.js";const r=document.querySelector("#branchesList");let n=[];a.get("https://json-server-project-wtkt.onrender.com/shopBranches").then(s=>{n=s.data,t()}).catch(s=>{console.error("Error fetching data:",s)});const o=()=>{let s="";n.forEach(e=>{s+=`              
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
`}),r.innerHTML=s},t=()=>{o()},c=document.querySelector("#lastestMenu");let l=[];a.get("https://json-server-project-wtkt.onrender.com/shops").then(s=>{l=s.data,i()}).catch(s=>{console.error("Error fetching data:",s)});const d=()=>{let s="";l.forEach(e=>{console.log(e.menu),s+=`              
        <img src="${e.menu}" class="d-block mw-100" alt="菜單">`}),c.innerHTML=s},i=()=>{d()};
