import"./bootstrap.min-426b97e8.js";const p=document.querySelector("#drinkList");let f=document.querySelector("#teaTypeSelect"),k=document.querySelector("#ingredientsSelect"),o=[],m=[];const P=()=>{const t=o.map(e=>e.Ingredients.length===0?`${e.TeaType}`:`${e.TeaType},${e.Ingredients}`),a=[];for(let e=0;e<t.length;e++)a.push(t[e].split(","));let l="",s=[];a.forEach(e=>{e.forEach((u,b)=>{l+=`<li class="drinks-tag">${u}</li>`,b===e.length-1&&(s.push(l),l="")}),m.push(s),s=[]})},B=()=>{let t="";o.forEach(a=>{t+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${a.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${a.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${m[a.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${a.Description}</p>
              </div>
              <a href="#" class="d-block text-primary text-end"><span
                  class="material-symbols-outlined me-2s align-middle">
                  location_on
                </span>搜尋店家</a>
            </div>
          </li>
        `}),p.innerHTML=t},E=()=>{B()};function T(){const t=document.querySelectorAll(".collect-btn");console.log(t),t.forEach(function(a){a.addEventListener("click",function(l){l.target.value=="collected"?(a.value="uncollect",a.classList.remove("fa-regular"),a.classList.add("fa-solid")):l.target.value=="uncollect"&&(a.value="collected",a.classList.add("fa-regular"),a.classList.remove("fa-solid")),console.log("hi")})})}f.addEventListener("change",v);k.addEventListener("change",v);function v(){let t=o;f.value!==""&&(t=t.filter(a=>a.TeaType.includes(f.value))),k.value!==""&&(t=t.filter(a=>a.Ingredients.includes(k.value))),I(t),x(t)}function I(t){let a="";t.forEach(l=>{a+=`
      <li class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
          value="collected"></button>
        <img src="${l.ImageLink}" alt="drink image">
        <div class="w-100 d-flex flex-column justify-content-between">
          <div class="drinks-card-body ms-16">
            <h4 class="mb-8 mb-md-12">${l.DrinkName}</h4>
            <ul class="drinks-tag-group mb-8 mb-md-12">
              ${m[l.id-1]}
            </ul>
            <p class="drinks-card-content mb-24 mb-md-32">${l.Description}</p>
          </div>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>
    `}),p.innerHTML=a}const x=t=>{const a=t.length,l=10,s=Math.ceil(a/l);let e=1;function u(r){const c=(r-1)*l,i=c+l,g=t.slice(c,i);b(g),L()}function b(r){p.innerHTML="";let c="";r.forEach(i=>{c+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${i.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${i.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${m[i.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${i.Description}</p>
              </div>
              <a href="#" class="d-block text-primary text-end"><span
                  class="material-symbols-outlined me-2s align-middle">
                  location_on
                </span>搜尋店家</a>
            </div>
          </li>
        `}),p.innerHTML=c}function L(){const r=document.getElementById("pagination");r.innerHTML="";let c="";for(let n=1;n<=s;n++)c+=`
      <li class="page-item mx-4 ${n===e?"active":""}">   
        <a class="page-link" href="#" data-page="${n}">${n}</a>
      </li>
    `;const i=e===1?"text-gray":"",g=e===s?"text-gray":"";r.innerHTML=`
    <li id="first-page-btn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link ${i}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
      </a>
    </li>

    <li id="previous-page-btn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link ${i}" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">chevron_left</span>
      </a>
    </li>

    ${c}

    <li id="next-page-btn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link ${g}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">chevron_right</span>
      </a>
    </li>

    <li id="last-page-btn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link ${g}" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
      </a>
    </li>`,document.querySelectorAll(".page-link").forEach(n=>{n.addEventListener("click",h=>{h.preventDefault();const $=parseInt(n.dataset.page);d($)})}),document.getElementById("previous-page-btn").addEventListener("click",n=>{n.preventDefault(),e>1&&d(e-1)}),document.getElementById("next-page-btn").addEventListener("click",n=>{n.preventDefault(),d(e+1)}),document.getElementById("first-page-btn").addEventListener("click",n=>{n.preventDefault(),d(1)}),document.getElementById("last-page-btn").addEventListener("click",n=>{n.preventDefault(),d(s)})}function y(){previousPageBtn.disabled=e===1,nextPageBtn.disabled=e===s,firstPageBtn.disabled=e===1,lastPageBtn.disabled=e===s}function d(r){e=r,u(e),y(),window.scrollTo({top:0,behavior:"smooth"})}u(e),y()};axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(t=>{o=t.data,P(),E(),v(),T(),x(o)}).catch(t=>{console.error("Error fetching data:",t)});
