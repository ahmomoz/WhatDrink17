import"./main-751fc6a2.js";const s=document.querySelector("#drinkList");let e=[],r;function a(){r=e.map(function(n,t){return`${n.TeaType},${n.Ingredients}`}),console.log(r)}const i=()=>{let n="";e.forEach(function(t){n+=`
        <li id="drinkListItem" class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
        <img src="${t.ImageLink}">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${t.DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            <li class="drinks-tag">${r}</li>
          </ul>
          <p class="drinks-card-content mb-24 mb-md-32">${t.Description}</p>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>
        `}),s.innerHTML=n};function d(){i()}axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(function(n){e=n.data,d(),a()}).catch(n=>{console.error("Error fetching data:",n)});
