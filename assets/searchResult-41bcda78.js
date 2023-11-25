import"./bootstrap.min-1997008c.js";const b=new URLSearchParams(window.location.search);let u=b.get("q");const r=document.querySelector("#searchDrinks");console.log(r);r.addEventListener("blur",function(){const t=r.value;t&&(u=t,f())});const p=document.querySelector("#drinkList");let c=document.querySelector("#teaTypeSelect"),i=document.querySelector("#ingredientsSelect"),n=[],d=[];const h=()=>{const t=n.map(l=>l.Ingredients.length===0?`${l.TeaType}`:`${l.TeaType},${l.Ingredients}`),e=[];for(let l=0;l<t.length;l++)e.push(t[l].split(","));let a="",s=[];e.forEach(l=>{l.forEach((m,g)=>{a+=`<li class="drinks-tag">${m}</li>`,g===l.length-1&&(s.push(a),a="")}),d.push(s),s=[]})},k=()=>{let t="";n.forEach(e=>{t+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${e.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${e.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${d[e.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${e.Description}</p>
              </div>
              <a href="#" class="d-block text-primary text-end"><span
                  class="material-symbols-outlined me-2s align-middle">
                  location_on
                </span>搜尋店家</a>
            </div>
          </li>
        `}),p.innerHTML=t},y=()=>{k()};function v(){document.querySelectorAll(".collect-btn").forEach(function(e){e.addEventListener("click",function(a){a.target.value=="collected"?(e.value="uncollect",e.classList.remove("fa-regular"),e.classList.add("fa-solid")):a.target.value=="uncollect"&&(e.value="collected",e.classList.add("fa-regular"),e.classList.remove("fa-solid")),console.log("hi")})})}c.addEventListener("change",o);i.addEventListener("change",o);function o(){let t=n;c.value!==""&&(t=t.filter(e=>e.TeaType.includes(c.value))),i.value!==""&&(t=t.filter(e=>e.Ingredients.includes(i.value))),x(t)}function x(t){let e="";t.forEach(a=>{e+=`
      <li class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
          value="collected"></button>
        <img src="${a.ImageLink}" alt="drink image">
        <div class="w-100 d-flex flex-column justify-content-between">
          <div class="drinks-card-body ms-16">
            <h4 class="mb-8 mb-md-12">${a.DrinkName}</h4>
            <ul class="drinks-tag-group mb-8 mb-md-12">
              ${d[a.id-1]}
            </ul>
            <p class="drinks-card-content mb-24 mb-md-32">${a.Description}</p>
          </div>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>
    `}),p.innerHTML=e}function f(){axios.get(`https://json-server-project-wtkt.onrender.com/drinks?q=${u}`).then(t=>{n=t.data,h(),y(),o(),v()}).catch(t=>{console.error("Error fetching data:",t)})}f();
