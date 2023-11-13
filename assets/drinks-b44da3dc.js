import"./main-751fc6a2.js";const i=document.querySelector("#drinkList");let a=document.querySelector("#teaTypeSelect");document.querySelector("#ingredientsSelect");let l=[],d=[];const u=()=>{const r=l.map(t=>t.Ingredients.length===0?`${t.TeaType}`:`${t.TeaType},${t.Ingredients}`),n=[];for(let t=0;t<r.length;t++)n.push(r[t].split(","));let s="",e=[];n.forEach(t=>{t.forEach((c,o)=>{s+=`<li class="drinks-tag">${c}</li>`,o===t.length-1&&(e.push(s),s="")}),d.push(e),e=[]})},p=()=>{let r="";l.forEach(n=>{r+=`
        <li id="drinkListItem" class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
        <img src="${n.ImageLink}">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${n.DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            ${d[n.id-1]}
          </ul>
          <p class="drinks-card-content mb-24 mb-md-32">${n.Description}</p>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>
        `}),i.innerHTML=r},m=()=>{p()};a.addEventListener("click",function(r){let n=l;(a.value==="紅茶"||a.value==="綠茶"||a.value==="奶茶"||a.value==="烏龍茶"||a.value==="冬瓜茶"||a.value==="麥茶"||a.value==="牛奶"||a.value==="鮮果汁")&&(n=l.filter(e=>e.TeaType[0]===a.value||e.TeaType[1]===a.value));let s="";n.forEach(e=>{s+=`
        <li id="drinkListItem" class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
        <img src="${e.ImageLink}">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${e.DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            ${d[e.id-1]}
          </ul>
          <p class="drinks-card-content mb-24 mb-md-32">${e.Description}</p>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>
        `}),i.innerHTML=s});axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(r=>{l=r.data,u(),m()}).catch(r=>{console.error("Error fetching data:",r)});
