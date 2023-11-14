import"./main-751fc6a2.js";const o=document.querySelector("#drinkList");let l=document.querySelector("#teaTypeSelect"),i=document.querySelector("#ingredientsSelect"),n=[],d=[];const u=()=>{const e=n.map(r=>r.Ingredients.length===0?`${r.TeaType}`:`${r.TeaType},${r.Ingredients}`),t=[];for(let r=0;r<e.length;r++)t.push(e[r].split(","));let a="",s=[];t.forEach(r=>{r.forEach((p,m)=>{a+=`<li class="drinks-tag">${p}</li>`,m===r.length-1&&(s.push(a),a="")}),d.push(s),s=[]})},g=()=>{let e="";n.forEach(t=>{e+=`
        <li id="drinkListItem" class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
        <img src="${t.ImageLink}">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${t.DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            ${d[t.id-1]}
          </ul>
          <p class="drinks-card-content mb-24 mb-md-32">${t.Description}</p>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>
        `}),o.innerHTML=e},b=()=>{g()};l.addEventListener("change",c);i.addEventListener("change",c);function c(){let e=n;l.value!==""&&(e=e.filter(t=>t.TeaType.includes(l.value))),i.value!==""&&(e=e.filter(t=>t.Ingredients.includes(i.value))),k(e)}function k(e){let t="";e.forEach(a=>{t+=`
      <li id="drinkListItem" class="drinks-card px-16 py-24 px-md-24">
      <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
      <img src="${a.ImageLink}">
      <div class="drinks-card-body ms-16">
        <h4 class="mb-8 mb-md-12">${a.DrinkName}</h4>
        <ul class="drinks-tag-group mb-8 mb-md-12">
          ${d[a.id-1]}
        </ul>
        <p class="drinks-card-content mb-24 mb-md-32">${a.Description}</p>
        <a href="#" class="d-block text-primary text-end"><span
            class="material-symbols-outlined me-2s align-middle">
            location_on
          </span>搜尋店家</a>
      </div>
    </li>
    `}),o.innerHTML=t}axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(e=>{n=e.data,u(),b(),c()}).catch(e=>{console.error("Error fetching data:",e)});
