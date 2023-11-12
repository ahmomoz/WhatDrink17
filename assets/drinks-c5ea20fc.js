import"./main-751fc6a2.js";const a=document.querySelector("#drinkList");let e=[],s=[];function i(){const n=e.map(function(t,c){return t.Ingredients.length===0?`${t.TeaType}`:`${t.TeaType},${t.Ingredients}`}),r=[];for(let t=0;t<n.length;t++)r.push(n[t].split(","));console.log(r),s=r}const d=()=>{let n="";e.forEach(function(r){n+=`
        <li id="drinkListItem" class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
        <img src="${r.ImageLink}">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${r.DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            <li class="drinks-tag">${s[r.id-1]}</li>
          </ul>
          <p class="drinks-card-content mb-24 mb-md-32">${r.Description}</p>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>
        `}),a.innerHTML=n};function o(){d()}axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(function(n){e=n.data,i(),o()}).catch(n=>{console.error("Error fetching data:",n)});
