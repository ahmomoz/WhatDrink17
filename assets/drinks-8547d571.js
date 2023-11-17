import"./bootstrap.min-362bd10f.js";const m=document.querySelector("#drinkList");let b=document.querySelector("#teaTypeSelect"),f=document.querySelector("#ingredientsSelect"),o=[],g=[];const E=()=>{const e=o.map(a=>a.Ingredients.length===0?`${a.TeaType}`:`${a.TeaType},${a.Ingredients}`),t=[];for(let a=0;a<e.length;a++)t.push(e[a].split(","));let n="",c=[];t.forEach(a=>{a.forEach((u,p)=>{n+=`<li class="drinks-tag">${u}</li>`,p===a.length-1&&(c.push(n),n="")}),g.push(c),c=[]})},P=()=>{let e="";o.forEach(t=>{e+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${t.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${t.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${g[t.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${t.Description}</p>
              </div>
              <a href="#" class="d-block text-primary text-end"><span
                  class="material-symbols-outlined me-2s align-middle">
                  location_on
                </span>搜尋店家</a>
            </div>
          </li>
        `}),m.innerHTML=e},T=()=>{P()};function $(){const e=document.querySelectorAll(".collect-btn");console.log(e),e.forEach(function(t){t.addEventListener("click",function(n){n.target.value=="collected"?(t.value="uncollect",t.classList.remove("fa-regular"),t.classList.add("fa-solid")):n.target.value=="uncollect"&&(t.value="collected",t.classList.add("fa-regular"),t.classList.remove("fa-solid")),console.log("hi")})})}b.addEventListener("change",k);f.addEventListener("change",k);function k(){let e=o;b.value!==""&&(e=e.filter(t=>t.TeaType.includes(b.value))),f.value!==""&&(e=e.filter(t=>t.Ingredients.includes(f.value))),B(e),y(e)}function B(e){let t="";e.forEach(n=>{t+=`
      <li class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
          value="collected"></button>
        <img src="${n.ImageLink}" alt="drink image">
        <div class="w-100 d-flex flex-column justify-content-between">
          <div class="drinks-card-body ms-16">
            <h4 class="mb-8 mb-md-12">${n.DrinkName}</h4>
            <ul class="drinks-tag-group mb-8 mb-md-12">
              ${g[n.id-1]}
            </ul>
            <p class="drinks-card-content mb-24 mb-md-32">${n.Description}</p>
          </div>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>
    `}),m.innerHTML=t}const y=e=>{const t=e.length,n=10,c=Math.ceil(t/n);let a=1;function u(s){const i=(s-1)*n,r=i+n,v=e.slice(i,r);p(v),h()}function p(s){m.innerHTML="";let i="";s.forEach(r=>{i+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${r.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${r.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${g[r.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${r.Description}</p>
              </div>
              <a href="#" class="d-block text-primary text-end"><span
                  class="material-symbols-outlined me-2s align-middle">
                  location_on
                </span>搜尋店家</a>
            </div>
          </li>
        `}),m.innerHTML=i}function h(){const s=document.getElementById("pagination");s.innerHTML="";let i="";for(let l=1;l<=c;l++)i+=`
    <li class="page-item mx-4"><a class="page-link" href="#" data-page="${l}">${l}</a></li>
    `;s.innerHTML=`
    <li id="first-page-btn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_left</span>
      </a>
    </li>

    <li id="previous-page-btn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link" href="#" aria-label="Previous">
        <span class="material-symbols-outlined align-middle">chevron_left</span>
      </a>
    </li>

    ${i}

    <li id="next-page-btn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">chevron_right</span>
      </a>
    </li>

    <li id="last-page-btn" class="page-item mx-4 d-none d-md-block">
      <a class="page-link" href="#" aria-label="Next">
        <span class="material-symbols-outlined align-middle">keyboard_double_arrow_right</span>
      </a>
    </li>`,document.querySelectorAll(".page-link").forEach(l=>{l.addEventListener("click",x=>{x.preventDefault();const L=parseInt(l.dataset.page);d(L)})}),document.getElementById("previous-page-btn").addEventListener("click",l=>{l.preventDefault(),d(a-1)}),document.getElementById("next-page-btn").addEventListener("click",l=>{l.preventDefault(),d(a+1)}),document.getElementById("first-page-btn").addEventListener("click",l=>{l.preventDefault(),d(1)}),document.getElementById("last-page-btn").addEventListener("click",l=>{l.preventDefault(),d(c)})}function d(s){a=s,u(a)}u(a)};axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(e=>{o=e.data,E(),T(),k(),$(),y(o)}).catch(e=>{console.error("Error fetching data:",e)});
