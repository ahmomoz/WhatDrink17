import"./main-751fc6a2.js";const o=document.querySelector("#drinkList");let s=[],d=[];function l(){const t=s.map(function(n,i){return n.Ingredients.length===0?`${n.TeaType}`:`${n.TeaType},${n.Ingredients}`}),r=[];for(let n=0;n<t.length;n++)r.push(t[n].split(","));let e="",a=[];r.forEach(function(n){n.forEach(function(i,c){e+=`<li class="drinks-tag">${i}</li>`,c===n.length-1&&(a.push(e),e="")}),d.push(a),a=[]})}const u=()=>{let t="";s.forEach(function(r){t+=`
        <li id="drinkListItem" class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
        <img src="${r.ImageLink}">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${r.DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            ${d[r.id-1]}
          </ul>
          <p class="drinks-card-content mb-24 mb-md-32">${r.Description}</p>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>
        `}),o.innerHTML=t};function p(){u()}axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(function(t){s=t.data,l(),p()}).catch(t=>{console.error("Error fetching data:",t)});
