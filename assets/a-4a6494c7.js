const e=document.querySelector("#drinkList");let a=[];function l(){i()}axios.get("https://json-server-project-wtkt.onrender.com/drinks").then(function(s){a=s.data,l()}).catch(s=>{console.error("Error fetching data:",s)});const i=()=>{let s="";a.forEach(function(t){s+=`
        <li id="drinkListItem" class="drinks-card px-16 py-24 px-md-24">
        <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
        <img src="${t.ImageLink}">
        <div class="drinks-card-body ms-16">
          <h4 class="mb-8 mb-md-12">${t.DrinkName}</h4>
          <ul class="drinks-tag-group mb-8 mb-md-12">
            <li class="drinks-tag">${t.TeaType[0]}</li>
          </ul>
          <p class="drinks-card-content mb-24 mb-md-32">${t.Description}</p>
          <a href="#" class="d-block text-primary text-end"><span
              class="material-symbols-outlined me-2s align-middle">
              location_on
            </span>搜尋店家</a>
        </div>
      </li>
        `}),e.innerHTML=s},o=document.querySelector("#storeList");let r=[];function n(){c()}axios.get("https://json-server-project-wtkt.onrender.com/shops").then(function(s){r=s.data,n()}).catch(s=>{console.error("Error fetching data:",s)});const c=()=>{let s="";r.forEach(function(t){s+=`
        <li id="storeListItem" class="stores-card px-16 py-24 mb-40 px-md-24">
            <button type="button" class="collect-btn border-0 text-primary fa-regular fa-heart fs-24" value="collected"></button>
            <img src="${t.logo}">
            <div class="stores-card-body">
              <div class="d-flex justify-content-between">
                <h5 class="mb-8 mb-md-12">${t.name}</h5>
                <ul class="d-flex text-primary">
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-regular fa-star"></i></li>
                </ul>
              </div>
              <p class="stores-card-content mb-16">
                ${t.Description}</p>
              <ul class="stores-tag-group mb-16">
                <li class="stores-tag">uber eat</li>
                <li class="stores-tag">food panda</li>
                <li class="stores-tag">合作活動</li>
              </ul>
              <a href="stores-info.html" class="stores-card-btn">查看店家資訊</a>
            </div>
          </li>
        `}),o.innerHTML=s};
