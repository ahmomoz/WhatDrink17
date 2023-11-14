import"./bootstrap.min-362bd10f.js";import"./test-2541c4f0.js";const o=document.querySelector("#drinkList");let s=document.querySelector("#teaTypeSelect"),i=document.querySelector("#ingredientsSelect"),r=[],d=[];const u=()=>{const e=r.map(n=>n.Ingredients.length===0?`${n.TeaType}`:`${n.TeaType},${n.Ingredients}`),t=[];for(let n=0;n<e.length;n++)t.push(e[n].split(","));let a="",l=[];t.forEach(n=>{n.forEach((m,p)=>{a+=`<li class="drinks-tag">${m}</li>`,p===n.length-1&&(l.push(a),a="")}),d.push(l),l=[]})},g=()=>{let e="";r.forEach(t=>{e+=`
          <li class="drinks-card px-16 py-24 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24"
              value="collected"></button>
            <img src="${t.ImageLink}" alt="drink image">
            <div class="w-100 d-flex flex-column justify-content-between">
              <div class="drinks-card-body ms-16">
                <h4 class="mb-8 mb-md-12">${t.DrinkName}</h4>
                <ul class="drinks-tag-group mb-8 mb-md-12">
                  ${d[t.id-1]}
                </ul>
                <p class="drinks-card-content mb-24 mb-md-32">${t.Description}</p>
              </div>
              <a href="#" class="d-block text-primary text-end"><span
                  class="material-symbols-outlined me-2s align-middle">
                  location_on
                </span>搜尋店家</a>
            </div>
          </li>
        `}),o.innerHTML=e},b=()=>{g()};s.addEventListener("change",c);i.addEventListener("change",c);function c(){let e=r;s.value!==""&&(e=e.filter(t=>t.TeaType.includes(s.value))),i.value!==""&&(e=e.filter(t=>t.Ingredients.includes(i.value))),f(e)}function f(e){let t="";e.forEach(a=>{t+=`
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
    `}),o.innerHTML=t}axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(e=>{r=e.data,u(),b(),c()}).catch(e=>{console.error("Error fetching data:",e)});
