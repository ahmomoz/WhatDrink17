import"./bootstrap.min-66c8f441.js";import{A as y}from"./config-ca05e4f1.js";const m=document.querySelector(".newsArea");function k(i){let c="";for(let a=0;a<i.length;a++){const l=i[a].Description.substring(0,100);c+=`<div class="col-12 news-card mb-0" id="newsCard">
        <div class="card border-0">
            <div class="row">
                <div class="col-12 col-lg-6 px-12">
                    <img src="${i[a].photo1}" class="card-img" alt="縮圖${a}">
                </div>
                <div class="col-12 col-lg-6">
                    <div class="card-body">
                        <h2 class="card-title mb-0">${i[a].title}</h2>
                        <p class="card-text release-time mb-8 mt-8">發佈日期: ${i[a].releaseTime}</p>
                        <p class="card-text">
                        ${l}...</p>
                        <div class="card-footer d-flex justify-content-end align-items-end">
                            <p class="mb-0 text-right align-items-end"><a href="news-info.html?id=${i[a].id}">繼續閱讀 ></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="mb-40 mt-20 mt-lg-40">`}console.log(c),m.innerHTML=c}const B=i=>{const c=i.length,a=5,l=Math.ceil(c/a);let n=1;function p(t){const d=(t-1)*a,s=d+a,r=i.slice(d,s);b(r),u()}function b(t){m.innerHTML="";let d="";for(let s=0;s<t.length;s++){const r=t[s].Description.substring(0,100);d+=`<div class="col-12 news-card mb-0" id="newsCard">
            <div class="card border-0">
                <div class="row">
                    <div class="col-12 col-lg-6 px-12">
                        <img src="${t[s].photo1}" class="card-img" alt="縮圖${s}">
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="card-body">
                            <h2 class="card-title mb-0">${t[s].title}</h2>
                            <p class="card-text release-time mb-8 mt-8">發佈日期: ${t[s].releaseTime}</p>
                            <p class="card-text">
                            ${r}...</p>
                            <div class="card-footer d-flex justify-content-end align-items-end">
                                <p class="mb-0 text-right align-items-end"><a href="news-info.html?id=${t[s].id}">繼續閱讀 ></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="mb-40 mt-20 mt-lg-40">`}m.innerHTML=d}function u(){const t=document.getElementById("pagination");t.innerHTML="";let d="";for(let e=1;e<=l;e++)d+=`
          <li class="page-item mx-4 ${e===n?"active":""}">   
            <a class="page-link" href="#" data-page="${e}">${e}</a>
          </li>
        `;const s=n===1?"text-gray":"",r=n===l?"text-gray":"",f=n===1?"disabled":"",x=n===1?"disabled":"",h=n===l?"disabled":"",P=n===l?"disabled":"";t.innerHTML=`
        <li id="first-page-btn" class="page-item mx-4 d-none d-md-block ${f}">
          <a class="page-link ${s}" href="#" aria-label="Previous">
            <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
          </a>
        </li>
    
        <li id="previousPageBtn" class="page-item mx-4 d-none d-md-block ${x}">
          <a class="page-link ${s}" href="#" aria-label="Previous">
            <span class="material-symbols-outlined align-middle">chevron_left</span>
          </a>
        </li>
    
        ${d}
    
        <li id="next-page-btn" class="page-item mx-4 d-none d-md-block ${h}">
          <a class="page-link ${r}" href="#" aria-label="Next">
            <span class="material-symbols-outlined align-middle">chevron_right</span>
          </a>
        </li>
    
        <li id="last-page-btn" class="page-item mx-4 d-none d-md-block ${P}">
          <a class="page-link ${r}" href="#" aria-label="Next">
            <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
          </a>
        </li>`,document.querySelectorAll(".page-link").forEach(e=>{e.addEventListener("click",v=>{v.preventDefault();const $=parseInt(e.dataset.page);g($)})});const o=[n];document.getElementById("previousPageBtn").addEventListener("click",e=>{e.preventDefault(),o[0]>1&&g(o[0]-1)}),document.getElementById("next-page-btn").addEventListener("click",e=>{e.preventDefault(),o[0]!==l&&g(o[0]+1)}),document.getElementById("first-page-btn").addEventListener("click",e=>{e.preventDefault(),o[0]>1&&g(1)}),document.getElementById("last-page-btn").addEventListener("click",e=>{e.preventDefault(),o[0]!==l&&g(l)})}function g(t){n=t,p(n),window.scrollTo(0,400)}p(n)};axios.get(`${y}/latestNews`).then(i=>{let c=i.data;k(c),B(c)});
