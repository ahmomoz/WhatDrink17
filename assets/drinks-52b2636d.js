import"./main-939ec6d3.js";const s=document.querySelector("#drinkList");let n=[];function a(){i()}axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(function(t){n=t.data,a()}).catch(t=>{console.error("Error fetching data:",t)});const i=()=>{let t="";n.forEach(function(r){t+=`
        <li id="drinkListItem" class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
        <img src="${r.ImageLink}">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${r.DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            <li class="drinks-tag">奶茶</li>
            <li class="drinks-tag">牛奶</li>
          </ul>
          <p class="drinks-card-content mb-24 mb-md-32">${r.Description}</p>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>
        `}),s.innerHTML=t};
