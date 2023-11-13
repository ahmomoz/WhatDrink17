import"./main-751fc6a2.js";const c=document.querySelector("#drinkList");let a=[],i=[];const o=()=>{const t=a.map(r=>r.Ingredients.length===0?`${r.TeaType}`:`${r.TeaType},${r.Ingredients}`),n=[];for(let r=0;r<t.length;r++)n.push(t[r].split(","));let e="",s=[];n.forEach(function(r){r.forEach(function(d,l){e+=`<li class="drinks-tag">${d}</li>`,l===r.length-1&&(s.push(e),e="")}),i.push(s),s=[]})},p=()=>{let t="";a.forEach(function(n){t+=`
        <li id="drinkListItem" class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
        <img src="${n.ImageLink}">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${n.DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            ${i[n.id-1]}
          </ul>
          <p class="drinks-card-content mb-24 mb-md-32">${n.Description}</p>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>
        `}),c.innerHTML=t},k=()=>{p()};axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(t=>{a=t.data,o(),k()}).catch(t=>{console.error("Error fetching data:",t)});
