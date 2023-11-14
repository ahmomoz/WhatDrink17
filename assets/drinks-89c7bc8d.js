import"./bootstrap.min-362bd10f.js";const o=document.querySelector("#drinkList");let r=document.querySelector("#teaTypeSelect"),c=document.querySelector("#ingredientsSelect"),n=[],i=[];const f=()=>{const t=n.map(a=>a.Ingredients.length===0?`${a.TeaType}`:`${a.TeaType},${a.Ingredients}`),e=[];for(let a=0;a<t.length;a++)e.push(t[a].split(","));let l="",s=[];e.forEach(a=>{a.forEach((u,p)=>{l+=`<li class="drinks-tag">${u}</li>`,p===a.length-1&&(s.push(l),l="")}),i.push(s),s=[]})},g=()=>{let t="";n.forEach(e=>{t+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${e.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${e.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${i[e.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${e.Description}</p>
              </div>
              <a href="#" class="d-block text-primary text-end"><span
                  class="material-symbols-outlined me-2s align-middle">
                  location_on
                </span>搜尋店家</a>
            </div>
          </li>
        `}),o.innerHTML=t},m=()=>{g()};function b(){const t=document.querySelectorAll(".collect-btn");console.log(t),t.forEach(function(e){e.addEventListener("click",function(l){l.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):l.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid")),console.log("hi")})})}r.addEventListener("change",d);c.addEventListener("change",d);function d(){let t=n;r.value!==""&&(t=t.filter(e=>e.TeaType.includes(r.value))),c.value!==""&&(t=t.filter(e=>e.Ingredients.includes(c.value))),k(t)}function k(t){let e="";t.forEach(l=>{e+=`
      <li class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
          value="collected"></button>
        <img src="${l.ImageLink}" alt="drink image">
        <div class="w-100 d-flex flex-column justify-content-between">
          <div class="drinks-card-body ms-16">
            <h4 class="mb-8 mb-md-12">${l.DrinkName}</h4>
            <ul class="drinks-tag-group mb-8 mb-md-12">
              ${i[l.id-1]}
            </ul>
            <p class="drinks-card-content mb-24 mb-md-32">${l.Description}</p>
          </div>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>
    `}),o.innerHTML=e}axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(t=>{n=t.data,f(),m(),d(),b()}).catch(t=>{console.error("Error fetching data:",t)});
