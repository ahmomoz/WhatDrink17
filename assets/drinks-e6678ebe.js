import"./bootstrap.min-33c36378.js";const o=document.querySelector("#drinkList");let p=document.querySelector("#teaTypeSelect"),g=document.querySelector("#ingredientsSelect"),i=[],u=[];const v=()=>{const e=i.map(a=>a.Ingredients.length===0?`${a.TeaType}`:`${a.TeaType},${a.Ingredients}`),t=[];for(let a=0;a<e.length;a++)t.push(e[a].split(","));let n="",c=[];t.forEach(a=>{a.forEach((d,m)=>{n+=`<li class="drinks-tag">${d}</li>`,m===a.length-1&&(c.push(n),n="")}),u.push(c),c=[]})},x=()=>{let e="";i.forEach(t=>{e+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${t.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${t.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${u[t.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${t.Description}</p>
              </div>
              <a href="#" class="d-block text-primary text-end"><span
                  class="material-symbols-outlined me-2s align-middle">
                  location_on
                </span>搜尋店家</a>
            </div>
          </li>
        `}),o.innerHTML=e},T=()=>{x()};function L(){const e=document.querySelectorAll(".collect-btn");console.log(e),e.forEach(function(t){t.addEventListener("click",function(n){n.target.value=="collected"?(t.value="uncollect",t.classList.remove("fa-regular"),t.classList.add("fa-solid")):n.target.value=="uncollect"&&(t.value="collected",t.classList.add("fa-regular"),t.classList.remove("fa-solid")),console.log("hi")})})}p.addEventListener("change",f);g.addEventListener("change",f);function f(){let e=i;p.value!==""&&(e=e.filter(t=>t.TeaType.includes(p.value))),g.value!==""&&(e=e.filter(t=>t.Ingredients.includes(g.value))),$(e),b(e)}function $(e){let t="";e.forEach(n=>{t+=`
      <li class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
          value="collected"></button>
        <img src="${n.ImageLink}" alt="drink image">
        <div class="w-100 d-flex flex-column justify-content-between">
          <div class="drinks-card-body ms-16">
            <h4 class="mb-8 mb-md-12">${n.DrinkName}</h4>
            <ul class="drinks-tag-group mb-8 mb-md-12">
              ${u[n.id-1]}
            </ul>
            <p class="drinks-card-content mb-24 mb-md-32">${n.Description}</p>
          </div>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>
    `}),o.innerHTML=t}const b=e=>{const t=e.length,n=10,c=Math.ceil(t/n);let a=1;function d(r){const l=(r-1)*n,s=l+n,y=e.slice(l,s);m(y),k()}function m(r){o.innerHTML="";let l="";r.forEach(s=>{l+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${s.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${s.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${u[s.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${s.Description}</p>
              </div>
              <a href="#" class="d-block text-primary text-end"><span
                  class="material-symbols-outlined me-2s align-middle">
                  location_on
                </span>搜尋店家</a>
            </div>
          </li>
        `}),o.innerHTML=l}function k(){const r=document.getElementById("pagination");r.innerHTML="";for(let l=1;l<=c;l++){const s=document.createElement("button");s.innerText=l,s.addEventListener("click",()=>h(l)),r.appendChild(s)}r.innerHTML=str}function h(r){a=r,d(a)}d(a)};axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(e=>{i=e.data,v(),T(),f(),L(),b(i)}).catch(e=>{console.error("Error fetching data:",e)});
